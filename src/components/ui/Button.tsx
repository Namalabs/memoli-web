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
    return DownloadButton({ href, className });
  }

  // Default button styling — design-ref: rectangular, ~8–10px radius, solid blue
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variantClasses = {
    primary:
      "bg-[#3F83F8] text-white hover:bg-[#2563EB] focus:ring-[#3F83F8] focus:ring-offset-white",
    outline:
      "border-2 border-[#3F83F8] text-[#3F83F8] bg-white hover:bg-blue-50 focus:ring-[#3F83F8] focus:ring-offset-white",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-xs gap-1 min-h-[36px]",
    md: "px-5 py-3 md:px-6 md:py-3 text-sm md:text-base gap-1.5 min-h-[52px]",
    lg: "px-6 py-3 lg:px-8 lg:py-3 text-base lg:text-lg gap-2 min-h-[52px]",
  };

  const buttonClass = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Render as button when onClick is used or when href is not a valid link
  const useAsButton = typeof props.onClick === "function" || href == null || href === "";
  if (!useAsButton && href) {
    return (
      <a href={href} className={buttonClass}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={buttonClass} {...props}>
      {icon}
      {children}
    </button>
  );
}

function DownloadButton({ href, className }: { href: string; className?: string }) {
  return (
    <a href={href} className={["memoli-download-btn cursor-pointer", className].filter(Boolean).join(" ").trim()}>
      <div className="memoli-download-btn-icon">
        <AppleIcon className="w-6 h-6 flex-shrink-0" />
      </div>
      <span>Download Now</span>
    </a>
  );
}
