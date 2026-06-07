"use client";

import { TEAM } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamCard } from "@/components/ui/TeamCard";

export function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-black/[0.02]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader title={TEAM.title} subtitle={TEAM.subtitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.members.map((member, index) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              initials={member.initials}
              linkedin={member.linkedin}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
