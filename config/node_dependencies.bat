@echo off
setlocal

:: Navegar para o diretório um nível acima
cd .

npm install --quiet --no-progress --no-audit --no-fund --no-save
if errorlevel 1 (
    echo Erro ao instalar dependências. Verifique sua conexão com a internet e tente novamente.
    pause
    exit /b 1
)

echo.

:end
endlocal
exit /b 0
