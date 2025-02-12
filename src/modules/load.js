import getData from "./getData";
import renderGoods from "./renderGoods";

const load = () => {
    getData().then((data) => {
        renderGoods(data); // передает полученные данные в виде .JSON в функцию renderGoods()
    });
};

export default load;