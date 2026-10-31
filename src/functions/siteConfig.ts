const configFiles = import.meta.glob("/content/site-config.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const rawContent = Object.values(configFiles)[0] as string;

function parseFrontmatter(content: string) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!match) {
    throw new Error("Invalid site-config.md: Missing frontmatter.");
  }

  const metadata: Record<string, string> = {};

  match[1].split(/\r?\n/).forEach((line) => {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) return;

    const key = line.slice(0, separatorIndex).trim();
    const value = line
      .slice(separatorIndex + 1)
      .trim()
      .replace(/^["']|["']$/g, "");

    metadata[key] = value;
  });

  return metadata;
}

const config = parseFrontmatter(rawContent);

export const siteConfig = {
  author: config.author ?? "",
  title: config.title ?? "",
  description: config.description ?? "",

  contactEmail: config.contactEmail ?? "",

  hostingProvider: config.hostingProvider ?? "",
  hostingPrivacyUrl: config.hostingPrivacyUrl ?? "",

  socialLinks: {
    instagram: config.instagram ?? "",
    tumblr: config.tumblr ?? "",
    tiktok: config.tiktok ?? "",
  },
};