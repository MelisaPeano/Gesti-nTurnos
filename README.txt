Pasos que segui en este proyecto
1- instalé typescript localmente con este comando "npm install --save -dev typescript 
ts-node".
2- inicio node "npm init -y"
3 - añadí el archivo "tsconfig.json" con el comando  npx tsc --init
4- recorda que el back y el front tienen dos pakage.json distintos 
5- crea una carpeta "src" dentro del back y "dist"
6- dentro de "scripts" del pakage 
    "build": "tsc",
    "start": "node ./dist/index.js"

7- en el tsconfig buscar "outDist" con cmd+f lo descomento y le pngo el nombre de la carpeta "dist".