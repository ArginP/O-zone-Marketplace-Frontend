const getData = () => {
    return fetch('https://test-1de47-default-rtdb.europe-west1.firebasedatabase.app/goods.json')
        // Получит из базы данных все данные массива под названием 'goods'
        .then(response => response.json()); // переведет полученные от сервера данные в структуру .JSON
};

export default getData;