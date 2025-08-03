#!/bin/bash
echo "🚀 Iniciando despliegue..."
git add . && git commit -m "Deploy automático" && git push
echo "✅ Despliegue completado."
