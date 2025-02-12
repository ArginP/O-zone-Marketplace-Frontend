import getData from "./getData";
import renderGoods from "./renderGoods";
import {categoryFilter} from "./filters";

const catalog = () => {
    const catalogButton = document.querySelector(".catalog-button > button");
    const catalogModal = document.querySelector(".catalog");
    const catalogModalItem = document.querySelectorAll(".catalog li");
    // выбирает все элементы li внутри родительского элемента с классом catalog

    let isOpen = false; // Костыль для переключения окна на открыто/закрыто

    const catalogModalSwitch = () => {
        isOpen = !isOpen; // при исполнении переключает между true и false

        if(isOpen) {
            catalogModal.style.display = "block";
        } else {
            catalogModal.style.display = "";
        }
    };

    catalogButton.addEventListener("click", () => {
        catalogModalSwitch();
    });

    catalogModalItem.forEach((item) => {
        item.addEventListener("click", () => {
            const text = item.textContent;

            getData().then((data) => {
                renderGoods(categoryFilter(data, text)); // передает полученные в виде .JSON данные
                // и text выбранного фильтра в функцию categoryFilter()
                // отфильтрованные по text данные передаются в renderGoods()
            });
            catalogModalSwitch(); // закроет окно каталога
        });
    });
};

export default catalog;