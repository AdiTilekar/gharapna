export interface LaunchCheckEntity {
  isDemo?: boolean;
  name: string;
  slug: string;
  reraNumber?: string;
}

export interface LaunchValidationResult {
  valid: boolean;
  errors: string[];
}

export function validateLaunchIntegrity(
  localities: LaunchCheckEntity[],
  projects: LaunchCheckEntity[],
  envVars: Record<string, string | undefined>
): LaunchValidationResult {
  const errors: string[] = [];

  // 1. Check Locality records for isDemo flag
  localities.forEach((loc) => {
    if (loc.isDemo) {
      errors.push(`[DEMO DATA ERROR] Locality "${loc.name}" (${loc.slug}) has isDemo: true.`);
    }
  });

  // 2. Check Project records for isDemo flag and placeholder RERA numbers
  projects.forEach((proj) => {
    if (proj.isDemo) {
      errors.push(`[DEMO DATA ERROR] Project "${proj.name}" (${proj.slug}) has isDemo: true.`);
    }

    if (proj.reraNumber) {
      const placeholderPattern = /P52100XXXXXX|\[TO BE ADDED\]/i;
      if (placeholderPattern.test(proj.reraNumber)) {
        errors.push(
          `[PLACEHOLDER RERA ERROR] Project "${proj.name}" contains placeholder RERA: "${proj.reraNumber}". Replace with official MahaRERA certificate number.`
        );
      }
    }
  });

  // 3. Check Contact Environment Variables
  const requiredEnvVars = [
    'NEXT_PUBLIC_PHONE',
    'NEXT_PUBLIC_WHATSAPP',
    'NEXT_PUBLIC_EMAIL',
    'NEXT_PUBLIC_ADDRESS',
  ];

  requiredEnvVars.forEach((envKey) => {
    const val = envVars[envKey];
    if (!val) {
      errors.push(`[MISSING ENV ERROR] Environment variable "${envKey}" is not defined.`);
    } else if (val.includes('98000') || val.includes('enquiry@gharapna.com')) {
      errors.push(
        `[DUMMY CONTACT ERROR] Environment variable "${envKey}" contains dummy placeholder value: "${val}". Set real agency contact before launch.`
      );
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}
