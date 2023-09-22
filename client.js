// URL do servidor onde os produtos estão armazenados (substitua pela sua URL)
const serverUrl = 'https://seuservidor.com';

// Referência à seção de visualização dos produtos
const productList = document.querySelector('#product-list');

// Função para buscar e exibir os produtos da página do servidor
async function fetchProducts() {
    try {
        const response = await fetch(`${serverUrl}/products`);
        const products = await response.json();

        // Limpe a lista de produtos atual
        productList.innerHTML = '';

        // Adicione cada produto à lista
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <h2>${product.name}</h2>
                <p>Preço: R$ ${product.price}</p>
                <p>${product.description}</p>
                <img src="${serverUrl}/${product.image}" alt="${product.name}">
            `;

            productList.appendChild(productItem);
        });
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}

// Chame a função para buscar e exibir os produtos quando a página carregar
window.addEventListener('load', fetchProducts);
