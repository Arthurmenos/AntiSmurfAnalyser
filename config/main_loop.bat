@echo off
setlocal

:loop
:: Exibir uma linha em branco para separar as saídas de cada execução de main.js
echo.

:: Executar main.js sem limpar o console
node ".\main.js"

:: Aguardar 2 segundos antes de reiniciar o loop
timeout /t 2 >nul

:: Ir para o início do loop
goto :loop

:end
endlocal
exit /b 0
