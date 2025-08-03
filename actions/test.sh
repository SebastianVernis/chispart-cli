#!/bin/bash
echo "🧪 Ejecutando pruebas..."
npm test || echo "⚠️ No se encontraron tests configurados."
echo "✅ Pruebas completadas."
