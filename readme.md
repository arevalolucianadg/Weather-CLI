# Weather NodeJS CLI

### Tabla de contenido

## Instalaciones
* Instalar [NodeJS](https://nodejs.org/es/). Verificar instalación con `node -v`.
* Clonar repositorio:
  * `git clone https://github.com/arevalolucianadg/Weather-CLI.git`
* Instalar dependencias del proyecto antes de iniciar:
  * ejecutar: `npm i` o `npm install` en la carpeta raíz del proyecto. 
* Crear **variables de entorno** en archivo .env y almacenar *apiKey* de [*Open Weather Map*](https://openweathermap.org/current):
  * `OWM_API_KEY=ingrese su appId sin espacios`

## Ejecutar
Para recibir la temperatura actual de una ciudad ejecutar en terminal:

`node app --city "Buenos Aires"` / `node app -C "Londres"`

Utilizar los flags **--city** o **-C** seguido del nombre de una ciudad.