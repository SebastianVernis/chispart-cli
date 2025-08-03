#!/bin/bash
echo "🚀 Instalando Gemini CLI Conversacional..."
mkdir -p ~/chispart-cli/{actions,brain,logs,connectors}
cp -r * ~/chispart-cli/ 2>/dev/null
chmod +x ~/chispart-cli/chispart.js
chmod +x ~/chispart-cli/actions/*.sh
if [[ "$SHELL" == *"zsh"* ]]; then SHELL_RC=~/.zshrc; else SHELL_RC=~/.bashrc; fi
if ! grep -q "alias chispart=" "$SHELL_RC"; then
    echo "alias chispart='node ~/chispart-cli/chispart.js'" >> $SHELL_RC
    echo "✅ Alias 'chispart' agregado a $SHELL_RC"
fi
echo "✅ Instalación completada. Reinicia tu terminal o ejecuta: source $SHELL_RC"
