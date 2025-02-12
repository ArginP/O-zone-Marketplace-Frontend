/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filtering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filtering */ \"./src/modules/filtering.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_filtering__WEBPACK_IMPORTED_MODULE_4__.filtering)();\r\n\n\n//# sourceURL=webpack://o-zone/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\n\r\nconst cart = () => {\r\n    const cartButton = document.getElementById(\"cartButton\");\r\n    const cartModal = document.getElementById(\"cartModal\");\r\n    const cartCloseButton = document.getElementById(\"cartCloseButton\");\r\n    const cartTotal = document.querySelector(\".cart-total > span\");\r\n    // Находим спан внутри элемента с классом .cart-total, в нем содержится сумма стоимости товаров в корзине\r\n    const cartConfirmButton = document.querySelector(\".cart-confirm\");\r\n    const goodsContainer = document.querySelector(\".goods\");\r\n    const cartWrapper = document.querySelector(\".cart-wrapper\");\r\n\r\n    const openCartModal = () => {\r\n        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\r\n        // В localStorage есть массив cart? Да - используем его, перепарсив из строки. Нет? Создаем пустой\r\n\r\n        cartModal.style.display = \"flex\";\r\n        // заменяет свойство display = \"hidden\" на display = \"flex\", чтобы корзина отображалась, и была в центре экрана\r\n\r\n        (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart); // Функция отрисовки корзины\r\n\r\n        cartTotal.textContent = cart.reduce((sum, goodItem) => { // метод перебора массива, будет суммировать элементы\r\n            return sum + goodItem.price;\r\n        }, 0); // 0 — начальное значение\r\n    };\r\n\r\n    const closeCartModal = () => {\r\n        cartModal.style.display = \"\"; // закрывает корзину, возвращая значение по-умолчанию \"hidden\"\r\n    };\r\n\r\n    cartButton.addEventListener(\"click\", openCartModal); // запускает функцию по обработчику событий клика\r\n    cartCloseButton.addEventListener(\"click\", closeCartModal);\r\n\r\n// Делегированный обработчик события кликов по карточкам товаров\r\n    goodsContainer.addEventListener(\"click\", (event) => {\r\n        if (event.target.classList.contains(\"btn-primary\")) {\r\n            const cardGood = event.target.closest(\".card\");\r\n            // Находит ближайший к цели клика родительский элемент с классом .card\r\n            const key = cardGood.dataset.key;\r\n            // Получает значение data-key=\"${item.id}\" из этого элемента\r\n            const goods = JSON.parse(localStorage.getItem('goods'));\r\n            // Получает массив товаров из localStorage, парсим строчку в массив\r\n            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\r\n            // В localStorage есть массив cart? Да - используем его, перепарсив из строки. Нет? Создаем пустой\r\n            const goodItem = goods.find((item) => {\r\n                return item.id === key;\r\n            }); // Находим объект нужного товара в массиве по ключу ID, и возвращаем его\r\n            // В массиве goods ID представлены в виде строк, а не чисел\r\n\r\n            cart.push(goodItem); // Добавляем в массив push объект goodItem\r\n\r\n            localStorage.setItem('cart', JSON.stringify(cart));\r\n            // Записываем массив cart в localStorage в виде строки\r\n        }\r\n    });\r\n\r\n// Логика взаимодействия с модальным окном корзины, удаление товаров, подсчет суммы\r\n    cartWrapper.addEventListener(\"click\", (event) => {\r\n        if (event.target.classList.contains(\"btn-primary\")) {\r\n            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\r\n            const cardGood = event.target.closest(\".card\");\r\n            const key = cardGood.dataset.key;\r\n            const cartIndex = cart.findIndex(item => item.id === key);\r\n            // Находит индекс целевого товара в массиве корзины\r\n\r\n            cart.splice(cartIndex, 1); // Метод, который удаляет элемент по его индексу\r\n\r\n            localStorage.setItem('cart', JSON.stringify(cart));\r\n\r\n            (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n            cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n                return sum + goodItem.price;\r\n            }, 0);\r\n        }\r\n    });\r\n\r\n// Логика кнопки оформить заказ\r\n    cartConfirmButton.addEventListener(\"click\", (event) => {\r\n        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\r\n\r\n        if(cart.length !== 0) { // Проверяет, что в корзине есть товары\r\n            (0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => { // отправить данные корзины на сервер, потом:\r\n                localStorage.removeItem('cart'); // очистить массив корзины\r\n\r\n                cartTotal.textContent = '0'; // сумма товаров = 0\r\n\r\n                cartWrapper.innerHTML = ''; // очистить поле корзины\r\n                cartWrapper.insertAdjacentHTML('beforeend', `\r\n            <div id=\"cart-empty\">\r\n                Спасибо за заказ!\r\n            </div>`);\r\n            });\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n    const catalogButton = document.querySelector(\".catalog-button > button\");\r\n    const catalogModal = document.querySelector(\".catalog\");\r\n    const catalogModalItem = document.querySelectorAll(\".catalog li\");\r\n    // выбирает все элементы li внутри родительского элемента с классом catalog\r\n\r\n    let isOpen = false; // Костыль переключения окна на открыто/закрыто. Лучше реализовать через toggle\r\n\r\n    catalogButton.addEventListener(\"click\", (event) => {\r\n        isOpen = !isOpen; // при каждом клике на кнопку переключает между true и false\r\n\r\n        if(isOpen) {\r\n            catalogModal.style.display = \"block\";\r\n        } else {\r\n            catalogModal.style.display = \"\";\r\n        }\r\n    });\r\n\r\n    catalogModalItem.forEach((item) => {\r\n        item.addEventListener(\"click\", (event) => {\r\n            const text = item.textContent;\r\n\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text)); // передает полученные в виде .JSON данные\r\n                // и text выбранного фильтра в функцию categoryFilter()\r\n                // отфильтрованные по text данные передаются в renderGoods()\r\n            });\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://o-zone/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filtering.js":
/*!**********************************!*\
  !*** ./src/modules/filtering.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filtering: () => (/* binding */ filtering)\n/* harmony export */ });\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\n\r\nconst filtering = () => {\r\n// Передача данных из полей диапазона цены в фильтр и отрисовка карточек\r\n    const minCostInput = document.getElementById(\"min\");\r\n    const maxCostInput = document.getElementById(\"max\");\r\n\r\n    // обработчики событий ввода данных в поля фильтрации по цене\r\n    minCostInput.addEventListener(\"input\", () => {\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.costFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, saleCheckbox.checked), minCostInput.value, maxCostInput.value));\r\n            // передает введенные пользователем данные диапазона фильтрации в costFilter()\r\n            // и отрисовывает отфильтрованные товары через renderGoods()\r\n        });\r\n    });\r\n\r\n    maxCostInput.addEventListener(\"input\", () => {\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.costFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, saleCheckbox.checked), minCostInput.value, maxCostInput.value));\r\n            // \"saleFilter(data, saleCheckbox.checked)\" внутри costFilter(), чтобы оба фильтра работали совместно\r\n        });\r\n    });\r\n\r\n// Функционал галочки Акция\r\n    const saleCheckbox = document.getElementById(\"discount-checkbox\");\r\n    // input type=\"checkbox\", который обернут лейблом (считает клики по лейблу)\r\n    const saleFilterCheckmark = document.querySelector(\".filter-check_checkmark\");\r\n    // Галочка\r\n\r\n    // Переключатель стилей для отображения нажато/отжато\r\n    saleCheckbox.addEventListener(\"change\", () => {\r\n        if (saleCheckbox.checked) { // если галочка стоит в поле Акция\r\n            saleFilterCheckmark.classList.add(\"checked\");\r\n        } else {\r\n            saleFilterCheckmark.classList.remove(\"checked\");\r\n        }\r\n\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.costFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, saleCheckbox.checked), minCostInput.value, maxCostInput.value));\r\n        });\r\n    });\r\n};\n\n//# sourceURL=webpack://o-zone/./src/modules/filtering.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),\n/* harmony export */   costFilter: () => (/* binding */ costFilter),\n/* harmony export */   saleFilter: () => (/* binding */ saleFilter),\n/* harmony export */   searchFilter: () => (/* binding */ searchFilter)\n/* harmony export */ });\n// Фильтрация массива товаров по поисковому запросу\r\nconst searchFilter = (goods, value) => {\r\n    // экспортируем не как модуль, а как отдельную функцию\r\n    // функция имеет доступ к массиву goods и значению окна поиска value\r\n    return goods.filter((item) => {\r\n        return item.title.toLowerCase().includes(value.toLowerCase());\r\n        // фильтрует массив goods т.о., чтобы значение поля title каждого объекта, приведенное к нижнему кейсу,\r\n        // содержало поисковой запрос value, также приведенный к нижнему кейсу\r\n    });\r\n};\r\n\r\n// Фильтрация массива товаров по выбору категории\r\nconst categoryFilter = (goods, text) => {\r\n    return goods.filter((item) => {\r\n        return item.category === text; // фильтрует массив goods т.о., чтобы значение поля category каждого объекта\r\n        // соответствовало переданному значению фильтра text\r\n    });\r\n};\r\n\r\n// Фильтрация массива товаров по диапазону цены\r\nconst costFilter = (goods, min, max) => {\r\n    return goods.filter((item) => {\r\n        if(min === '' && max === '') {\r\n            return item;\r\n        } else if (min !== '' && max !== '') {\r\n            return item.price >= +min && item.price <= +max; // +min — переводим значение min в число\r\n            // сравниваем значение из объекта товара с фильтром, введенным пользователем\r\n        } else if (min !== '' && max === '') {\r\n            return item.price >= +min;\r\n        } else if (min === '' && max !== '') {\r\n            return item.price <= +max;\r\n        }\r\n    });\r\n};\r\n\r\n// Фильтрация по чекмарку акции\r\nconst saleFilter = (goods, value) => {\r\n    return goods.filter((item) => {\r\n        if(value) {\r\n            return item.sale === true;\r\n        } else {\r\n            return item;\r\n        }\r\n    });\r\n};\n\n//# sourceURL=webpack://o-zone/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\r\n    return fetch('https://test-1de47-default-rtdb.europe-west1.firebasedatabase.app/goods.json')\r\n        // Получит из базы данных все данные массива под названием 'goods'\r\n        .then(response => response.json()); // переведет полученные от сервера данные в структуру .JSON\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://o-zone/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: () => (/* binding */ debounce)\n/* harmony export */ });\nconst debounce = (func, ms = 300) => {\r\n    let timerID;\r\n    // При вызове функции debounce создается таймер\r\n    return (...args) => {\r\n        clearTimeout(timerID);\r\n        // Если до истечения таймера функция вызывается снова, то таймер сбрасывается\r\n        timerID = setTimeout(() => func.apply(undefined, args), ms);\r\n        // По окончании таймера исходная функция func возвращается в debounce со всеми исходными аргументами\r\n        // Также можно вместе с функцией func передать кастомное время задержки в ms\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://o-zone/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\nconst load = () => {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data); // передает полученные данные в виде .JSON в функцию renderGoods()\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://o-zone/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = (cart) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n        method: 'POST', // метод отправки данных на сервер\r\n        body: JSON.stringify(cart), // тело запроса, будет из массива преобразовано в строку с помощью JSON.stringify\r\n        headers: {\r\n            'Content-type': 'application/json; charset=UTF-8', // заголовки для сервера\r\n        },\r\n    })\r\n        .then(response => response.json()); // переведет полученный ответ от сервера в структуру .JSON\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://o-zone/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => { // получает список товаров из функции getData()\n    const cartWrapper = document.querySelector('.cart-wrapper');\n    // находит контейнер сетки товаров по классу .goods\n\n    cartWrapper.innerHTML = ''; // очищает контейнер модального окна корзины перед заполнением\n\n    if(goods.length === 0) {\n        cartWrapper.insertAdjacentHTML('beforeend', `\n            <div id=\"cart-empty\">\n                Ваша корзина пока пуста\n            </div>\n        `);\n    } else {\n        goods.forEach((item) => {\n            // выполняет внедрение HTML разметки для каждого элемента, полученного от функции openCartModal()\n            // .insertAdjacentHTML внедряет код в интерполяционных кавычках (второй аргумент) на позицию,\n            // определенную первым аргументом (т.е. перед концом элемента с классом .cart-wrapper)\n            cartWrapper.insertAdjacentHTML('beforeend', `\n            <div class=\"card\" data-key=\"${item.id}\">\n                ${item.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\n                <div class=\"card-img-wrapper\">\n                    <span class=\"card-img-top\" \n                    style=\"background-image: url('${item.img}')\"></span>\n                </div>\n                <div class=\"card-body justify-content-between\">\n                    <div class=\"card-price\">${item.price} ₽</div>\n                    <h5 class=\"card-title\">${item.title}</h5>\n                    <button class=\"btn btn-primary\">Убрать</button>\n                </div>\n            </div>\n        `);\n            // ссылки ${item.} обращаются к элементу объекта, по названию этого элемента\n            // тернарник item.sale ? 'выведет этот код' : '', если item.sale = true\n        });\n    }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n//# sourceURL=webpack://o-zone/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => { // получает список товаров из функции getData()\r\n    const goodsWrapper = document.querySelector('.goods');\r\n    // находит контейнер сетки товаров по классу .goods\r\n\r\n    localStorage.setItem('goods', JSON.stringify(goods));\r\n    // обращаемся к localStorage браузера, чтобы записать в него массив данных товаров в виде строки JSON\r\n\r\n    goodsWrapper.innerHTML = ''; // очищаем контейнер сетки товара перед заполнением\r\n\r\n    goods.forEach((item) => {\r\n        // выполняет внедрение HTML разметки для каждого элемента, полученного от функции getData()\r\n        // .insertAdjacentHTML внедряет код в интерполяционных кавычках (второй аргумент) на позицию,\r\n        // определенную первым аргументом (т.е. перед концом элемента с классом .goods)\r\n        goodsWrapper.insertAdjacentHTML('beforeend', `\r\n        <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n            <div class=\"card\" data-key=\"${item.id}\">\r\n                ${item.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                <div class=\"card-img-wrapper\">\r\n                    <span class=\"card-img-top\" \r\n                    style=\"background-image: url('${item.img}')\"></span>\r\n                </div>\r\n                <div class=\"card-body justify-content-between\">\r\n                    <div class=\"card-price\">${item.price} ₽</div>\r\n                    <h5 class=\"card-title\">${item.title}</h5>\r\n                    <button class=\"btn btn-primary\">В корзину</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        `);\r\n        // ссылки ${item.} обращаются к элементу объекта, по названию этого элемента\r\n        // тернарник item.sale ? 'выведет этот код' : '', если item.sale = true\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://o-zone/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n // импорт модуля\r\n\r\n // импорт отдельной функции\r\n\r\n\r\nconst search = () => {\r\n    const searchInput = document.querySelector(\".search-wrapper_input\");\r\n\r\n    const debouncedSearch = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.debounce)((event) => {\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, event.target.value));\r\n            // передает полученные данные в виде .JSON в функцию searchFilter()\r\n            // также передает value поискового запроса\r\n            // отфильтрованные по event.target.value данные передаются в renderGoods()\r\n            // event.target - элемент, целью которого является действие input\r\n            // event.target.value - содержит все данные, введенные пользователем при действии input\r\n        });\r\n    }, 600); // здесь передается кастомное время задержки дебаунсера\r\n\r\n    searchInput.addEventListener(\"input\", debouncedSearch);\r\n    // по событию ввода в окно поиска, будет осуществляться функция debouncedSearch\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://o-zone/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;