import { LOCALITIES } from '@/data/localities';
import { CorridorType, Locality } from '@/types/locality';

export class LocalityRepository {
  /**
   * Retrieves all localities across PCMC and adjoining corridors.
   */
  static getAll(): Locality[] {
    return LOCALITIES;
  }

  /**
   * Retrieves only active localities (those with live/sample project inventory).
   */
  static getActiveLocalities(): Locality[] {
    return LOCALITIES.filter((l) => l.status === 'active');
  }

  /**
   * Retrieves coming-soon localities.
   */
  static getComingSoonLocalities(): Locality[] {
    return LOCALITIES.filter((l) => l.status === 'coming-soon');
  }

  /**
   * Finds a locality by slug.
   */
  static getBySlug(slug: string): Locality | undefined {
    return LOCALITIES.find((l) => l.slug.toLowerCase() === slug.toLowerCase());
  }

  /**
   * Filters localities by corridor.
   */
  static getByCorridor(corridor: CorridorType): Locality[] {
    return LOCALITIES.filter((l) => l.corridor === corridor);
  }
}
