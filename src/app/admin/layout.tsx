"use client";

import { ReactNode } from "react";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.css"
      />
      <script
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        async
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.CMS_MANUAL_INIT = true;`,
        }}
      />
      {children}
    </>
  );
}
