import { PROJECTS } from '@/data/projects';
import { Project } from '@/types/project';

export class ProjectRepository {
  /**
   * Retrieves all projects.
   */
  static getAll(): Project[] {
    return PROJECTS;
  }

  /**
   * Retrieves a project by slug.
   */
  static getBySlug(slug: string): Project | undefined {
    return PROJECTS.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
  }

  /**
   * Retrieves projects located in a specific locality.
   */
  static getByLocalitySlug(localitySlug: string): Project[] {
    return PROJECTS.filter(
      (p) => p.localitySlug.toLowerCase() === localitySlug.toLowerCase()
    );
  }

  /**
   * Retrieves featured projects for homepage showcase.
   */
  static getFeatured(limit: number = 4): Project[] {
    return PROJECTS.slice(0, limit);
  }
}
