export interface Fanfiction {
  slug: string;
  title: string;
  author: string;
  description: string;
  fandom: string;
  rating: string; 
  status: string;
  language: string;
  category: string;
  warnings: string;
  tags: string[];
  chapters: Chapter[];
}
export interface Chapter {
  title: string;
  content: string;
}

const files = import.meta.glob("/content/fanfictions/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;


export const fanfictions: Fanfiction[] = Object.entries(files).map(
  ([path, raw]) => {
    const [, frontmatter, content] = raw.match(
      /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/
    ) ?? [];

    if (!frontmatter) {
      throw new Error(`Invalid frontmatter: ${path}`);
    }

    const metadata: Record<string, string> = {};

    frontmatter.split(/\r?\n/).forEach((line) => {
      const separator = line.indexOf(":");

      if (separator === -1) return;

      const key = line.slice(0, separator).trim();
      const value = line.slice(separator + 1).trim();

      metadata[key] = value.replace(/^["']|["']$/g, "");
    });

    const chapters = content
        .split(/<!--\s*chapter\s*-->/)
        .map((chapter) => chapter.trim())
        .filter(Boolean)
        .map((chapter) => {
            const lines = chapter.split(/\r?\n/);

            const titleLine = lines.find((line) => line.startsWith("# "));

            return {
                title: titleLine?.replace(/^# /, "") ?? "Untitled Chapter",
                content: chapter,
            };
        });

    return {
      slug: path.split("/").pop()!.replace(/\.md$/, ""),
      ...metadata,
      tags: (metadata.tags?? "").split(",").map((tag)=>tag.trim()).filter(Boolean),
      warnings:(metadata.warnings === "-" ? "No warning added" : metadata.warnings),
    chapters,
    } as Fanfiction;
  }
);