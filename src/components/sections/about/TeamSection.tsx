"use client";

import Image from "next/image";
import { TEAM_MEMBERS } from "@memoli/utils/constants";
import { useFadeIn, useStaggerChildren } from "@memoli/hooks/useGSAP";

function TeamCard({
  member,
  isMarqueeCopy,
}: {
  member: (typeof TEAM_MEMBERS)[number];
  isMarqueeCopy?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-20 h-20 md:w-20 md:h-20 lg:w-[88px] lg:h-[88px] rounded-full mb-3 md:mb-3 lg:mb-4 overflow-hidden shadow-md bg-gray-100">
        <Image
          src={member.image}
          alt={isMarqueeCopy ? "" : member.name}
          fill
          className="object-contain"
          sizes="88px"
        />
      </div>
      <p className="text-gray-900 font-semibold text-base md:text-sm lg:text-base leading-tight">
        {member.name}
      </p>
      <div className="flex items-center gap-2 mt-2">
        <span className="inline-block px-3 md:px-2.5 py-1 md:py-1 bg-gray-100 rounded-full text-xs md:text-[8px] lg:text-[10px] text-gray-600">
          {member.professionPill}
        </span>
        <span className="inline-block px-3 md:px-2.5 py-1 md:py-1 bg-blue-100 rounded-full text-xs md:text-[8px] lg:text-[10px] text-blue-600">
          {member.profession}
        </span>
      </div>
      <p className="text-gray-600 italic text-sm md:text-[10px] lg:text-xs leading-relaxed mt-3 md:mt-3 lg:mt-4 max-w-[280px]">
        &ldquo;{member.bio}&rdquo;
      </p>
    </div>
  );
}

export default function TeamSection() {
  const headingRef = useFadeIn({ y: 25, duration: 0.7 });
  const gridRef = useStaggerChildren({ y: 30, duration: 0.6, stagger: 0.1 });

  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        <h2 ref={headingRef} className="text-blue-600 font-bold text-xl md:text-[24px] lg:text-[32px] text-center mb-10 md:mb-12 lg:mb-16">
          The People Behind Memoli
        </h2>

        {/* Mobile: horizontal marquee (repeated team cards) */}
        <div className="overflow-hidden md:hidden -mx-6 px-6">
          <div className="flex gap-8 team-marquee w-max">
            {[...TEAM_MEMBERS, ...TEAM_MEMBERS].map((member, i) => (
              <div key={`${member.id}-${i}`} className="w-[260px] flex-shrink-0">
                <TeamCard member={member} isMarqueeCopy={i >= TEAM_MEMBERS.length} />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet/Desktop: grid — white rounded card per profile (Figma) */}
        <div ref={gridRef} className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200/60 p-6 lg:p-8 flex flex-col items-center text-center"
            >
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
