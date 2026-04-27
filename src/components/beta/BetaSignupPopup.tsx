"use client";

import { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { Turnstile } from "next-turnstile";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function BetaSignupPopup({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);

  const resetForm = useCallback(() => {
    setEmail("");
    setName("");
    setMessage("");
    setTurnstileToken(null);
    setSubmitState("idle");
    setErrorMessage("");
    setTurnstileKey((k) => k + 1);
  }, []);

  const handleClose = useCallback(() => {
    resetForm();
    onClose();
  }, [onClose, resetForm]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitState === "submitting") return;
    if (!email.trim()) {
      setErrorMessage("Please enter your email.");
      return;
    }
    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!turnstileToken) {
      setErrorMessage("Please wait for verification to complete.");
      return;
    }

    setSubmitState("submitting");
    setErrorMessage("");

    try {
      const endpoint = process.env.NEXT_PUBLIC_N8N_BETA_WEBHOOK_URL;
      if (!endpoint?.trim()) {
        setSubmitState("error");
        setErrorMessage("Beta signup is not configured.");
        return;
      }

      const apiKey = process.env.NEXT_PUBLIC_BETA_SIGNUP_API_KEY;
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (apiKey) headers["x-api-key"] = apiKey;

      const res = await fetch(endpoint.trim(), {
        method: "POST",
        headers,
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim(),
          message: message.trim() || undefined,
          turnstile_token: turnstileToken,
          source: "memoli-web",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitState("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
        setTurnstileToken(null);
        setTurnstileKey((k) => k + 1);
        return;
      }

      setSubmitState("success");
    } catch {
      setSubmitState("error");
      setErrorMessage("Network error. Please try again.");
      setTurnstileToken(null);
      setTurnstileKey((k) => k + 1);
    }
  };

  if (!isOpen) return null;

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const turnstileConfigured = Boolean(siteKey);
  const canSubmit = turnstileConfigured && turnstileToken;

  const inputClass =
    "w-full px-4 py-3 md:py-4 md:px-5 md:text-base rounded-xl border border-gray-300 focus:ring-2 focus:ring-memoli-primary focus:border-memoli-primary outline-none transition-colors text-memoli-dark placeholder:text-gray-400 bg-memoli-light";
  const labelClass = "block text-sm md:text-base font-medium text-memoli-dark mb-1 md:mb-2";
  const btnBase =
    "flex-1 px-4 py-3 md:py-4 md:text-base rounded-2xl font-medium transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

  const content = (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={handleClose}
        onKeyDown={(e) => e.key === "Escape" && handleClose()}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />
      <div
        className="relative bg-memoli-light rounded-2xl shadow-xl w-full max-w-md md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="beta-signup-title"
      >
        <div className="p-6 md:p-10 lg:p-12">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 id="beta-signup-title" className="text-xl md:text-2xl lg:text-3xl font-bold text-memoli-dark">
              Join as Beta Tester
            </h2>
            <button
              type="button"
              onClick={handleClose}
              className="w-12 p-2 rounded-2xl text-memoli-dark/70 hover:text-memoli-dark hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-memoli-primary cursor-pointer"
              aria-label="Close"
            >
              <span className="text-xl leading-none">&times;</span>
            </button>
          </div>

          {submitState === "success" ? (
            <div className="text-center py-4 md:py-6">
              <p className="text-green-600 font-medium text-base md:text-lg lg:text-xl">You&apos;re on the list!</p>
              <p className="text-gray-600 text-sm md:text-base mt-2">
                We&apos;ll reach out when we&apos;re ready for you.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-6 md:mt-8 px-5 py-2.5 md:py-3 md:px-6 md:text-base rounded-2xl bg-memoli-primary text-memoli-surface font-medium hover:bg-memoli-primary-hover transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 text-memoli-dark">
              <div>
                <label htmlFor="beta-name" className={labelClass}>
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="beta-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={inputClass}
                  disabled={submitState === "submitting"}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="beta-email" className={labelClass}>
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="beta-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                  disabled={submitState === "submitting"}
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="beta-message" className={labelClass}>
                  Message to team
                </label>
                <textarea
                  id="beta-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you think about the app or ask us anything..."
                  rows={3}
                  className={`${inputClass} resize-none`}
                  disabled={submitState === "submitting"}
                />
              </div>

              {/* Cloudflare Turnstile – invisible widget: no visible block when configured */}
              {turnstileConfigured ? (
                <Turnstile
                  key={turnstileKey}
                  siteKey={siteKey!}
                  onVerify={setTurnstileToken}
                  onExpire={() => setTurnstileToken(null)}
                  onError={() => setTurnstileToken(null)}
                  theme="light"
                  size="normal"
                />
              ) : (
                <div className="min-h-[65px] md:min-h-[78px] flex items-center justify-center shrink-0">
                  <div className="text-center py-3 px-4 md:py-4 md:px-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm md:text-base">
                    <p className="font-medium">Preview mode</p>
                    <p className="mt-0.5 text-amber-700">Set NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable submit.</p>
                  </div>
                </div>
              )}

              {errorMessage && (
                <p className="text-sm md:text-base text-red-600" role="alert">
                  {errorMessage}
                </p>
              )}

              <div className="flex gap-3 md:gap-4 pt-1">
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={submitState === "submitting"}
                  className={`${btnBase} border-2 border-gray-300 text-memoli-dark hover:bg-gray-50`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitState === "submitting" || !canSubmit}
                  className={`${btnBase} bg-memoli-primary text-memoli-surface hover:bg-memoli-primary-hover disabled:opacity-50`}
                >
                  {submitState === "submitting" ? "Submitting…" : "Join waitlist"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
