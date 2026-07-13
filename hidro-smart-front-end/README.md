# Hidro-Smart Front-end

Este proyecto es una aplicación móvil desarrollada con Expo y React Native para HidroSmart. La idea es mantener una estructura clara, organizada y escalable, siguiendo una arquitectura en capas que facilite el crecimiento del proyecto.

## Descripción general

Hidro-Smart Front-end es la interfaz móvil de la plataforma. Su objetivo es permitir la interacción con funcionalidades relacionadas con monitoreo, gestión y visualización de información dentro del ecosistema del proyecto.

## Tecnologías utilizadas

- React Native
- Expo
- JavaScript
- React Navigation para la navegación entre pantallas
- Expo Router como parte del flujo de desarrollo con Expo

## Estructura del proyecto

La estructura del proyecto está organizada con una separación por capas para mantener el código más limpio y fácil de mantener:

```text
src/
│
├── app/
├── presentation/
├── application/
├── domain/
├── infrastructure/
└── shared/
```

### Capas principales

- app: punto de entrada y configuración base de la aplicación.
- presentation: pantallas, componentes visuales, navegación y estilos.
- application: lógica de uso, servicios, validaciones y casos de uso.
- domain: entidades, modelos, interfaces y reglas del negocio.
- infrastructure: comunicación con APIs, almacenamiento y adaptadores externos.
- shared: utilidades, constantes, helpers y código reutilizable.

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js
- npm o yarn
- Expo CLI

## Instalación

1. Instala las dependencias:

   ```bash
   npm install
   ```
2. Inicia la aplicación:

   ```bash
   npx expo start
   ```

## Desarrollo

Para trabajar en el proyecto, puedes editar los archivos dentro de la carpeta src y mantener la organización por capas para que el código sea más fácil de mantener.

## Notas

Este README está pensado como una guía inicial para el proyecto. Con el tiempo puede ampliarse con información más específica sobre flujo de desarrollo, convenciones de código, pruebas y despliegue.
