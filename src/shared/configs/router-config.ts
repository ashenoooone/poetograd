export type Routes = "main" | "about-us" | "authors" | "works";

export const routerConfig: Record<Routes, string> = {
  main: "/",
  "about-us": "/about-us",
  authors: "/authors",
  works: "/works",
};
