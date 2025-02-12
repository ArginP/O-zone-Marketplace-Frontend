export const debounce = (func, ms = 300) => {
    let timerID;
    // При вызове функции debounce создается таймер
    return (...args) => {
        clearTimeout(timerID);
        // Если до истечения таймера функция вызывается снова, то таймер сбрасывается
        timerID = setTimeout(() => func.apply(this, args), ms);
        // По окончании таймера исходная функция func возвращается в debounce со всеми исходными аргументами
        // Также можно вместе с функцией func передать кастомное время задержки в ms
    };
};
