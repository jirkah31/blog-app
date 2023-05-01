export type navLinksT = {
  id: number,
  path: string,
  content: string,
}

export const navLinks: navLinksT[] = [
  { id: 0, path: "/", content: "CAT" },
  { id: 1, path: "/", content: "Recent Articles" },
  { id: 2, path: "/about", content: "About" },
  { id: 3, path: "/login", content: "Log in" },
];
