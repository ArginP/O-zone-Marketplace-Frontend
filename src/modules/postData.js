const postData = (cart) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // метод отправки данных на сервер
        body: JSON.stringify(cart), // тело запроса, будет из массива преобразовано в строку с помощью JSON.stringify
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // заголовки для сервера
        },
    })
        .then(response => response.json()); // переведет полученный ответ от сервера в структуру .JSON
};

export default postData;