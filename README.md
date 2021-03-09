# Ejercicio de encontrar números primos



## Descripción
- Realizar un algoritmo que imprima los números primos entre 2 y  un número dado, de forma descendente.
- Por ejemplo dado el número 7 se debería imprimir   7,5,3,2
- Por ejemplo dado el número 15 se debería imprimir  13,11,7,5,3,2
- Esto debe venir en un proyecto NodeJS.
 
## Criterios de evaluación

- Proyecto en node (mandatorio)
- Buenas prácticas de desarrollo (mandatorio)
- pruebas unitarias (mandatorio)
- Validación de datos de entrada (opcional)
- Utilización de módulos npm (opcional)
- Dockerizacion del proyecto (opcional)


### Resolución

- proyecto node por consola

#### Correr APP desde la consola NodeJS

- Prerequisito: Tener nodejs instalado en el sistema
- clonar repositorio
- Instalar dependencias (desarrollado en node 12.18.4)
    > npm install
- Correr programa con:
    > node index.js 
    - Método alternativo
    - npm run start

#### Correr set de pruebas 

- Pruebas desarrolladas con mocha y chai
- Para ejecutar 
    > npm run test


#### Correr APP desde navegador con método GET 

- Levantar APP con 
    > npm run web
- Ejecutar una solicitud GET con el número a calcular
- Ejemplo: localhost/calculate/15
    > curl -i localhost/calculate/15



#### Correr APP desde docker haciendo build del proyecto

> npm install
> docker build -t fpay/prime-numbers . 
> docker run -p 8000:8000 -d fpay/prime-numbers
> curl -i localhost/calculate/15
- La alternativa es abrir browser y navegar a http://localhost:8000/calculate/15

- Por otro lado se puede acceder al contenedor y ejecutar el APP por consola.
> docker exec -it "idcontainer" bash
> node index.js


#### Correr APP desde imagen en dockerhub

- Descargar la imagen
> docker pull niko2019/find-prime-numbers:latest
- Correr el contenedor
> docker run -p 8000:8000 -d niko2019/find-prime-numbers




    