// Array para armazenar os produtos
const products = [];

// Referências aos elementos do formulário
const productForm = document.querySelector('#product-form');
const productNameInput = document.querySelector('#product-name');
const productPriceInput = document.querySelector('#product-price');
const productDescriptionInput = document.querySelector('#product-description');
const productImageInput = document.querySelector('#product-image');

// Referência à seção de visualização dos produtos
const productList = document.querySelector('#product-list');

productForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Verifique se já atingiu o limite de 20 produtos
    if (products.length >= 20) {
        alert('Você atingiu o limite de 20 produtos.');
        return;
    }

    // Obtenha os valores dos campos do formulário
    const productName = productNameInput.value;
    const productPrice = productPriceInput.value;
    const productDescription = productDescriptionInput.value;
    const productImage = productImageInput.files[0]; // Obtenha o arquivo de imagem

    // Crie um objeto de produto
    const product = {
        name: productName,
        price: productPrice,
        description: productDescription,
        image: productImage
    };

    // Adicione o produto ao array de produtos
    products.push(product);

    // Limpe os campos do formulário
    productNameInput.value = '';
    productPriceInput.value = '';
    productDescriptionInput.value = '';
    productImageInput.value = '';

    // Atualize a lista de produtos na página
    updateProductList();
});

function updateProductList() {
    // Limpe a lista de produtos atual
    productList.innerHTML = '';

    // Adicione cada produto à lista
    products.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h2>${product.name}</h2>
            <p>Preço: R$ ${product.price}</p>
            <p>${product.description}</p>
            <img src="${URL.createObjectURL(product.image)}" alt="${product.name}">
        `;

        productList.appendChild(productItem);
    });
}
