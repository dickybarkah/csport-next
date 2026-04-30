"use server";

import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(120),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Tell us a little more").max(2000),
  // Honeypot: should always be empty for real submissions
  company: z.string().max(0).optional(),
});

export type ContactState = {
  ok: boolean;
  message: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

export async function submitContact(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const parsed = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    company: formData.get("company") ?? "",
  });

  if (!parsed.success) {
    const errors: ContactState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as "name" | "email" | "message";
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return { ok: false, message: "Please fix the errors below.", errors };
  }

  // Honeypot triggered → silently succeed without sending
  if (parsed.data.company) {
    return { ok: true, message: "Thanks!" };
  }

  // TODO: integrate Resend / Web3Forms before production deploy.
  // For now log to server console so dev can verify the action runs.
  console.log("[contact] new submission", {
    name: parsed.data.name,
    email: parsed.data.email,
    message: parsed.data.message.slice(0, 200),
  });

  return {
    ok: true,
    message: "Thanks — we'll be in touch within 1 business day.",
  };
}
