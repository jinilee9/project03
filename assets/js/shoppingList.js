async function productsData() {
    const res = await fetch('https://openmarket.weniv.co.kr/products/');
    const listData = await res.json();
    return listData.results;
}

function createProductsItem(product) {
    const productBox = document.createElement('li');
    productBox.className = 'products__list';

    const productBoxIn = document.createElement('a');
    productBox.appendChild(productBoxIn);

    // 이미지 감싸는 박스 생성
    const productImgBox = document.createElement('div');
    productImgBox.className = 'products-img';
    productBoxIn.appendChild(productImgBox);

    // 이미지태그 생성
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.product_name;
    productImgBox.appendChild(productImage);

    // 텍스트만 감싸는 박스 생성
    const productTextBox = document.createElement('div');
    productBoxIn.appendChild(productTextBox);

    // 제품태그(라벨) 생성
    const productTag = document.createElement('p');
    productTag.className = 'products-label';
    productTag.textContent = product.store_name;
    productTextBox.appendChild(productTag);

    // 제품명 생성
    const productName = document.createElement('p');
    productName.className = 'products-name';
    productName.textContent = product.product_name;
    productTextBox.appendChild(productName);

    // 제품가격 생성
    const productPrice = document.createElement('p');
    productPrice.className = 'product-price';
    productPrice.textContent = '원';

    const productPriceNum = document.createElement('span');
    productPriceNum.textContent = product.price;

    productPrice.prepend(productPriceNum)
    productTextBox.appendChild(productPrice);

    return productBox;
}

async function displayProducts() {
    const products = await productsData();
    
    // 단일 요소로 접근하기 위해 querySelector 사용
    const productContainer = document.querySelector('.shopping-list');

    // 기존의 모든 제품 목록을 삭제하여 중복 추가 방지
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productItem = createProductsItem(product);
        productContainer.appendChild(productItem);
    });
}

displayProducts();
