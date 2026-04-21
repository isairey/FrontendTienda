# Tienda en Línea de Artesanías 🛍️

Este proyecto es una **tienda en línea de artesanías**, desarrollada con **Vue.js**. En ella, los usuarios pueden explorar productos artesanales, agregar artículos a su carrito y realizar compras de manera sencilla.

## 🌟 Características

- 🏠 **Vista Principal**: Muestra una lista de productos artesanales.
- 🛒 **Carrito de Compras**: Los usuarios pueden ver y editar los productos en su carrito.
- 🧶 **Vista de Producto**: Página detallada de un producto con información adicional.
- 🖼️ **Navegación**: Barra lateral con categorías de productos.
- 🔍 **Buscador**: Barra de búsqueda para encontrar productos rápidamente.

## 📁 Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

```plaintext
📂 src
├── 📂 components
│   ├── **Header.vue** → Encabezado con logo, barra de búsqueda y botones de usuario/carrito.
│   ├── **Sidebar.vue** → Barra lateral con categorías.
│   ├── **ProductList.vue** → Lista de productos.
│   ├── **ProductCard.vue** → Tarjeta individual de producto.
│   ├── **Footer.vue** → Pie de página.
│   ├── **Cart.vue** → Vista del carrito de compras.
│   ├── **ProductDetail.vue** → Página de detalles del producto.

├── 📂 views
│   ├── **Home.vue** → Página principal con productos.
│   ├── **ProductPage.vue** → Vista individual del producto.
│   ├── **CartPage.vue** → Vista del carrito.

├── 📂 router
│   ├── **index.js** → Configuración de rutas.

├── **App.vue** → Estructura principal del sitio.
├── **main.js** → Punto de entrada del proyecto.

```
## ⚙️ Requisitos

- **Node.js** (v14 o superior)
- **Vue.js**
- **npm** o **yarn**

## 🚀 Instalación

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/isairey/FrontendTienda.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd FrontendTienda
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Ejecuta la aplicación en tu entorno local:
    ```bash
    npm run dev
    ```

## 🛠️ Tecnologías Utilizadas

- **Vue.js**: Framework para construir la interfaz de usuario.
- **Vue Router**: Para gestionar las rutas de la aplicación.
- **Vuex**: Para la gestión del estado de la aplicación (si se decide implementar).
- **CSS**: Para los estilos básicos de la aplicación.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, por favor abre un **issue** o envía un **pull request**.

## 📜 Licencia

Este proyecto está bajo la licencia **MIT**.
