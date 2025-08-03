#!/usr/bin/env node
import fetch from 'node-fetch';
const API_KEY = process.env.OPENAI_API_KEY;
const prompt = process.argv.slice(2).join(" ");
if (!API_KEY) {
    console.error("❌ Falta la API Key de OpenAI. Configúrala con: export OPENAI_API_KEY='tu_api_key'");
    process.exit(1);
}
(async () => {
    console.log(`🤝 Enviando consulta a Project Aura: "${prompt}"`);
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }]
        })
    });
    const data = await response.json();
    console.log(`🧠 Project Aura responde:\n${data.choices[0].message.content}`);
})();
