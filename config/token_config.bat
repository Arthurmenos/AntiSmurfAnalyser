@echo off
setlocal

if exist ".\token.config" (
    echo Token já configurado.
    goto :end
)

set /p newToken=Digite seu ApiToken do Stratz: 

(for /f "delims=" %%i in ('type ".\token.js"') do (
    echo %%i | findstr /c:"export const apiToken =" >nul
    if errorlevel 1 (
        echo %%i
    ) else (
        echo export const apiToken = '%newToken%';
    )
)) > ".\token.js.tmp"

move /Y ".\token.js.tmp" ".\token.js"

echo Token configurado > ".\token.config"

echo.

:end
endlocal
exit /b 0
