// componentes/funciones/itemProducto.js
export function producto(prod) {
    const item = document.createElement('div');
    item.classList.add('producto');
    item.setAttribute('data-id', prod.id); // Añadir un identificador único

    item.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio.toFixed(2)}</p>
    `;

    return item;
}