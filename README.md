# 💸 Tenpo Challenge

Este proyecto es un challenge técnico para Tenpo que demuestra habilidades en el desarrollo frontend con React y TypeScript. La aplicación implementa un sistema de autenticación simulado, consumo eficiente de APIs y visualización optimizada de datos.

## 💬 Requisitos del Challenge

- **Autenticación Simulada**: Implementación de un sistema de login con validación de correo y contraseña, retornando un token fake
- **Home con Lista de Datos**: Conexión con un api, en este caso PokeAPI, para mostrar una lista de 2000 elementos
- **Sistema de Logout**: Botón que limpia la sesión y redirige al login
- **Rutas Protegidas**: Separación de rutas públicas y privadas mediante context

## ⚙️ Características Técnicas

- **Autenticación**: Sistema de login simulado usando JWT tokens almacenados en session storage
- **Rutas Protegidas**: Separación de contextos para rutas públicas y privadas
- **Integración API**: Consumo eficiente de PokeAPI para mostrar datos de Pokémon
- **Diseño Responsivo**: Adaptable a dispositivos móviles y desktop
- **Optimización de Datos**: Estrategia eficiente para mostrar 2000 elementos

## 💾 Tecnologías Utilizadas

- React 19
- TypeScript
- React Router v7
- Axios
- CSS3

## 👩🏼‍💻 Estructura del Proyecto

```
src/
├── components/     # Componentes UI reutilizables
├── contexts/       # Contextos de autenticación y rutas
├── hooks/         # Hooks personalizados de React
├── pages/         # Páginas de la aplicación
├── services/      # Servicios de API y autenticación
└── types/         # Definiciones de tipos TypeScript
```

## 📦 Instalación y Ejecución

### Prerrequisitos

- Node.js (v18 o superior)
- npm o pnpm

### Pasos de Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/anderasdfg/tenpo-challenge.git
   cd tenpo-challenge
   ```

2. Instalar dependencias:

   ```bash
   npm install
   # o
   pnpm install
   ```

3. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   pnpm dev
   ```

4. Abrir el navegador en `http://localhost:5173`

## 👤 Flujo de Autenticación

### Login

- Ingresar cualquier correo válido y contraseña
- El sistema simula una autenticación exitosa (código 200)
- Se almacena un token fake en session storage
- Redirección automática a la página principal

### Estrategia de Logout

La implementación del logout sigue un enfoque basado en contextos:

1. Limpieza del session storage y estado de autenticación
2. Reinicio del contexto privado a su estado inicial
3. Redirección a rutas públicas
4. Limpieza de datos en caché o información sensible

Esta estrategia garantiza:

- Gestión limpia del estado
- Protección adecuada de rutas
- Terminación segura de la sesión
- Experiencia de usuario consistente

## Implementación de la Home

### Estrategia de Visualización de Datos

La página principal implementa una lista virtualizada con scroll infinito para mostrar eficientemente los datos de Pokémon:

1. **Virtualización**

   - Solo renderiza elementos visibles en el viewport
   - Mantiene una pequeña ventana de elementos renderizados
   - Reduce nodos DOM y mejora el rendimiento

2. **Scroll Infinito**

   - Carga inicial de 50 elementos
   - Carga progresiva al hacer scroll
   - Detección de scroll mediante Intersection Observer
   - Experiencia de carga fluida

3. **Optimizaciones de Rendimiento**
   - Carga perezosa de imágenes
   - Eventos de scroll debounceados
   - Respuestas de API en caché
   - Re-renders optimizados

## Estrategia de Optimización Backend

Para mejorar la eficiencia de la aplicación, se proponen las siguientes optimizaciones:

1. **Implementación GraphQL**

   - Reemplazar endpoints REST por GraphQL
   - Reducir over-fetching de datos
   - Combinar múltiples requests en queries únicas
   - Mejor validación de tipos y esquemas

2. **Estrategia de Caché**

   - Implementar capa de caché con Redis
   - Cachear datos de Pokémon frecuentemente accedidos
   - Configurar TTL apropiado para diferentes tipos de datos
   - Implementar patrón stale-while-revalidate

3. **Optimización de Respuestas API**

   - Habilitar compresión gzip/brotli
   - Implementar HTTP/2 para multiplexación
   - Usar connection keep-alive
   - Implementar headers de caché apropiados

4. **Paginación de Datos**
   - Paginación basada en cursor
   - Filtrado del lado del servidor
   - Capacidades de ordenamiento optimizadas
   - Reducción del tamaño de payload

## 🏷️ Licencia

Este proyecto está bajo la Licencia MIT.
