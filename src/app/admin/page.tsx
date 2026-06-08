"use client";

import { useEffect } from "react";

export default function AdminPage() {
  // Hide parent layout immediately
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      body {
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
      }
      main, header, nav, footer, #__next > * > :not(#admin-container) {
        display: none !important;
      }
      #__next {
        width: 100vw !important;
        height: 100vh !important;
        margin: 0 !important;
        padding: 0 !important;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  useEffect(() => {
    initializeCMS();

    async function initializeCMS() {
      // Give CMS script time to load
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if ((window as any).CMS) {
        try {
          console.log("Initializing Decap CMS...");
          (window as any).CMS.init({
            config: {
              load_config_file: false,
              backend: {
                name: "test-repo",
              },
              media_folder: "public/upload",
              public_folder: "/upload",
              collections: [
                {
                  name: "blog",
                  label: "Blog Posts",
                  folder: "src/content/blog",
                  create: true,
                  slug: "{{slug}}",
                  extension: "md",
                  format: "frontmatter",
                  fields: [
                    {
                      label: "Title",
                      name: "title",
                      widget: "string",
                    },
                    {
                      label: "Slug",
                      name: "slug",
                      widget: "string",
                    },
                    {
                      label: "Author",
                      name: "author",
                      widget: "string",
                    },
                    {
                      label: "Published",
                      name: "published",
                      widget: "datetime",
                    },
                    {
                      label: "Updated",
                      name: "updated",
                      widget: "datetime",
                    },
                    {
                      label: "Featured",
                      name: "featured",
                      widget: "boolean",
                      default: false,
                    },
                    {
                      label: "Featured Image",
                      name: "featuredImage",
                      widget: "image",
                      required: false,
                    },
                    {
                      label: "Featured Image Alt",
                      name: "featuredImageAlt",
                      widget: "string",
                      required: false,
                    },
                    {
                      label: "Excerpt",
                      name: "excerpt",
                      widget: "text",
                    },
                    {
                      label: "Tags",
                      name: "tags",
                      widget: "list",
                      required: false,
                    },
                    {
                      label: "Body",
                      name: "body",
                      widget: "markdown",
                    },
                  ],
                },
              ],
            },
          });
          console.log("✅ Decap CMS initialized successfully!");
        } catch (err) {
          console.error("❌ Failed to initialize CMS:", err);
        }
      } else {
        console.error(
          "❌ CMS object not found. Scripts may not have loaded correctly."
        );
      }
    }
  }, []);

  return (
    <div
      id="admin-container"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        padding: 0,
        overflow: "hidden",
        zIndex: 9999,
      }}
    >
      <div id="netlify-cms" style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
