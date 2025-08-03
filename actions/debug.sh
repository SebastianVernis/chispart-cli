#!/bin/bash
echo "🔍 Analizando logs..."
tail -n 50 logs/latest.log || echo "⚠️ No hay logs recientes."
echo "✅ Análisis inicial completado."
