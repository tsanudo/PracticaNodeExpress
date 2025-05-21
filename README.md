# SanudoDuranTomas_NodeExpress

## Descripción

Este proyecto es una aplicación web compuesta por un backend en Node.js/Express y un frontend en Angular. Permite visualizar noticias de diferentes fuentes, filtrarlas por categorías y gestionar una lista de noticias favoritas. Las noticias se obtienen de una API externa y los favoritos se almacenan tanto en el navegador como en una base de datos MongoDB mediante la API propia.

---

## Estructura del Proyecto

- **Node/**: Backend con Express, expone endpoints para gestionar favoritos.
- **PeriodicoApp/**: Frontend Angular para visualizar y gestionar noticias.

---

## Tecnologías Utilizadas

- **Node.js & Express**: Backend y API REST.
- **MongoDB**: Almacenamiento de favoritos.
- **Angular**: Frontend SPA.
- **TypeScript**: Lenguaje principal del frontend.
- **RxJS**: Programación reactiva en Angular.
- **CORS**: Comunicación segura entre frontend y backend.
- **dotenv**: Gestión de variables de entorno.

---

## Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd SanudoDuranTomas_NodeExpress
```

### 2. Instalar dependencias

#### Backend (Node/Express)

```bash
cd Node
npm install
```

#### Frontend (Angular)

```bash
cd PeriodicoApp
npm install
```

### 3. Configurar variables de entorno

Copia el archivo `.env.example` a `.env` en el directorio `Node` y ajusta las variables según tu configuración.

### 4. Ejecutar la aplicación

#### Backend

```bash
cd Node
npm start
```

#### Frontend

```bash
cd PeriodicoApp
ng serve
```

Accede a la aplicación en `http://localhost:4200`.

---

## Uso

1. Almacenar una noticia como favorita: Haz clic en el botón de favorito en la tarjeta de la noticia.
2. Ver noticias favoritas: Accede a la sección de favoritos desde el menú.
3. Filtrar noticias: Utiliza las opciones de filtrado disponibles en la página principal.

---

## Contribución

Para contribuir, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Crea un Pull Request describiendo tus cambios.

---

## Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## Autores

- **Tomas Sanudo** 
---

## Estado del Proyecto

El proyecto está en constante desarrollo. Las características futuras incluyen:

- [ ] Implementar autenticación de usuarios.
- [ ] Permitir a los usuarios agregar fuentes de noticias personalizadas.
- [ ] Mejorar el sistema de filtrado y búsqueda de noticias.

---
