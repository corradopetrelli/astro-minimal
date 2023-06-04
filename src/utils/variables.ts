import { SocialButton, MenuOptions, PageData } from "../types/types";

export const socialButtons: SocialButton[] = [
  {
    icon: "eva:linkedin-outline",
    url: "https://www.linkedin.com/in/domenico-tenace/",
  },
  {
    icon: "eva:github-outline",
    url: "https://github.com/DomeT99",
  },
  {
    icon: "eva:twitter-outline",
    url: "https://twitter.com/dome_tena99",
  },
];

export const menuOptions: MenuOptions[] = [
  {
    label: "BLOG",
    url: "/blog",
  },
  {
    label: "PROJECTS",
    url: "/projects",
  },
  {
    label: "OPEN SOURCE",
    url: "/opensource",
  },
];

export const indexData: PageData = {
  title: "Software Developer",
  description: "Hi nice to meet you! I'm Domenico and I'm a Software Developer."
}

export const openSourceData: PageData = {
  title: "Open Source",
  description: "Some Open Source projects that I've contributed!"
}