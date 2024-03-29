import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZZDev",
  description: "Let's build from here",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "Posts", link: "/posts/" },
      { text: "Members", link: "/members/" },
    ],

    // sidebar: [
    //   {
    //     text: 'Projects',
    //     items: [
    //     ]
    //   }
    // ],

    socialLinks: [{ icon: "github", link: "https://github.com/zz-developer/" }],
  },
});
