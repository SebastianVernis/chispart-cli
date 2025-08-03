<p align="center">
  <img src="https://raw.githubusercontent.com/SebastianVernis/chispart-cli/main/assets/logo.png" alt="Chispart CLI Logo" width="300">
</p>

<h1 align="center">🚀 Chispart CLI – Interfaz Conversacional con IA Híbrida (Gemini + GPT)</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/node-%3E%3D18.0.0-green.svg" alt="Node.js">
  <img src="https://img.shields.io/badge/license-MIT-yellow.svg" alt="License">
  <img src="https://img.shields.io/badge/status-active-success.svg" alt="Status">
  <img src="https://img.shields.io/badge/contributions-welcome-orange.svg" alt="Contributions Welcome">
</p>

<br>

###<div align="center">
 ### <img src="https://raw.githubusercontent.com/SebastianVernis/chispart-cli/main/assets/demo.gif" alt="Demo Chispart CLI" width="800">##
</div>##

---

## 🧠 ¿Cómo Funciona?

Chispart CLI convierte tu terminal en un asistente conversacional inteligente:

```
Usuario → Chispart CLI → Gemini (detección de intención)
                             ↓
                    ¿Tarea compleja? → Sí → ProjectAura → GPT → Respuesta
                             ↓
                    No → Ejecuta script local → Respuesta
```

1. Escribe un comando en **lenguaje natural**.
2. **Gemini API** entiende tu intención.
3. Si es simple → ejecuta un script en `actions/`.
4. Si es complejo → lo envía a **ProjectAura**, que consulta un modelo **GPT**.
5. Obtiene una respuesta avanzada y te la muestra en la terminal.

---

## ✅ Características

- 🗣️ Habla con tu terminal como si fuera un asistente.
- 🤖 Usa **Gemini** para entender comandos y **GPT** para razonamiento avanzado.
- ⚙️ Automatiza tareas con scripts modulares en `actions/`.
- 🔌 Arquitectura híbrida: velocidad + inteligencia.

---

## 🛠️ Arquitectura

```
chispart.js         → Núcleo del CLI
projectaura.js      → Puente a GPT
brain/intent-mapping.json → Mapeo de intenciones
actions/*.sh        → Scripts automatizados
ask-projectaura.sh  → Delega a GPT
install.sh          → Instalador con alias
```

---

## ⚡ Instalación Rápida

```bash
git clone https://github.com/SebastianVernis/chispart-cli.git
cd chispart-cli
./install.sh
```

> ⚠️ Asegúrate de tener Node.js >=18 y tu clave de API de Gemini configurada en `.env`.

---

## 🚀 Ejemplos de Uso

```bash
chispart prepara el entorno de desarrollo
chispart despliega la app en producción
chispart explica este error: "TypeError: Cannot read property"
chispart genera un script para respaldar la base de datos
chispart consulta projectaura sobre mejores prácticas en React
```

---

## 🤖 ProjectAura: El Puente a GPT

Cuando una consulta requiere **profundidad, creatividad o análisis**, Chispart la delega a **ProjectAura**, que:

- Envía el contexto a un modelo GPT.
- Recibe una respuesta enriquecida.
- La devuelve al usuario o ejecuta acciones.

💡 Ideal para debugging, diseño de arquitectura o aprendizaje.

---

## 📚 Documentación

Consulta la guía completa en:  
👉 [DOCUMENTATION.md](./DOCUMENTATION.md)

---

## 💬 ¿Quieres contribuir?

¡Tus ideas y código son bienvenidos!  
Abre un PR o crea un issue. Estamos construyendo el futuro de la interacción con la terminal.

---

<p align="center">
  💻 <em>Convierte tu terminal en un asistente conversacional con IA híbrida.</em><br>
  ⭐ ¡Instala Chispart CLI y lleva tu productividad al siguiente nivel!
</p>
