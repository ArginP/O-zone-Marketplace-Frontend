const deleteData = () => {
    return fetch('http://localhost:3000/goods/de92', { // локальный JSON-Server
        method: 'DELETE',
        }) // Удалит из базы данных по адресу 'http://localhost:3000/' из массива под названием 'goods'
        // элемент с id='de92'
    .then(response => response.json()); // переведет полученные от сервера данные в структуру .JSON
};

export default deleteData;