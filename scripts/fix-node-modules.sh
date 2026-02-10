#!/bin/bash
# Check if node_modules is tracked by git
echo "Checking if node_modules is tracked by git..."
if git ls-files --error-unmatch node_modules 2>/dev/null; then
  echo "node_modules IS tracked by git. Removing..."
  git rm --cached node_modules 2>/dev/null || git rm --cached -r node_modules 2>/dev/null
  echo "Removed node_modules from git tracking."
else
  echo "node_modules is NOT tracked by git."
fi

# Also check for any node_modules file (not directory)
if [ -f "node_modules" ]; then
  echo "Found node_modules as a FILE (not directory). Removing file..."
  rm -f node_modules
  echo "Removed node_modules file."
elif [ -L "node_modules" ]; then
  echo "Found node_modules as a SYMLINK. Removing..."
  rm -f node_modules
  echo "Removed node_modules symlink."
fi

echo "Done. Current git status:"
git status --short
