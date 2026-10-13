@echo off
title Publication MTVZN sur GitHub
echo ========================================================
echo        PUBLIER LE PORTFOLIO MTVZN SUR GITHUB
echo ========================================================
echo.
echo 1. Creez un nouveau repository sur https://github.com/new
echo    - Nom suggere : mtvzn-portfolio
echo    - Laissez-le Public
echo    - Ne cochez PAS "Add a README file"
echo.
echo 2. Copiez l'URL de votre repository GitHub
echo    (ex: https://github.com/votre-compte/mtvzn-portfolio.git)
echo.
set /p REPO_URL="Collez l'URL de votre repo GitHub ici : "

if "%REPO_URL%"=="" (
    echo Aucune URL entree. Annulation.
    pause
    exit /b
)

echo.
echo Configuration du depot distant...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo.
echo Envoi des fichiers vers GitHub...
git push -u origin main

echo.
echo ========================================================
if %errorlevel% equ 0 (
    echo [SUCCES] Tes fichiers sont publies sur GitHub !
    echo.
    echo Pour mettre ton site en ligne GRATUITEMENT (GitHub Pages) :
    echo 1. Ouvre ton repo sur GitHub
    echo 2. Clique sur l'onglet "Settings"
    echo 3. Dans le menu a gauche, clique sur "Pages"
    echo 4. Sous "Branch", selectionne "main" et "/(root)", puis "Save"
    echo 5. En 1 a 2 minutes, ton site sera accessible mondialement !
) else (
    echo [ERREUR] L'envoi a echoue. Verifiez vos identifiants GitHub ou les droits d'acces.
)
echo ========================================================
echo.
pause
