export type ProjectSection = {
  title: string;
  text: string;
};

export type Project = {
  slug: string;
  title: string;

  /**
   * Public LMG Group architecture:
   * - Music includes live entertainment
   * - Agency covers strategy, creative and digital
   */
  division: "Music" | "Agency";

  category: string;
  image: string;
  alt: string;
  intro: string;
  heading: string;
  body: string;
  context: string;
  focus: string;
  href: string;
  linkLabel: string;
  sections?: readonly ProjectSection[];
};

export type NewsSection = {
  title: string;
  text: string;
};

export type NewsArticle = {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  dateLabel?: string;
  intro: string;
  sections: readonly NewsSection[];
};