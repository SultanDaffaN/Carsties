import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Get the current file and directory name for base directory calculation
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a compatibility instance with the base directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define the ESLint configuration
const eslintConfig = [
  // Extend standard Next.js configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable the 'no-explicit-any' rule for TypeScript
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
