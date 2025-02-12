import getData from "./getData";
import renderGoods from "./renderGoods";
import {categoryFilter} from "./filters";

const catalog = () => {
    const catalogButton = document.querySelector(".catalog-button > button");
    const catalogModal = document.querySelector(".catalog");
    const catalogModalItem = document.querySelectorAll(".catalog li");
    // выбирает все элементы li внутри родительского элемента с классом catalog

    let isOpen = false; // Костыль переключения окна на открыто/закрыто. Лучше реализовать через toggle

    catalogButton.addEventListener("click", (event) => {
        isOpen = !isOpen; // при каждом клике на кнопку переключает между true и false

        if(isOpen) {
            catalogModal.style.display = "block";
        } else {
            catalogModal.style.display = "";
        }
    });

    catalogModalItem.forEach((item) => {
        item.addEventListener("click", (event) => {
            const text = item.textContent;

            getData().then((data) => {
                renderGoods(categoryFilter(data, text)); // передает полученные в виде .JSON данные
                // и text выбранного фильтра в функцию categoryFilter()
                // отфильтрованные по text данные передаются в renderGoods()
            });
        });
    });
};

export default catalog;