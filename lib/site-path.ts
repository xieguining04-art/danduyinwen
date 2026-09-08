const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const basePath = configuredBasePath === "/" ? "" : configuredBasePath.replace(/\/$/, "");

export function sitePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;

  const match = path.match(/^([^?#]*)([?#].*)?$/);
  const pathname = match?.[1] ?? path;
  const suffix = match?.[2] ?? "";
  const lastSegment = pathname.split("/").pop() ?? "";
  const normalizedPath =
    pathname === "/" || pathname.endsWith("/") || lastSegment.includes(".")
      ? pathname
      : `${pathname}/`;

  return `${basePath}${normalizedPath}${suffix}`;
}
