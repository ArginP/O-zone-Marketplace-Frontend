const postData = () => {
    return fetch('http://localhost:3000/goods', {
        method: 'POST', // метод отправки данных на сервер
        body: JSON.stringify({ // тело запроса, будет из объекта преобразовано в строку с помощью JSON.stringify
            title: "Ведьмак 3",
            price: 3000,
            sale: true,
            img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
            category: "Игры и софт"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // заголовки для сервера
        },
    })
        .then(response => response.json()); // переведет полученный ответ от сервера в структуру .JSON
};

export default postData;