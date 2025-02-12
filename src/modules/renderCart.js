const renderCart = (goods) => { // получает список товаров из функции getData()
    const cartWrapper = document.querySelector('.cart-wrapper');
    // находит контейнер сетки товаров по классу .goods

    cartWrapper.innerHTML = ''; // очищает контейнер модального окна корзины перед заполнением

    if(goods.length === 0) {
        cartWrapper.insertAdjacentHTML('beforeend', `
            <div id="cart-empty">
                Ваша корзина пока пуста
            </div>
        `);
    } else {
        goods.forEach((item) => {
            // выполняет внедрение HTML разметки для каждого элемента, полученного от функции openCartModal()
            // .insertAdjacentHTML внедряет код в интерполяционных кавычках (второй аргумент) на позицию,
            // определенную первым аргументом (т.е. перед концом элемента с классом .cart-wrapper)
            cartWrapper.insertAdjacentHTML('beforeend', `
            <div class="card" data-key="${item.id}">
                ${item.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                <div class="card-img-wrapper">
                    <span class="card-img-top" 
                    style="background-image: url('${item.img}')"></span>
                </div>
                <div class="card-body justify-content-between">
                    <div class="card-price">${item.price} ₽</div>
                    <h5 class="card-title">${item.title}</h5>
                    <button class="btn btn-primary">Убрать</button>
                </div>
            </div>
        `);
            // ссылки ${item.} обращаются к элементу объекта, по названию этого элемента
            // тернарник item.sale ? 'выведет этот код' : '', если item.sale = true
        });
    }
};

export default renderCart;