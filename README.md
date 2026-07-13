# Hidro-Smart Front-end

Frontend de **Hidro-Smart**, una aplicación enfocada en la gestión y monitoreo inteligente de hogares y dispositivos relacionados con el consumo de recursos.

Este repositorio contiene la implementación del cliente utilizando una **Arquitectura en N Capas**, con el objetivo de mantener una separación clara de responsabilidades, facilitar el mantenimiento del código y permitir la escalabilidad del proyecto.

> **Nota:** Este README evolucionará junto con el desarrollo del proyecto y se actualizará conforme se implementen nuevas Historias de Usuario (HU).

---

# 📂 Arquitectura del proyecto

La estructura del proyecto sigue una organización por capas que permite desacoplar la lógica de negocio de la interfaz gráfica y de la infraestructura.

```text
src/
├── app/
├── presentation/
├── application/
├── domain/
├── infrastructure/
└── shared/
```

---

# 🏛 Descripción de las capas

| Capa                     | Responsabilidad                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------- |
| **app**            | Configuración general, inicialización de la aplicación y proveedores globales.       |
| **presentation**   | Pantallas, componentes, navegación, estilos y gestión de la interfaz de usuario.      |
| **application**    | Casos de uso, lógica de aplicación, validaciones y coordinación entre capas.         |
| **domain**         | Entidades, modelos, reglas de negocio e interfaces del dominio.                         |
| **infrastructure** | Implementación de servicios, consumo de APIs, almacenamiento y acceso a datos.         |
| **shared**         | Componentes reutilizables, utilidades, constantes, tipos y configuraciones compartidas. |

---

# 🎯 Objetivo de la arquitectura

La organización por capas permite:

- Separar responsabilidades.
- Facilitar el mantenimiento del proyecto.
- Mejorar la escalabilidad.
- Favorecer el trabajo colaborativo.
- Reducir el acoplamiento entre módulos.
- Facilitar las pruebas y futuras integraciones.

---

# 🚀 Estado actual

Actualmente el proyecto se encuentra en la **HU-00**, correspondiente a la creación de la estructura base del frontend.

En esta fase se realizó:

- Organización inicial del proyecto.
- Implementación de la Arquitectura en N Capas.
- Definición de la estructura de directorios.
- Preparación de la base para el desarrollo de las funcionalidades futuras.

---

# Roadmap de desarrollo

Las funcionalidades del proyecto se desarrollarán progresivamente mediante Historias de Usuario.

| Historia                                      | Estado       |
| --------------------------------------------- | ------------ |
| HU-00 - Estructura base del proyecto          | Finalizada   |
| HU-01 - Inicio de sesión                     | ⏳ Pendiente |
| HU-02 - Registro de usuario                   | ⏳ Pendiente |
| HU-03 - Autenticación de segundo factor      | ⏳ Pendiente |
| HU-04 - Panel principal                       | ⏳ Pendiente |
| HU-05 - Hogares y dispositivos                | ⏳ Pendiente |
| HU-06 - Monitoreo de consumo                  | ⏳ Pendiente |
| HU-07 - Gestión de dispositivos              | ⏳ Pendiente |
| HU-08 - Gestión de hogares                   | ⏳ Pendiente |
| HU-09 - Privacidad y consentimiento           | ⏳ Pendiente |
| HU-10 - Experiencia móvil fluida             | ⏳ Pendiente |
| HU-11 - Restricción de acciones de creación | ⏳ Pendiente |
| HU-12 - Compatibilidad multiplataforma        | ⏳ Pendiente |

---

# 🛠 Tecnologías

Las tecnologías utilizadas se irán incorporando conforme avance el desarrollo del proyecto.

Actualmente:

- React Native
- TypeScript
- Arquitectura en N Capas

---

# 📈 Evolución del proyecto

Este documento será actualizado durante el desarrollo del proyecto para reflejar:

- Nuevas funcionalidades.
- Cambios en la arquitectura.
- Dependencias agregadas.
- Mejoras estructurales.
- Decisiones técnicas relevantes.
- Guías de instalación y ejecución.

---

# 🤝 Contribución

Se recomienda mantener la organización por capas establecida para garantizar la consistencia del proyecto y facilitar futuras contribuciones.
