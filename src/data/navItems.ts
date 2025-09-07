import { $slugify } from "@/helpers/helpers";
import type { SideNav, HeadNav } from "@/types/nav";

const sideNav: SideNav[] = [
  {
    id: "1",
    name: "Dashboard",
    slug: null,
    path: "/",
    icon: "fa-solid fa-chart-pie",
  },
  {
    id: "2",
    name: "Users",
    slug: null,
    path: "/users",
    icon: "fa-solid fa-users",
  },
].map((item) => ({
  ...item,
  slug: $slugify(item.name),
}));

const headNav: HeadNav[] = [
  {
    id: "1",
    name: "Dashboard",
    slug: null,
    path: "/",
    icon: "",
  },
].map((item) => ({
  ...item,
  slug: $slugify(item.name),
}));

export { sideNav, headNav };
