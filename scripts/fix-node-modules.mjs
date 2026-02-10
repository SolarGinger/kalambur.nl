import { execSync } from 'child_process';
import { existsSync, lstatSync, unlinkSync } from 'fs';

console.log("Checking if node_modules is tracked by git...");

try {
  const tracked = execSync('git ls-files node_modules', { encoding: 'utf-8' }).trim();
  if (tracked) {
    console.log("node_modules IS tracked by git. Removing from tracking...");
    try {
      execSync('git rm --cached node_modules', { encoding: 'utf-8' });
      console.log("Removed node_modules file from git tracking.");
    } catch {
      try {
        execSync('git rm --cached -r node_modules', { encoding: 'utf-8' });
        console.log("Removed node_modules directory from git tracking.");
      } catch (e) {
        console.log("Could not remove via git rm:", e.message);
      }
    }
  } else {
    console.log("node_modules is NOT tracked by git.");
  }
} catch (e) {
  console.log("git ls-files check:", e.message);
}

// Check for node_modules as a file or symlink (not directory)
if (existsSync('node_modules')) {
  const stat = lstatSync('node_modules');
  if (stat.isFile()) {
    console.log("Found node_modules as a FILE. Removing...");
    unlinkSync('node_modules');
    console.log("Removed node_modules file.");
  } else if (stat.isSymbolicLink()) {
    console.log("Found node_modules as a SYMLINK. Removing...");
    unlinkSync('node_modules');
    console.log("Removed node_modules symlink.");
  } else if (stat.isDirectory()) {
    console.log("node_modules is a proper directory (this is normal).");
  }
} else {
  console.log("No node_modules file/symlink found at project root.");
}

console.log("\nGit status:");
try {
  const status = execSync('git status --short', { encoding: 'utf-8' });
  console.log(status || "(clean)");
} catch (e) {
  console.log("Could not get git status:", e.message);
}
