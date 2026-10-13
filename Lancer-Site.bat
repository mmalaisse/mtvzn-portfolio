@echo off
title MTVZN Portfolio - Serveur Local
echo ========================================================
echo        LANCEMENT DU PORTFOLIO MTVZN PHOTOGRAPHY
echo ========================================================
echo.
echo Ouverture du site web dans votre navigateur...
start http://localhost:8080/index.html
echo Serveur actif sur http://localhost:8080/
echo Appuyez sur Ctrl+C pour arreter le serveur.
echo.
python -m http.server 8080
pause
