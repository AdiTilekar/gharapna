import { FLATS } from '@/data/flats';
import { Flat, FlatFilters } from '@/types/flat';

export class FlatRepository {
  /**
   * Retrieves all flat records.
   */
  static getAll(): (Flat & { coordinates: { lat: number; lng: number } })[] {
    return FLATS;
  }

  /**
   * Finds a flat by its clean URL slug.
   */
  static getBySlug(slug: string): (Flat & { coordinates: { lat: number; lng: number } }) | undefined {
    return FLATS.find((f) => f.slug.toLowerCase() === slug.toLowerCase());
  }

  /**
   * Retrieves flats belonging to a specific project.
   */
  static getByProjectSlug(projectSlug: string): Flat[] {
    return FLATS.filter(
      (f) => f.projectSlug.toLowerCase() === projectSlug.toLowerCase()
    );
  }

  /**
   * Retrieves flats for comparison by an array of IDs.
   */
  static getByIds(ids: string[]): Flat[] {
    return FLATS.filter((f) => ids.includes(f.id));
  }

  /**
   * Filters and sorts flats based on user preferences.
   */
  static filterFlats(filters: FlatFilters): (Flat & { coordinates: { lat: number; lng: number } })[] {
    let result = [...FLATS];

    // Locality Filter
    if (filters.localitySlugs && filters.localitySlugs.length > 0) {
      result = result.filter((f) => filters.localitySlugs!.includes(f.localitySlug));
    }

    // BHK Filter
    if (filters.bhk && filters.bhk.length > 0) {
      result = result.filter((f) => filters.bhk!.includes(f.bhk));
    }

    // Min Budget
    if (filters.minBudget != null && filters.minBudget > 0) {
      result = result.filter((f) => f.indicativePrice >= filters.minBudget!);
    }

    // Max Budget
    if (filters.maxBudget != null && filters.maxBudget > 0) {
      result = result.filter((f) => f.indicativePrice <= filters.maxBudget!);
    }

    // Min Carpet Area
    if (filters.minCarpetArea != null && filters.minCarpetArea > 0) {
      result = result.filter((f) => f.carpetAreaSqFt >= filters.minCarpetArea!);
    }

    // Max Carpet Area
    if (filters.maxCarpetArea != null && filters.maxCarpetArea > 0) {
      result = result.filter((f) => f.carpetAreaSqFt <= filters.maxCarpetArea!);
    }

    // Possession Status
    if (filters.possessionStatus && filters.possessionStatus.length > 0) {
      result = result.filter((f) =>
        filters.possessionStatus!.includes(f.possessionStatus)
      );
    }

    // Facing
    if (filters.facing && filters.facing.length > 0) {
      result = result.filter((f) => filters.facing!.includes(f.facing));
    }

    // Sorting
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'price-asc':
          result.sort((a, b) => a.indicativePrice - b.indicativePrice);
          break;
        case 'price-desc':
          result.sort((a, b) => b.indicativePrice - a.indicativePrice);
          break;
        case 'carpet-asc':
          result.sort((a, b) => a.carpetAreaSqFt - b.carpetAreaSqFt);
          break;
        case 'carpet-desc':
          result.sort((a, b) => b.carpetAreaSqFt - a.carpetAreaSqFt);
          break;
      }
    }

    return result;
  }
}
