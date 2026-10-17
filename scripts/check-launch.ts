/**
 * Gharapna Pre-Launch Safeguard Script
 *
 * This script runs prior to production deployment (npm run check:launch).
 * It enforces that NO demo data, placeholder RERA numbers, or missing/dummy
 * contact environment variables make it into a production release.
 */

import { LOCALITIES } from '../data/localities';
import { PROJECTS } from '../data/projects';

const errors: string[] = [];

console.log('🔍 Running Gharapna Pre-Launch Integrity Check...\n');

// 1. Check Locality records for isDemo flag
LOCALITIES.forEach((loc) => {
  if (loc.isDemo) {
    errors.push(`[DEMO DATA ERROR] Locality "${loc.name}" (${loc.slug}) has isDemo: true.`);
  }
});

// 2. Check Project records for isDemo flag and placeholder RERA numbers
PROJECTS.forEach((proj) => {
  if (proj.isDemo) {
    errors.push(`[DEMO DATA ERROR] Project "${proj.name}" (${proj.slug}) has isDemo: true.`);
  }

  const placeholderPattern = /P52100XXXXXX|\[TO BE ADDED\]/i;
  if (placeholderPattern.test(proj.reraNumber)) {
    errors.push(
      `[PLACEHOLDER RERA ERROR] Project "${proj.name}" contains placeholder RERA: "${proj.reraNumber}". Replace with official MahaRERA certificate number.`
    );
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
  const val = process.env[envKey];
  if (!val) {
    errors.push(`[MISSING ENV ERROR] Environment variable "${envKey}" is not defined.`);
  } else if (val.includes('98000') || val.includes('enquiry@gharapna.com')) {
    errors.push(
      `[DUMMY CONTACT ERROR] Environment variable "${envKey}" contains dummy placeholder value: "${val}". Set real agency contact before launch.`
    );
  }
});

// Evaluation
if (errors.length > 0) {
  console.error('❌ LAUNCH CHECK FAILED! The following issues must be resolved before production release:\n');
  errors.forEach((err, idx) => {
    console.error(`  ${idx + 1}. ${err}`);
  });
  console.error('\n🚫 Production build halted by Gharapna Safety Gate.\n');
  process.exit(1);
} else {
  console.log('✅ ALL CHECKS PASSED: Real data verified, valid RERA registered, and production contact details configured.');
  process.exit(0);
}
