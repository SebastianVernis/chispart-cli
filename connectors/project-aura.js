#!/usr/bin/env node
import fetch from 'node-fetch';

const API_KEY = process.env.PROJECTAURA_API_KEY;
const DEFAULT_MODEL = "gpt-4o-mini";
const DEFAULT_ENDPOINT = "https://api.openai.com/v1/chat/completions";

const MODEL = process.env.PROJECTAURA_MODEL || DEFAULT_MODEL;
const ENDPOINT = process.env.PROJECTAURA_ENDPOINT || DEFAULT_ENDPOINT;

const prompt = process.argv.slice(2).join(" ");

if (!API_KEY) {
    console.error("❌ Falta la API Key de ProjectAura. Configúrala con: export PROJECTAURA_API_KEY='tu_api_key'");
    process.exit(1);
}

(async () => {
    console.log(`🤝 Enviando consulta a Project Aura: "${prompt}"`);
    console.log(`🔧 Usando modelo: ${MODEL} en endpoint: ${ENDPOINT}`);
    
    try {
        const response = await fetch(ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: MODEL,
                messages: [{ role: "user", content: prompt }]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.choices && data.choices[0] && data.choices[0].message) {
            console.log(`🧠 Project Aura responde:\n${data.choices[0].message.content}`);
        } else {
            console.error("❌ Respuesta inesperada de la API:", JSON.stringify(data, null, 2));
        }
    } catch (error) {
        console.error(`❌ Error al conectar con Project Aura: ${error.message}`);
        process.exit(1);
    }
})();
