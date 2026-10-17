import type { StaticImageData } from "next/image";

export type Level = "junior" | "collegiate" | "professional";

export type League = {
  abbreviation: string;
  name: string;
  level: Level;
  logo: StaticImageData;
};
