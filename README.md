# 📝 Blog Personal - Proyecto Fullstack (JavaScript + EJS)

Este proyecto es una aplicación web sencilla para escribir y publicar artículos personales. Tiene una sección pública (visitantes) y una sección privada (admin).

---

## 📁 Estructura del Proyecto
```
personal-blog/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── views/ (guest & admin)
│   ├── data/         ← Aquí se guardan los artículos como archivos JSON
│   ├── public/       ← CSS y JS del cliente
│   ├── server.js     ← Punto de entrada
│   └── config.js     ← (opcional)
├── frontend/         ← Organización opcional para assets
├── package.json
```

---

## 🚀 Cómo ejecutar el proyecto

1. Clona este repositorio y entra en la carpeta:
```bash
cd personal-blog
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor:
```bash
node backend/server.js
```

4. Abre tu navegador en:
```
http://localhost:3000
```

---

## 🔐 Acceso administrador
- URL: `/login`
- Usuario: `admin`
- Contraseña: `1234`

Desde allí puedes:
- Ver todos los artículos
- Crear uno nuevo
- Editar o eliminar existentes

---

## 📦 Notas Técnicas
- Artículos almacenados como archivos `.json`
- No requiere base de datos
- Motor de plantillas: EJS
- Estilo CSS simple en `/public/css/styles.css`