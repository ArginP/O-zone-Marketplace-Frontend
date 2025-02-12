// Фильтрация массива товаров по поисковому запросу
export const searchFilter = (goods, value) => {
    // экспортируем не как модуль, а как отдельную функцию
    // функция имеет доступ к массиву goods и значению окна поиска value
    return goods.filter((item) => {
        return item.title.toLowerCase().includes(value.toLowerCase());
        // фильтрует массив goods т.о., чтобы значение поля title каждого объекта, приведенное к нижнему кейсу,
        // содержало поисковой запрос value, также приведенный к нижнему кейсу
    });
};

// Фильтрация массива товаров по выбору категории
export const categoryFilter = (goods, text) => {
    return goods.filter((item) => {
        return item.category === text; // фильтрует массив goods т.о., чтобы значение поля category каждого объекта
        // соответствовало переданному значению фильтра text
    });
};

// Фильтрация массива товаров по диапазону цены
export const costFilter = (goods, min, max) => {
    return goods.filter((item) => {
        if(min === '' && max === '') {
            return item;
        } else if (min !== '' && max !== '') {
            return item.price >= +min && item.price <= +max; // +min — переводим значение min в число
            // сравниваем значение из объекта товара с фильтром, введенным пользователем
        } else if (min !== '' && max === '') {
            return item.price >= +min;
        } else if (min === '' && max !== '') {
            return item.price <= +max;
        }
    });
};

// Фильтрация по чекмарку акции
export const saleFilter = (goods, value) => {
    return goods.filter((item) => {
        if(value) {
            return item.sale === true;
        } else {
            return item;
        }
    });
};