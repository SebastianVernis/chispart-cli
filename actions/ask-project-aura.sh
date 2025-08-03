#!/bin/bash
QUERY="$*"
if [ -z "$QUERY" ]; then
  echo "❓ Debes escribir una consulta, ejemplo: chispart pregunta a aura sobre optimización."
  exit 1
fi
node $(dirname "$(dirname "$(realpath "$0")")")/connectors/project-aura.js "$QUERY"
