# Scafolding con webpack


1.- Instalación de las dependencias

```
npm install
```

2.- Estructura

-app/   
&nbsp;&nbsp;&nbsp;&nbsp;-src/   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-fonts/   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-img/   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-js/   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-main.js   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-php/   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-sass/   
&nbsp;&nbsp;&nbsp;&nbsp;-public/   
&nbsp;&nbsp;&nbsp;&nbsp;-index.php   
&nbsp;&nbsp;&nbsp;&nbsp;-functions.php   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-assets/   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-css/   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-app.min.css   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-js/   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-app.min.js   			
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-vendor.min.js   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-includes/   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-other.php   
-node_modules/   
-package.json   
-webpack.config.js   


## Desarrollo

Para inicializar el watch y que cada cambio que se haga se refleje hay que abrir la terminal y situarse en la raíz del proyecto

```
npm run dev
```

Con este comando se irán generando los ficheros compilados sin minificar en la carpeta ```public``` con la estructura que hemos definido arriba.

## Producción

Para generar los estáticos hay que ejecutar el siguiente comando:

```
npm run prod
```

Con este comando se generará los ficheros estáticos compilados, minificados y optimizados
