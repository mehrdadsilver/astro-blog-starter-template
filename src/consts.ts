// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Mehrdad Abdolghafari";
export const SITE_DESCRIPTION =
  "Ideas, projects and articles about AI, Agentic AI and Cloud solutions.";

export const CATEGORIES = [
  { slug: "agentic-ai", name: "Agentic AI", icon: "🤖" },
  { slug: "cloud-platform", name: "Cloud Platform", icon: "☁️" },
  { slug: "kubernetes", name: "Kubernetes", icon: "⎈" },
] as const;

export type Category = (typeof CATEGORIES)[number]["slug"];
