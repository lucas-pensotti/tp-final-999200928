# Proyecto Final 

## Descripción del proyecto

El proyecto consiste en que el usuario pueda registrarse mediante un formulario en el cual debe ingresar su nombre, su email y una contraseña para crear una cuenta dentro de la aplicación, lo cual incluye validaciones para verificar que los datos sean correctos antes de registrarse, accediendo así a una interfaz de chat entre varios usuarios desplegando una lista de contactos y sus conversaciones correspondientes.

## Tecnologías utilizadas:

- HTML
- CSS
- JavaScript
- React
- Vite
- LocalStorage

## Instrucciones para ejecutar el proyecto localmente

1- En el escritorio ingresar a git bash y clonar el repositorio con el comando: git clone https://github.com/utn-courses/tp-final-999200928.git

2- Ingresar a la carpeta con el comando: cd tp-final-999200928

3- Instalar las dependencias utilizando: npm install

4- Ejecutar el proyecto escribiendo: npm run dev

5- Abrir el link en el navegador con Ctrl + Click sobre la ruta: http://localhost:5173 

## Instrucciones para el Deploy

Para ejecutar el proyecto es necesario usar el siguiente comando: npm run build . Esto crea una carpeta Dist con archivos para publicarlos en el servidor. 

## Estructura del proyecto

El proyecto está organizado en distintas carpetas, y una de ellas es "components", que contiene componentes reutilizables como por ejemplo la barra lateral del chat. La carpeta "context" que se utiliza para guardar información del usuario y poder compartirla entre distintos componentes. Luego se encuentra "views" donde están las páginas principales de la aplicación como Registro, Login, el chat, etc.. y por último el archivo "main.jsx" que funciona como entrada a la aplicación, donde se ejecuta React.
