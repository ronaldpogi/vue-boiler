interface SideNav {
  id: string;
  name: string;
  slug: string | null;
  path: string;
  icon: string;
}

interface HeadNav {
  id: string;
  name: string;
  slug: string | null;
  path: string;
  icon: string;
}

export { SideNav, HeadNav };
