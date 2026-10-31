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

const files = import.meta.glob([
    "/content/fanfictions/*.md",
    "!/content/fanfictions/fanfiction-template.md",
  ], {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export const fanfictions: Fanfiction[] = Object.entries(files).flatMap(
  ([path, raw]) => {
    try {
      const [, frontmatter, content] = raw.match(
        /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/
      ) ?? [];

      if (!frontmatter) {
        throw new Error("Missing or invalid frontmatter.");
      }

      const metadata: Record<string, string> = {};

      frontmatter.split(/\r?\n/).forEach((line) => {
        const separator = line.indexOf(":");

        if (separator === -1) return;

        const key = line.slice(0, separator).trim();
        const value = line.slice(separator + 1).trim();

        metadata[key] = value.replace(/^["']|["']$/g, "");
      });

      const requiredFields = [
        "title",
        "author",
        "description",
        "fandom",
        "rating",
        "language",
      ];

      const errors = requiredFields
        .filter((field) => !metadata[field]?.trim())
        .map((field) => `Missing required field: ${field}`);

      if (errors.length > 0) {
        throw new Error(errors.join("\n"));
      }

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

      if (chapters.length === 0) {
        throw new Error("No valid chapters found.");
      }

      return {
        slug: path.split("/").pop()!.replace(/\.md$/, ""),
        ...metadata,
        tags: (metadata.tags ?? "")
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        warnings:
          metadata.warnings === "-" || !metadata.warnings
            ? "No warning added"
            : metadata.warnings,
        chapters,
      } as Fanfiction;
    } catch (error) {
      return [];
    }
  }
);