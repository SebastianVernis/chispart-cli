<div style="background-image: url('assets/bg.png'); background-size: cover; background-repeat: no-repeat; padding: 40px 20px; border-radius: 12px; color: #ffffff; background-color: #0d1117;">
  <h1 align="center">
    <img src="./assets/logo.png" alt="Chispart CLI Logo" width="300"><br>
    🚀 Chispart CLI – Interfaz Conversacional Potenciada por Gemini y GPT
  </h1>

  <p align="center">
    <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Versión">
    <img src="https://img.shields.io/badge/node-%3E%3D18.0.0-green.svg" alt="Node.js">
    <img src="https://img.shields.io/badge/license-MIT-yellow.svg" alt="Licencia">
    <img src="https://img.shields.io/badge/status-active-success.svg" alt="Estado">
    <img src="https://img.shields.io/badge/contributions-welcome-orange.svg" alt="Contribuciones bienvenidas">
  </p>
</div>

<br>

## 🧠 ¿Cómo Funciona?

```
Usuario → Chispart CLI → API de Gemini → (Procesa intención) 
                                     ↳ Si requiere razonamiento avanzado → ProjectAura → Modelo GPT → Respuesta al usuario
```

1. **Chispart CLI** captura el comando en lenguaje natural.  
2. **Gemini API** analiza y clasifica la intención.  
3. Si la tarea es simple, ejecuta el script correspondiente (`actions/*.sh`).  
4. Si es compleja, **delegará a ProjectAura**, que se comunica con un modelo **GPT** para generar una respuesta avanzada.  
5. El resultado se muestra directamente en la terminal.

---

## ✅ Características Clave

- 🗣️ **Interacción en lenguaje natural** sin necesidad de recordar comandos.  
- 🤝 **Integración nativa con la API de Gemini** para detección precisa de intenciones.  
- 🤖 **Razonamiento avanzado con GPT** gracias al conector **ProjectAura**.  
- ⚡ **Automatización modular** mediante scripts definidos en `actions/`.

---

## 🛠️ Arquitectura del Proyecto

- **`chispart.js`** – El núcleo que envía entradas a Gemini y coordina respuestas/acciones.  
- **`projectaura.js`** – Conector que comunica a Gemini con GPT para análisis avanzado.  
- **`brain/intent-mapping.json`** – Define palabras clave, intenciones y scripts asociados.  
- **`actions/`** – Carpeta de scripts `.sh` que realizan tareas automatizadas.  
- **`ask-projectaura.sh`** – Script puente para delegar consultas complejas a GPT.  
- **`install.sh`** – Instalador que configura el entorno y alias `chispart`.

---

## ⚡ Instalación Rápida

```bash
git clone https://github.com/SebastianVernis/chispart-cli.git 
cd chispart-cli
./install.sh
```

Después de instalar, solo escribe:

```bash
chispart prepara el entorno
chispart despliega la aplicación
chispart consulta projectaura sobre optimización de código
```

---

## 🤖 Comunicación con Gemini + GPT (ProjectAura)

Chispart CLI combina **dos niveles de IA**:

1. **Gemini API** – Procesa lenguaje natural, mapea intenciones y gestiona comandos.  
2. **ProjectAura (GPT)** – Se activa en tareas complejas, generando análisis profundo, soluciones y respuestas enriquecidas.  

💡 Esta arquitectura híbrida permite **automatización rápida** para tareas simples y **razonamiento avanzado** para casos complejos.

---

## 🧩 Casos de Uso

- Ejecutar tareas del sistema con comandos naturales.  
- Debug, testing y despliegue con una sola instrucción.  
- Obtener análisis, sugerencias y asistencia inteligente vía GPT.

---

## 📚 Documentación Técnica

Consulta el archivo [DOCUMENTATION.md](./DOCUMENTATION.md) para detalles sobre configuración, conexión con Gemini y ProjectAura,  
así como ejemplos avanzados de integración.

---

<div align="center">
  💻 <em>Convierte tu terminal en una experiencia conversacional con IA híbrida.</em><br>
  ⭐ ¡Instala Chispart CLI y lleva tu productividad a otro nivel! ⭐
</div>