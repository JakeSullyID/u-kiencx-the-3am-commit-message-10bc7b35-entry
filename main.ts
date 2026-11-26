// Generates a recursive 3am commit message about self-fixing typo loops and writes it to entry.txt.
import * as fs from 'fs';
import * as path from 'path';

const commitMessage = 'fix: 37 commits deep at 3am: untangling a typo spawned by a typo made while fixing the original typo';

if (commitMessage.length > 139) {
  throw new Error(`Commit message exceeds 139 characters (length: ${commitMessage.length})`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });

const outputPath = path.join(outputDir, 'entry.txt');
fs.writeFileSync(outputPath, commitMessage, 'utf-8');
