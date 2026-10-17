import { describe, it, expect } from 'vitest';
import { validateLaunchIntegrity, LaunchCheckEntity } from '@/lib/launch-validator';

describe('Pre-Launch Integrity & Safety Gate', () => {
  it('should FAIL launch when any locality has isDemo: true', () => {
    const mockLocalities: LaunchCheckEntity[] = [
      { name: 'Wakad', slug: 'wakad', isDemo: true },
    ];
    const mockProjects: LaunchCheckEntity[] = [
      { name: 'Real Project', slug: 'real-project', isDemo: false, reraNumber: 'P52100012345' },
    ];
    const mockEnv = {
      NEXT_PUBLIC_PHONE: '+91 98220 99999',
      NEXT_PUBLIC_WHATSAPP: '919822099999',
      NEXT_PUBLIC_EMAIL: 'contact@realagency.com',
      NEXT_PUBLIC_ADDRESS: 'Office 402, Wakad Chowk, PCMC',
    };

    const result = validateLaunchIntegrity(mockLocalities, mockProjects, mockEnv);

    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes('Locality "Wakad"'))).toBe(true);
  });

  it('should FAIL launch when project has placeholder RERA pattern', () => {
    const mockLocalities: LaunchCheckEntity[] = [
      { name: 'Wakad', slug: 'wakad', isDemo: false },
    ];
    const mockProjects: LaunchCheckEntity[] = [
      {
        name: 'Aangan Residences',
        slug: 'aangan-residences',
        isDemo: false,
        reraNumber: 'P52100XXXXXX [TO BE ADDED]',
      },
    ];
    const mockEnv = {
      NEXT_PUBLIC_PHONE: '+91 98220 99999',
      NEXT_PUBLIC_WHATSAPP: '919822099999',
      NEXT_PUBLIC_EMAIL: 'contact@realagency.com',
      NEXT_PUBLIC_ADDRESS: 'Office 402, Wakad Chowk, PCMC',
    };

    const result = validateLaunchIntegrity(mockLocalities, mockProjects, mockEnv);

    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes('[PLACEHOLDER RERA ERROR]'))).toBe(true);
  });

  it('should FAIL launch when contact environment variables are missing or dummy', () => {
    const mockLocalities: LaunchCheckEntity[] = [
      { name: 'Wakad', slug: 'wakad', isDemo: false },
    ];
    const mockProjects: LaunchCheckEntity[] = [
      { name: 'Real Tower', slug: 'real-tower', isDemo: false, reraNumber: 'P52100098765' },
    ];
    // Missing address and dummy email
    const mockEnv = {
      NEXT_PUBLIC_PHONE: '+91 98000 00000', // dummy
      NEXT_PUBLIC_WHATSAPP: '919822099999',
      NEXT_PUBLIC_EMAIL: 'enquiry@gharapna.com', // dummy
      NEXT_PUBLIC_ADDRESS: undefined, // missing
    };

    const result = validateLaunchIntegrity(mockLocalities, mockProjects, mockEnv);

    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes('dummy placeholder value'))).toBe(true);
    expect(result.errors.some((e) => e.includes('is not defined'))).toBe(true);
  });

  it('should PASS launch with zero errors when all entities are verified and real env vars are set', () => {
    const mockLocalities: LaunchCheckEntity[] = [
      { name: 'Wakad', slug: 'wakad', isDemo: false },
      { name: 'Ravet', slug: 'ravet', isDemo: false },
    ];
    const mockProjects: LaunchCheckEntity[] = [
      {
        name: 'Gharapna Prime',
        slug: 'gharapna-prime',
        isDemo: false,
        reraNumber: 'P52100054321',
      },
    ];
    const mockEnv = {
      NEXT_PUBLIC_PHONE: '+91 98220 54321',
      NEXT_PUBLIC_WHATSAPP: '919822054321',
      NEXT_PUBLIC_EMAIL: 'advisory@realagency.in',
      NEXT_PUBLIC_ADDRESS: 'Chinchwad Station Road, PCMC, Pune 411019',
    };

    const result = validateLaunchIntegrity(mockLocalities, mockProjects, mockEnv);

    expect(result.valid).toBe(true);
    expect(result.errors.length).toBe(0);
  });
});
