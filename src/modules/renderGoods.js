const renderGoods = (goods) => { // получает список товаров из функции getData()
    const goodsWrapper = document.querySelector('.goods');
    // находит контейнер сетки товаров по классу .goods

    localStorage.setItem('goods', JSON.stringify(goods));
    // обращаемся к localStorage браузера, чтобы записать в него массив данных товаров в виде строки JSON

    goodsWrapper.innerHTML = ''; // очищаем контейнер сетки товара перед заполнением

    goods.forEach((item) => {
        // выполняет внедрение HTML разметки для каждого элемента, полученного от функции getData()
        // .insertAdjacentHTML внедряет код в интерполяционных кавычках (второй аргумент) на позицию,
        // определенную первым аргументом (т.е. перед концом элемента с классом .goods)
        goodsWrapper.insertAdjacentHTML('beforeend', `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card" data-key="${item.id}">
                ${item.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                <div class="card-img-wrapper">
                    <span class="card-img-top" 
                    style="background-image: url('${item.img}')"></span>
                </div>
                <div class="card-body justify-content-between">
                    <div class="card-price">${item.price} ₽</div>
                    <h5 class="card-title">${item.title}</h5>
                    <button class="btn btn-primary">В корзину</button>
                </div>
            </div>
        </div>
        `);
        // ссылки ${item.} обращаются к элементу объекта, по названию этого элемента
        // тернарник item.sale ? 'выведет этот код' : '', если item.sale = true
    });
};

export default renderGoods;