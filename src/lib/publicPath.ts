function trimSlashes(s: string) {
  return s.replace(/^\/+|\/+$/g, "");
}

const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
const prefix =
  raw === "" || raw === "/" ? "" : `/${trimSlashes(raw)}`;

export function publicUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return prefix ? `${prefix}${p}` : p;
}
