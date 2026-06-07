import { ExternalLink } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  bio?: string;
  initials: string;
  linkedin: string;
}

export function TeamCard({
  name,
  role,
  bio,
  initials,
  linkedin,
}: TeamCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-lg font-semibold text-brand">
        {initials}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{name}</h3>
      <p className="mt-1 text-xs font-medium tracking-widest text-muted uppercase">
        {role}
      </p>
      {bio && (
        <p className="mt-3 text-sm text-muted leading-relaxed">{bio}</p>
      )}
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-brand ${bio ? "mt-4" : "mt-3"}`}
        aria-label={`${name} on LinkedIn`}
      >
        <ExternalLink className="h-3.5 w-3.5" />
        LinkedIn
      </a>
    </div>
  );
}
