"use client";

/**
 * Admin Page - Redirect to Decap CMS
 *
 * This page redirects to the Express backend admin panel at http://localhost:8081/admin
 * which hosts the complete Decap CMS interface with:
 *
 * ✓ Proxy backend for collections (blog, authors, tags)
 * ✓ Static YAML configuration (public/admin/config.yml)
 * ✓ Deployment management modal
 * ✓ Build history and logs
 * ✓ Git automation integration
 */

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Redirect to Express backend admin panel
    window.location.href = "http://localhost:8081/admin";
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", color: "#475569" }}>
        <div style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>
          Redirecting to Decap CMS...
        </div>
        <div style={{ fontSize: "14px", marginBottom: "16px" }}>
          If not automatically redirected, click the link below:
        </div>
        <a
          href="http://localhost:8081/admin"
          style={{
            color: "#37b6df",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Open Decap CMS (http://localhost:8081/admin)
        </a>
      </div>
    </div>
  );
}
