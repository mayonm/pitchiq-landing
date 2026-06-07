import { TEAM } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamCard } from "@/components/ui/TeamCard";

export function Team() {
  return (
    <section id="team" className="border-b border-chalk py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label={TEAM.label}
          title={TEAM.title}
          subtitle={TEAM.subtitle}
          align="center"
        />
        <div className="mx-auto grid max-w-lg gap-16 sm:grid-cols-2 sm:gap-12">
          {TEAM.members.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              initials={member.initials}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
