export type ProjectSection = {
  title: string;
  text: string;
};

export type Project = {
  slug: string;
  title: string;

  /**
   * Public LMG Group project ownership:
   * - Group: projects, products and initiatives developed directly by LMG Group
   * - Music: LMG Music, including live entertainment
   * - Agency: LMG Agency, covering strategy, creative and digital
   */
  division: "Group" | "Music" | "Agency";

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
  titleEn?: string;
  textEn?: string;
};

export type NewsArticle = {
  slug: string;
  title: string;
  titleEn?: string;
  category: string;
  categoryEn?: string;
  publishedAt: string;
  dateLabel?: string;
  intro: string;
  introEn?: string;
  image?: string;
  sections: readonly NewsSection[];
};