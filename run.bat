@echo off
setlocal

:: Verificar se a pasta node_modules existe
if not exist "node_modules\." (
    echo Pasta node_modules não encontrada. Instalando dependências do Node.js...
    call config\node_dependencies.bat

	:: Verificar se o arquivo token.config existe
	if not exist "token.config" (
    	echo Arquivo token.config não encontrado. Configurando token...
    	call config\token_config.bat
	call config\main_loop.bat
	)
)

:: Verificar se o arquivo token.config existe
if not exist "token.config" (
    echo Arquivo token.config não encontrado. Configurando token...
    call config\token_config.bat
	call config\main_loop.bat
)

:: Executar o main_loop.bat na pasta config
call config\main_loop.bat

endlocal
