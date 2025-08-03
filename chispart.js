#!/usr/bin/env node
import fs from 'fs';
import { exec } from 'child_process';
import readline from 'readline';

const intentMapping = JSON.parse(fs.readFileSync('./brain/intent-mapping.json', 'utf8'));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Gemini> '
});

console.log("🧠 Chispart CLI listo. Háblame en lenguaje natural (Ctrl+C para salir).");
rl.prompt();

rl.on('line', (input) => {
  const userInput = input.toLowerCase();
  let matched = false;
  for (const intent of intentMapping) {
    if (intent.keywords.some(kw => userInput.includes(kw))) {
      matched = true;
      console.log(`🤖 Entendido: ${intent.action}`);
      exec(`bash actions/${intent.script} "${input}"`, (err, stdout, stderr) => {
        if (err) console.error(`❌ Error: ${stderr}`);
        else console.log(`✅ Resultado:\n${stdout}`);
        rl.prompt();
      });
      break;
    }
  }
  if (!matched) {
    console.log("🤔 No entendí la orden. ¿Puedes reformularla?");
    rl.prompt();
  }
});
