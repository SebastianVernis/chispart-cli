# 📚 Documentación Técnica – Chispart CLI

<p align="center">
  <img src="./assets/logo.png" alt="Chispart CLI Logo" width="300">
</p>

Este documento describe el funcionamiento interno de **Chispart CLI**, la configuración necesaria y cómo interactúa con **Gemini API** y **ProjectAura (GPT)**.

---

## 🔥 Arquitectura de Comunicación

```
Usuario → Chispart CLI → Gemini API → Scripts / Lógica  
                                   ↳ (cuando es necesario) → ProjectAura → Modelo GPT → Respuesta enriquecida
```

🟣 **Gemini API** → analiza y clasifica intenciones  
🔵 **ProjectAura (GPT)** → resuelve tareas complejas  
🟢 **Chispart CLI** → orquesta y entrega resultados  
---

## ⚙️ Componentes Principales

- **`chispart.js`** – Punto de entrada; envía consultas a Gemini API y decide si delegar a GPT.  
- **`projectaura.js`** – Conector Node.js que se comunica con el endpoint GPT (OpenAI u otro compatible).  
- **`ask-projectaura.sh`** – Wrapper que prepara las consultas para ProjectAura.  
- **`brain/intent-mapping.json`** – Define intenciones, palabras clave y scripts a ejecutar.  
- **`actions/*.sh`** – Scripts de automatización ejecutados según la intención detectada.

---

## 🔐 Configuración de Claves API

Chispart CLI ahora soporta múltiples proveedores de LLM a través de ProjectAura. La configuración se realiza mediante variables de entorno:

### Variables de Entorno Requeridas

- **`PROJECTAURA_API_KEY`** (Requerida): Clave de API del proveedor LLM
- **`PROJECTAURA_ENDPOINT`** (Opcional): Endpoint de la API (por defecto: OpenAI)
- **`PROJECTAURA_MODEL`** (Opcional): Modelo a utilizar (por defecto: "gpt-4o-mini")

### Configuración para OpenAI (GPT)

```bash
export PROJECTAURA_API_KEY="sk-tu_clave_openai_aqui"
export PROJECTAURA_ENDPOINT="https://api.openai.com/v1/chat/completions"
export PROJECTAURA_MODEL="gpt-4o-mini"  # o gpt-4, gpt-3.5-turbo, etc.
```

### Configuración para Mistral AI

```bash
export PROJECTAURA_API_KEY="tu_clave_mistral_aqui"
export PROJECTAURA_ENDPOINT="https://api.mistral.ai/v1/chat/completions"
export PROJECTAURA_MODEL="mistral-tiny"  # o mistral-small, mixtral-8x7b-instruct, etc.
```

### Configuración para Otros Proveedores

Cualquier proveedor compatible con la API de OpenAI puede ser utilizado:

```bash
export PROJECTAURA_API_KEY="tu_clave_api"
export PROJECTAURA_ENDPOINT="https://tu-proveedor.com/v1/chat/completions"
export PROJECTAURA_MODEL="modelo_especifico"
```

---

## 🚦 Flujo de Ejecución

1. El usuario escribe un comando natural:  
   ```bash
   chispart analiza logs del sistema
   ```
2. `chispart.js` envía la entrada a **Gemini API**, que detecta la intención "análisis de logs".  
3. Si se requiere IA avanzada, llama a **ProjectAura**, que envía la consulta a **GPT**.  
4. GPT devuelve un análisis enriquecido que Chispart CLI presenta al usuario.

---

## 🛠️ Ejemplos de Uso Avanzado

### ✅ Ejemplo 1: Consulta directa a LLM vía ProjectAura
```bash
chispart consulta projectaura sobre optimización de rendimiento en React
chispart pregunta a aura sobre patrones de diseño
chispart consulta aura sobre mejores prácticas de seguridad
```

### ✅ Ejemplo 2: Cambio dinámico de proveedor LLM
```bash
# Usar OpenAI para análisis de código
export PROJECTAURA_MODEL="gpt-4"
chispart consulta projectaura sobre refactorización de este código

# Cambiar a Mistral para consultas generales
export PROJECTAURA_MODEL="mistral-small"
chispart pregunta a aura sobre arquitectura de software
```

### ✅ Ejemplo 3: Manejo de errores mejorado
```bash
# Si hay un error en la ejecución, ahora obtienes información detallada:
chispart prepara el entorno
# ❌ Error al ejecutar el script 'implement.sh':
#    Stderr: npm: command not found
#    Stdout (parcial): Iniciando configuración del entorno...
```

---

## 🧩 Casos de Integración

- **Desarrollo:** Asistencia con código, refactorización y generación de scripts usando diferentes LLMs según la necesidad.
- **DevOps:** Despliegues automatizados con recomendaciones inteligentes de múltiples proveedores.
- **Data Analysis:** Análisis avanzado de logs, métricas y sugerencias con flexibilidad de modelo.
- **Consultoría:** Cambio dinámico entre modelos especializados (GPT para código, Mistral para análisis general).

---

## 🔧 Mejoras Técnicas Implementadas

### Robustez del Sistema
- **Rutas absolutas:** Eliminación de problemas de rutas relativas
- **Manejo de errores mejorado:** Información detallada de stderr y stdout
- **Validación de respuestas:** Verificación de estructura de respuesta de APIs

### Flexibilidad Multi-LLM
- **Configuración dinámica:** Cambio de proveedor sin modificar código
- **Compatibilidad amplia:** Soporte para cualquier API compatible con OpenAI
- **Fallback inteligente:** Valores por defecto para configuración mínima

### Escalabilidad
- **Arquitectura modular:** Fácil adición de nuevos proveedores
- **Variables de entorno:** Configuración externa sin hardcoding
- **Logging mejorado:** Información de debugging para troubleshooting

---

## 📌 Notas Finales

- **Flexibilidad Multi-LLM:** Chispart CLI ahora soporta OpenAI, Mistral y cualquier proveedor compatible.
- **Configuración simple:** Cambio de proveedor mediante variables de entorno.
- **Robustez mejorada:** Manejo de errores detallado y rutas absolutas.
- **Diseño modular:** Fácil extensión para nuevos proveedores y funcionalidades.

---

🚀 **Con Chispart CLI obtienes una terminal con inteligencia híbrida y flexibilidad multi-LLM.**
