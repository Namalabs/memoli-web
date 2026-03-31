import type { ReactNode } from "react";

type LegalArticleProps = {
  title: string;
  effectiveDate: string;
  children: ReactNode;
};

export default function LegalArticle({ title, effectiveDate, children }: LegalArticleProps) {
  return (
    <main className="bg-memoli-light">
      {/* Same horizontal shell as Footer, StorySection, FeaturesSection: max-w-[1280px] + px-6 md:px-10 lg:px-16 */}
      <article className="max-w-[1280px] mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-memoli-dark mb-2">{title}</h1>
          <p className="text-sm text-memoli-dark/60">Effective as of {effectiveDate}</p>
        </header>
        <div className="text-memoli-dark/70 font-medium text-base md:text-lg leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-memoli-accent [&_h2]:mt-8 [&_h2]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1 [&_a]:text-memoli-accent [&_a]:underline">
          {children}
        </div>
      </article>
    </main>
  );
}
