import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { defineNitroConfig } from 'nitropack';
import pkg from './package.json'; // Import your root package.json

export default defineNitroConfig({
  hooks: {
    compiled: async (nitro) => {
      // Define the path to the generated package.json in the output directory
      const packageJsonPath = join(nitro.options.output.serverDir, 'package.json');

      try {
        // Read the generated "traced-node-modules" package.json
        const generatedPkg = JSON.parse(await readFile(packageJsonPath, 'utf-8'));

        // Overwrite name and version with your root package.json data
        generatedPkg.name = pkg.name;
        generatedPkg.version = pkg.version;

        // Write the modified content back to the file
        await writeFile(packageJsonPath, JSON.stringify(generatedPkg, null, 2));

        console.log(`Successfully updated .output/server/package.json to ${pkg.name}@${pkg.version}`);
      } catch (err) {
        console.error('Could not update .output/server/package.json:', err);
      }
    },
  },
});
