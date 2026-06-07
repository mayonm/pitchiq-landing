import { TEAM } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamCard } from "@/components/ui/TeamCard";
import { Reveal } from "@/components/ui/Reveal";

export function Team() {
  return (
    <section id="team" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label={TEAM.label}
          title={TEAM.title}
          subtitle={TEAM.subtitle}
          align="center"
        />
        <div className="mx-auto grid max-w-lg gap-6 sm:grid-cols-2">
          {TEAM.members.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.1}>
              <div className="card-elevated p-6">
                <TeamCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  initials={member.initials}
                  linkedin={member.linkedin}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
