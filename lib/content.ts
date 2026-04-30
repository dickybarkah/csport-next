import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type BookingTarget = {
  name: string;
  slug: string; // megatix slug or full URL
};

export type ClassItem = {
  title: string;
  slug: string;
  excerpt?: string;
  thumbnail?: string;
  booking?: BookingTarget[];
  body: string;
};

export type FacilityItem = {
  title: string;
  slug: string;
  excerpt?: string;
  thumbnail?: string;
  body: string;
};

async function readDir(dir: string) {
  try {
    const files = await fs.readdir(dir);
    return files.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  } catch {
    return [];
  }
}

async function loadAll<T>(subdir: string): Promise<T[]> {
  const dir = path.join(CONTENT_DIR, subdir);
  const files = await readDir(dir);
  const items = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(path.join(dir, file), "utf-8");
      const { data, content } = matter(raw);
      return { ...data, body: content.trim() } as T;
    }),
  );
  return items;
}

export async function getClasses(): Promise<ClassItem[]> {
  const items = await loadAll<ClassItem>("classes");
  return items.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getClass(slug: string): Promise<ClassItem | null> {
  const items = await getClasses();
  return items.find((c) => c.slug === slug) ?? null;
}

export async function getFacilities(): Promise<FacilityItem[]> {
  const items = await loadAll<FacilityItem>("facilities");
  return items.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getFacility(slug: string): Promise<FacilityItem | null> {
  const items = await getFacilities();
  return items.find((f) => f.slug === slug) ?? null;
}
