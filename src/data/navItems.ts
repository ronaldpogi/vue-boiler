import { $slugify } from "@/helpers/helpers";
import type { SideNav, HeadNav } from "@/types/nav";

const sideNav: SideNav[] = [
  {
    id: "1",
    name: "Dashboard",
    path: "/",
    icon: "fa-solid fa-chart-pie",
  },
  {
    id: "2",
    name: "Users",
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
    path: "/",
    icon: "",
  },
].map((item) => ({
  ...item,
  slug: $slugify(item.name),
}));

export { sideNav, headNav };
