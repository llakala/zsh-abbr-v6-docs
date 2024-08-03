import { defineConfig } from "vitepress";

const description =
  "The zsh manager for auto-expanding abbreviations, inspired by fish.";
const title = "zsh-abbr";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: title,
  description: description,
  // https://vitepress.dev/reference/site-config#titletemplate
  titleTemplate: `:title :: ${title}`, // to change delimiter from default pipe to play nice with Fathom event id format. see also homepage frontmatter
  // https://vitepress.dev/reference/default-theme-last-updated
  lastUpdated: true,

  head: [
    // favicon generated by https://realfavicongenerator.net/
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#fefefe",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#ffffff",
      },
    ],

    // social metas
    ["meta", { property: "og:title", content: "zsh-abbr" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "The zsh manager for auto-expanding abbreviations, inspired by fish.",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://zsh-abbr.olets.dev/",
      },
    ],
    ["meta", { property: "og:site_name", content: "zsh-abbr" }],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://zsh-abbr.olets.dev/images/zsh-abbr.png",
      },
    ],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { name: "twitter:title", content: "zsh-abbr" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "The zsh manager for auto-expanding abbreviations, inspired by fish shell.",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://zsh-abbr.olets.dev/images/zsh-abbr.png",
      },
    ],

    // Analytics
    [
      "script",
      {
        src: "https://cdn.usefathom.com/script.js",
        "data-site": "KVOUORES",
        defer: "true",
      },
    ],
    [
      "script",
      {
        src: "/js/analytics.js",
      },
    ],

    // Font
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "true",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  markdown: {
    externalLinks: {
      class: "vp-external-link-icon",
      target: "_self",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    editLink: {
      pattern: "https://github.com/olets/zsh-abbr-v6-docs/edit/main/docs/:path",
    },

    // logo: {
    //   alt: "tailwindcss-fluid-font-size Logo",
    //   src: "/icon.svg",
    // },

    nav: [
      {
        text: "v6",
        items: [
          {
            text: "v6",
            link: "",
            target: "_self",
          },
          {
            text: "v5",
            link: "https://v5.zsh-abbr.olets.dev",
            target: "_self",
          },
          {
            text: "v4",
            link: "https://v4.zsh-abbr.olets.dev",
            target: "_self",
          },
        ],
      },
      {
        text: "Changelog",
        link: "https://github.com/olets/zsh-abbr/blob/main/CHANGELOG.md",
        target: "_self",
      },
      {
        text: "License",
        link: "https://github.com/olets/zsh-abbr/blob/main/LICENSE",
        target: "_self",
      },
      // Manual instead of with defaultTheme's `repo` so that we can specify the `target`
      {
        text: "GitHub",
        link: "https://github.com/olets/zsh-abbr",
        target: "_self",
      },
      {
        text: "olets.dev",
        link: "https://olets.dev",
        target: "_self",
      },
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "Introduction",
        link: "/",
      },
      {
        text: "Installation",
        link: "/installation",
      },
      {
        text: "Usage",
        link: "/usage",
      },
      {
        text: "Reference",
        items: [
          {
            text: "Scopes",
            link: "/scopes",
          },
          {
            text: "Types",
            link: "/types",
          },
          {
            text: "Commands",
            link: "/commands",
          },
          {
            text: "Advanced",
            link: "/advanced",
          },
          {
            text: "Performance",
            link: "/performance",
          },
        ],
      },
      {
        text: "Contribute",
        items: [
          {
            text: "Contributing",
            link: "/contributing.html",
          },
          {
            text: "Sponsoring",
            link: "/contributing.html#sponsoring",
          },
          {
            text: "Community",
            link: "/external/community.md",
          },
        ],
      },
      {
        text: "Migrating between versions",
        link: "/migrating-between-versions",
      },
      {
        text: "Uninstalling",
        link: "/uninstalling",
      },
    ],

    socialLinks: [],
  },
});