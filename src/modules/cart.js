import renderCart from "./renderCart";
import postData from "./postData";

const cart = () => {
    const cartButton = document.getElementById("cartButton");
    const cartModal = document.getElementById("cartModal");
    const cartCloseButton = document.getElementById("cartCloseButton");
    const cartTotal = document.querySelector(".cart-total > span");
    // Находим спан внутри элемента с классом .cart-total, в нем содержится сумма стоимости товаров в корзине
    const cartConfirmButton = document.querySelector(".cart-confirm");
    const goodsContainer = document.querySelector(".goods");
    const cartWrapper = document.querySelector(".cart-wrapper");
    const cartItemCount = document.querySelector(".counter");

// Функция для открытия модального окна корзины
    const openCartModal = () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        // В localStorage есть массив cart? Да - используем его, перепарсив из строки. Нет? Создаем пустой

        cartModal.style.display = "flex";
        // заменяет свойство display = "hidden" на display = "flex", чтобы корзина отображалась, и была в центре экрана

        renderCart(cart); // Функция отрисовки корзины

        cartTotal.textContent = cart.reduce((sum, goodItem) => { // метод перебора массива, будет суммировать элементы
            return sum + goodItem.price;
        }, 0); // 0 — начальное значение
    };

    const closeCartModal = () => {
        cartModal.style.display = ""; // закрывает корзину, возвращая значение по-умолчанию "hidden"
    };

    cartButton.addEventListener("click", openCartModal); // запускает функцию по обработчику событий клика
    cartCloseButton.addEventListener("click", closeCartModal);

// Делегированный обработчик события кликов по карточкам товаров
    goodsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-primary")) {
            const cardGood = event.target.closest(".card");
            // Находит ближайший к цели клика родительский элемент с классом .card
            const key = cardGood.dataset.key;
            // Получает значение data-key="${item.id}" из этого элемента
            const goods = JSON.parse(localStorage.getItem('goods'));
            // Получает массив товаров из localStorage, парсим строчку в массив
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            // В localStorage есть массив cart? Да - используем его, перепарсив из строки. Нет? Создаем пустой
            const goodItem = goods.find((item) => {
                return item.id === key;
            }); // Находим объект нужного товара в массиве по ключу ID, и возвращаем его
            // В массиве goods ID представлены в виде строк, а не чисел

            cart.push(goodItem); // Добавляет в массив push объект goodItem

            localStorage.setItem('cart', JSON.stringify(cart));
            // Записываем массив cart в localStorage в виде строки
            updateCartItemCount(); // Обновляет счетчик товаров в корзине
        }
    });

// Логика взаимодействия с модальным окном корзины, удаление товаров, подсчет суммы
    cartWrapper.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-primary")) {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const cardGood = event.target.closest(".card");
            const key = cardGood.dataset.key;
            const cartIndex = cart.findIndex(item => item.id === key);
            // Находит индекс целевого товара в массиве корзины

            cart.splice(cartIndex, 1); // Метод, который удаляет элемент по его индексу

            localStorage.setItem('cart', JSON.stringify(cart));

            renderCart(cart); // Перерисовывает поле товаров в корзине
            updateCartItemCount(); // Обновляет счетчик товаров в корзине
            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price;
            }, 0);
        }
    });

// Логика кнопки оформить заказ
    cartConfirmButton.addEventListener("click", () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

        if(cart.length !== 0) { // Проверяет, что в корзине есть товары
            postData(cart).then(() => { // отправить данные корзины на сервер, потом:
                localStorage.removeItem('cart'); // очистить массив корзины
                updateCartItemCount(); // Обновляет счетчик товаров в корзине

                cartTotal.textContent = '0'; // сумма товаров = 0
                cartWrapper.innerHTML = ''; // очистить поле корзины
                cartWrapper.insertAdjacentHTML('beforeend', `
            <div id="cart-empty">
                Спасибо за заказ!
            </div>`);
            });
        }
    });

// Обновление счетчика товаров в корзине
    const updateCartItemCount = () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        // Проверяем, если ли корзина, чтобы избежать ошибки cart = NULL
        cartItemCount.textContent = cart.length;
    };

    updateCartItemCount();
    // Первичный вызов при загрузке страницы, чтобы показывать актуальное количество товаров в корзине
};

export default cart;
