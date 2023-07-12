#!/bin/bash
if [ $# -eq 0 ]; then
  echo "No argument provided. Please provide an argument."
  exit 1
fi

input_argument="$1"

git status && \
git add . && \
git commit -m "$input_argument" && \
push_output=$(git push 2>&1)

# Display the output
echo "Git push output:"
echo "$push_output"