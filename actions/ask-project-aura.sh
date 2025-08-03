#!/bin/bash
QUERY="$*"
if [ -z "$QUERY" ]; then
  echo "❓ Debes escribir una consulta, ejemplo: chispart pregunta a aura sobre optimización."
  exit 1
fi
node ~/gemini-cli-agent/connectors/project-aura.js "$QUERY"
