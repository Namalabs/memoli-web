"use client";

import React from "react";
import AppleIcon from "./AppleIcon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  className?: string;
  useDownloadButton?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  href = "https://www.apple.com/id/app-store",
  children,
  icon,
  className = "",
  useDownloadButton = false,
  ...props
}: ButtonProps) {
  // Download button with Apple icon and CSS gradient styling
  if (useDownloadButton) {
    return (
      <DownloadButton href={href} className={className} aria-label={props["aria-label"]}>
        {children}
      </DownloadButton>
    );
  }

  // Default button styling
  const baseClasses =
    "inline-flex items-center justify-center cursor-pointer rounded-full font-semibold transition-all duration-200 hover:border-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg focus:ring-blue-00 focus:ring-offset-white",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 focus:ring-offset-white",
  };

  const sizeClasses = {
    sm: "px-3 py-2.5 text-xs gap-1",
    md: "px-4 py-2.5 md:px-5 md:py-2 text-sm md:text-base gap-1.5",
    lg: "px-6 py-2 lg:px-8 lg:py-3 text-base lg:text-lg gap-2",
  };

  const buttonClass = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Treat empty href as action-only (e.g. "Join Beta" modal) — render button, not link
  if (href && href.trim() !== "") {
    return (
      <a href={href} className={buttonClass}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {icon}
      {children}
    </button>
  );
}

function DownloadButton({
  href,
  className,
  "aria-label": ariaLabel,
  children,
}: {
  href: string;
  className?: string;
  "aria-label"?: string;
  children?: React.ReactNode;
}) {
  const label = children ?? "Download Now";
  return (
    <a
      href={href}
      className={`downloadButton flex-shrink-0 ${className || ""}`.trim()}
      aria-label={ariaLabel}
    >
      <div className="iconWrapper">
        <AppleIcon className="w-6 h-6 flex-shrink-0" />
      </div>
      <span>{label}</span>
    </a>
  );
}
