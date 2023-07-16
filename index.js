const CATEGORIES = {
    computers: [
        {
            'name': 'Macbook Air M2',
            price: '1800$',
            img: 'images/macbook.jpg',
            description: 'MacBook - Apple M2 (8-core), 13.6" IPS glossy 2560 × 1664, RAM 8GB, Apple M2 8-core GPU, SSD 256GB, backlit keyboard, webcam, USB-C, WiFi 802.11ac, macOS',
        },
        {
            'name': 'Hp Laptop',
            price: '700$',
            img: 'images/hp.jpg',
            description: 'Laptop - Intel Core i5 1235U Alder Lake, 15.6" IPS matte 1920 × 1080, RAM 16GB DDR4, Intel Iris Xe Graphics, SSD 1000GB, numeric keypad, backlit keyboard, webcam, USB 3.2 Gen 1, USB-C, fingerprint reader, 3-cell battery, Windows 11 Home (NBD) (723Z9EA)',
        },
        {
            'name': 'Lenovo IdeaPad 3',
            price: '500$',
            img: 'images/lenovo.jpg',
            description: 'Gaming Laptop - AMD Ryzen 5 5600H, 15.6" IPS anti-glare 1920 × 1080 165 Hz, RAM 16GB DDR4, NVIDIA GeForce RTX 3050 Ti 4GB, SSD 1000GB, numeric keypad, backlit keyboard, webcam, USB 3.2 Gen 1, USB-C, Windows 11 Home',
        },
    ],
    phones: [
        {
            'name': 'iPhone 13',
            price: '1000$',
            img: 'images/iPhone.jpg',
            description: 'Mobile Phone 6,1" Super Retina XDR OLED 2532 × 1170, processor Apple A15 Bionic 6-core, RAM 4 GB, internal memory 128 GB, main camera with optical zoom 12 Mpx (f/1,6) + 12 Mpx (f/2,4), selfie camera 12 Mpx, optical stabilization, GPS, Glonass, NFC, LTE, 5G, Lightning port, single SIM + eSIM, water resistant IP68, unlocked, quick charging 20W, wireless charging 15W, battery 3240 mAh, iOS 15',
        },
        {
            'name': 'Samsung Galaxy S23',
            price: '1100$',
            img: 'images/samsung.jpg',
            description: 'Mobile Phone 6,1" AMOLED 2340x1080, 120Hz, processor Qualcomm Snapdragon 8 Gen 2 8-core, RAM 8 GB, internal memory 256 GB, main camera with optical zoom 50 Mpx (f/1,8) + 10 Mpx (f/2,4) + 12 Mpx (f/2,2), selfie camera 12 Mpx, optical stabilization, Glonass, NFC, LTE, 5G, USB-C, fingerprint reader in screen, Dual SIM + eSIM, water resistant IP68, unlocked, quick charging 25W, wireless charging 15W, reverse charging 4,5W, battery 3900 mAh, Android 13',
        },
        {
            'name': 'Realme C55',
            price: '300$',
            img: 'images/realme.jpg',
            description: 'Mobile Phone 6,72" IPS 2400 × 1080, 90Hz, processor MediaTek Helio G88 8-core, RAM 8 GB, internal memory 256 GB, main camera 64 Mpx (f/1,79) + 2 Mpx (f/2,4), selfie camera 8 Mpx, electronic stabilization, GPS, Glonass, NFC, LTE, Jack (3,5mm) and USB-C, fingerprint reader, dual SIM + memory card, unlocked, quick charging 33W, battery 5000 mAh, Android',
        },
    ],
    gamerProducts: [
        {
            'name': 'PlayStation 5',
            price: '700$',
            img: 'images/ps5.jpg',
            description: 'Game Console - home, SSD 825GB, Blu-ray (4K), possibility to play in 4K, 1 × game controller',
        },
        {
            'name': 'Microsoft Xbox Series X',
            price: '800$',
            img: 'images/xbox.jpg',
            description: 'Game Console - home, SSD 1024GB, Blu-ray (4K), possibility to play in 4K, 1 × game controller',
        },
    ],
    homeProducts: [
        {
            'name': 'Table',
            price: '200$',
            img: 'images/table.jpg',
            description: 'Height Adjustable Desk - without tabletop, electrically adjustable, height: 62-128cm, width: 100-170cm, 2 motors, LED touch control, memory for up to three positions, innovative 2-sensor anti-collision system, working position reminder timer, recommended tabletop size: (1100-2200) × (750-1000)mm, max. load: 125kg, 100-240V, colour: black',
        },
        {
            'name': 'Chair',
            price: '210$',
            img: 'images/chair.jpg',
            description: 'Gaming Chair - upholstery material: synthetic leather, synchro tilt with lock, lumbar and head support, height adjustable, with top part rotation, with forward / backward shift and with right / left shift armrests, revolving and metal construction, seat pan padding: polyurethane molding, metal base, plastic wheels, black and red colour, weight capacity: 136 kg',
        },
    ],
    appliances: [
        {
            'name': 'Samsung fridge',
            price: '560$',
            img: 'images/fridge.jpg',
            description: 'Built-in Fridge - with freezer at the bottom, energy efficiency class D, climate class SN-T, refrigerator capacity 190 l, freezer capacity 74l, optional, 3 fridge shelves, 2 freezer trays, 2 cooling circuits, none colour, special features total No Frost, automatic defrost, display, LED light, refrigerator door open indication, super cooling, super freezing, twin Cooling, holiday mode, size 177,5 × 54 × 55 cm (H × W × D)',
        },
        {
            'name': 'Vacuume cleaner robot',
            price: '500$',
            img: 'images/cleaner.jpg',
            description: 'Robot Vacuum for all floor types, battery type: Li-ion, operating time: 180 min, noise level: 68,5 dB, dust container volume: 0,35 l, automatic charging, shock sensor, continue cleaning after recharging, automatic emptying, vacuum multiple rooms, stairs detection sensor, preset rooms scheduled for cleaning, postponed cleaning feature and cleaning schedule, number of side brushes: 1, can climb over obstacles up to 2 cm, navigation type: LiDAR, mopping textile, water container, filter, virtual wall and waste container for vacuuming, washable filter and EPA E11 filter, colour: black',
        },
        {
            'name': 'Coffee Machine Phillips',
            price: '480$',
            img: 'images/coffeeMachine.jpg',
            description: 'Automatic Coffee Machine - pressure: 15 bar, hot water function, timer, prepares two cups at once and automatic shutdown, 1,8l water reservoir, 13 grinding levels, power: 1450W, width: 23,8cm, height: 35,1cm, depth: 43cm, weight: 9kg,',
        },
    ],
};

const categories = document.querySelectorAll('.categories');
const main = document.querySelector('.products');

categories.forEach(category => {
    category.addEventListener('click', (e) => {
        showProducts(category.id);
    });
});

function showProducts(category) {
    main.innerHTML = '';

    CATEGORIES[category].forEach((product, index) => {
        const productTitle = document.createElement('h3');
        const productPrice = document.createElement('p');
        const productImg = document.createElement('img');

        productTitle.classList.add('product-title');
        productPrice.classList.add('product-price');
        productImg.classList.add('product-img');

        productPrice.innerHTML = product.price;
        productTitle.innerHTML = product.name;


        productTitle.setAttribute('id', index);
        productTitle.setAttribute('data-category', category);
        productImg.setAttribute('src', product.img);

        productTitle.addEventListener('click', (e) => {
            showProductsInfo(product);
        });

        const productContainer = document.createElement('div');
        productContainer.classList.add('product-info');

        productContainer.appendChild(productImg);
        productContainer.appendChild(productTitle);
        productContainer.appendChild(productPrice);

        main.appendChild(productContainer);
    });
}

const productInfoContainer = document.querySelector('.info-container');
const modal = document.querySelector('#modal-wrapp');
const modalCancel = document.querySelector('#modal-cancel');
const modalSubmit = document.querySelector('#modal-buton');

function showProductsInfo(product) {
    productInfoContainer.innerHTML = '';

    const productTitle = document.createElement('h3');
    const productPrice = document.createElement('p');
    const productImg = document.createElement('img');
    const productDescription = document.createElement('p');
    const buyButton = document.createElement('button');

    productTitle.classList.add('product-title');
    productPrice.classList.add('product-price');
    productImg.classList.add('product-img');
    productDescription.classList.add('product-description');
    buyButton.classList.add('buy-button');

    productDescription.innerText = product.description;
    productPrice.innerText = product.price;
    productTitle.innerText = product.name;
    buyButton.innerText = 'Buy product';

    productImg.setAttribute('src', product.img);

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-info');

    productContainer.appendChild(productImg);
    productContainer.appendChild(productTitle);
    productContainer.appendChild(productDescription);
    productContainer.appendChild(productPrice);
    productContainer.appendChild(buyButton);

    productInfoContainer.appendChild(productContainer);

    buyButton.addEventListener('click', () => {
        toggleModalWindow();
    });

    modalCancel.addEventListener('click', () => {
        toggleModalWindow();
    });

    modalSubmit.addEventListener('click', () => {
        validateForm(product.name, product.price);
    });
}

function toggleModalWindow() {
    modal.classList.toggle('d-none');
}

function validateForm(productTitle, productPrice) {
    const fullName = document.querySelector('#fullName').value;
    const city = document.querySelector('#cities').value;
    const postOffice = document.querySelector('#postOffice').value;
    const payment = document.querySelector('#payment').value;
    const amount = document.querySelector('#amount').value;
    let date = new Date();
    date = date.toLocaleString();

    const requiredFields = [fullName, city, postOffice, payment, amount];
    const requiredFieldIds = ['#fullName', '#cities', '#postOffice', '#payment', '#amount'];

    let isValid = true;

    for (let i = 0; i < requiredFields.length; i++) {
        if (!requiredFields[i]) {
            isValid = false;
            const fieldElement = document.querySelector(requiredFieldIds[i]);
            fieldElement.classList.add('error');
        }
    }

    const errorMessage = document.querySelector('.error-message');
    if (!isValid && !errorMessage) {
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.innerText = 'Please fill in all required fields!';

        const formContainer = document.querySelector('.modal');
        formContainer.appendChild(errorMessage);
    } else if (isValid && errorMessage) {
        errorMessage.remove();
    }

    if (isValid) {
        const addToLocalStorage = true;
        displayOrderDetails(fullName, city, postOffice, payment, amount, productTitle, productPrice, date, addToLocalStorage);
    }
}

function displayOrderDetails(fullName, city, postOffice, payment, amount, productTitle, productPrice, date, addToLocalStorage) {

    const orderedProduct = { fullName, city, postOffice, payment, amount, productTitle, productPrice, date };

    const body = document.querySelector('body');
    body.innerHTML = '';

    let detailsHTML = `<div class="details-wrapper">
    <h1 style="align:center; margin-bottom: 20px;">Order details:</h1>
    <p class="details"><strong>Name:</strong> ${fullName} </p>
    <p class="details"><strong>City:</strong> ${city} </p>
    <p class="details"><strong>Post office:</strong> ${postOffice} </p>
    <p class="details"><strong>Payment type:</strong> ${payment} </p>
    <p class="details"><strong>Amount:</strong> ${amount} </p>
    <p class="details"><strong>Product:</strong> ${productTitle} </p>
    <button id="done-btn">Done!</button>
    </div>`;

    body.innerHTML = detailsHTML;

    const doneButton = document.querySelector('#done-btn');

    if (addToLocalStorage) {
        doneButton.addEventListener('click', () => {
            addProductToLocalStorage(orderedProduct);
            window.location.reload();
        });
    } else {
        doneButton.addEventListener('click', () => {
            window.location.reload();
        });
    }
}

const LOCAL_STORAGE_ORDERED_PRODUCTS = 'orderedProducts';

function addProductToLocalStorage(orderedProduct) {
    const orderedProducts = localStorage.getItem(LOCAL_STORAGE_ORDERED_PRODUCTS);
    const updatedOrderedProducts = orderedProducts ? [orderedProduct, ...JSON.parse(orderedProducts)] : [orderedProduct];

    localStorage.setItem(LOCAL_STORAGE_ORDERED_PRODUCTS, JSON.stringify(updatedOrderedProducts));
}

const myOrdersButton = document.querySelector('.my-orders-button');

myOrdersButton.addEventListener('click', () => {
    showOrders();
});

function showOrders() {
    const body = document.querySelector('body');
    body.innerHTML = '';

    let orderedProducts = localStorage.getItem(LOCAL_STORAGE_ORDERED_PRODUCTS);
    orderedProducts = JSON.parse(orderedProducts);

    let detailsHTML = '';

    if (orderedProducts) {
        detailsHTML += '<img id="back-img" src="./images/back.svg" alt="back image">';

        orderedProducts.forEach(product => {
            let price = parseFloat(product.productPrice);

            detailsHTML += `<div class="details-wrapper">
            <h1 style="align:center; margin-bottom: 20px;">Order details:</h1>
            <p class="details"><strong>Product:</strong> ${product.productTitle} </p>
            <p class="details"><strong>Amount:</strong> ${product.amount} </p>
            <p class="details"><strong>Total price:</strong> ${price * product.amount}$ </p>
            <p class="details"><strong>Date:</strong> ${product.date} </p>
            <p class="more-link">SHOW MORE</p>
          </div>`;

            body.innerHTML = detailsHTML;

            const moreLink = document.querySelectorAll('.more-link');

            moreLink.forEach((link, index) => {
                link.addEventListener('click', () => {
                    const clickedProduct = orderedProducts[index];
                    displayOrderDetails(
                        clickedProduct.fullName,
                        clickedProduct.city,
                        clickedProduct.postOffice,
                        clickedProduct.payment,
                        clickedProduct.amount,
                        clickedProduct.productTitle,
                        clickedProduct.productPrice,
                        clickedProduct.date
                    );
                });
            });
        });


        const backImg = document.querySelector('#back-img');

        backImg.addEventListener('click', () => {
            window.location.reload();
        });

    } else {
        detailsHTML = `
        <div class="no-products-wrapper">
            <h1 class="no-products">Oops, no products ordered!</h1>
            <button id="back-btn">Back shopping</button>
        </div>`;

        body.innerHTML = detailsHTML;

        const backButton = document.querySelector('#back-btn');
        backButton.addEventListener('click', () => {
            window.location.reload();
        });
    }
}