'use client';

import { useState, useMemo } from 'react';
import { Project } from '@/types/project';
import { ProjectCard } from './ProjectCard';
import { LOCALITIES } from '@/data/localities';

interface ProjectsCatalogClientProps {
  initialProjects: Project[];
}

export function ProjectsCatalogClient({ initialProjects }: ProjectsCatalogClientProps) {
  const [selectedCorridor, setSelectedCorridor] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    if (selectedCorridor === 'all') return initialProjects;

    return initialProjects.filter((project) => {
      const locality = LOCALITIES.find((l) => l.slug === project.localitySlug);
      return locality?.corridor === selectedCorridor;
    });
  }, [initialProjects, selectedCorridor]);

  const corridors = [
    { id: 'all', label: 'All Projects' },
    { id: 'west-it-belt', label: 'West / IT Belt' },
    { id: 'north-central', label: 'North-Central' },
    { id: 'central', label: 'Central PCMC' },
    { id: 'north-alandi-nashik', label: 'North / Spine Road' },
  ];

  return (
    <div className="space-y-10 font-sans">
      {/* Slim Filter Row */}
      <div className="flex flex-wrap items-center gap-2 py-3 border-y border-border text-xs">
        {corridors.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCorridor(c.id)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              selectedCorridor === c.id
                ? 'bg-foreground text-background'
                : 'border border-border text-muted hover:text-foreground'
            }`}
          >
            {c.label}
          </button>
        ))}

        <span className="text-muted text-xs font-medium ml-auto">
          {filteredProjects.length} projects
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
