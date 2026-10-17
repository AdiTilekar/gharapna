import { Metadata } from 'next';
import { ProjectRepository } from '@/lib/repositories/project.repository';
import { ProjectsCatalogClient } from '@/components/project/ProjectsCatalogClient';
import { PageHeader, Section } from '@/components/ui/minimal';

export const metadata: Metadata = {
  title: 'Residential Projects in Pimpri-Chinchwad | Verified RERA Developments',
  description:
    'Discover verified residential flat projects across PCMC: Wakad, Ravet, Pimple Saudagar, Nigdi, Moshi, and Charholi.',
};

export default function ProjectsDirectoryPage() {
  const projects = ProjectRepository.getAll();

  return (
    <Section size="wide" spacing="default">
      <div className="space-y-10">
        <PageHeader
          prefix="Residential"
          accent="projects"
          suffix="in Pimpri-Chinchwad"
        />

        <ProjectsCatalogClient initialProjects={projects} />
      </div>
    </Section>
  );
}
