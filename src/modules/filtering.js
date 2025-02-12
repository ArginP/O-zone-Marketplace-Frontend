import renderGoods from "./renderGoods";
import getData from "./getData";
import {costFilter, saleFilter} from "./filters";


export const filtering = () => {
// Передача данных из полей диапазона цены в фильтр и отрисовка карточек
    const minCostInput = document.getElementById("min");
    const maxCostInput = document.getElementById("max");

    // обработчики событий ввода данных в поля фильтрации по цене
    minCostInput.addEventListener("input", () => {
        getData().then((data) => {
            renderGoods(costFilter(saleFilter(data, saleCheckbox.checked), minCostInput.value, maxCostInput.value));
            // передает введенные пользователем данные диапазона фильтрации в costFilter()
            // и отрисовывает отфильтрованные товары через renderGoods()
        });
    });

    maxCostInput.addEventListener("input", () => {
        getData().then((data) => {
            renderGoods(costFilter(saleFilter(data, saleCheckbox.checked), minCostInput.value, maxCostInput.value));
            // "saleFilter(data, saleCheckbox.checked)" внутри costFilter(), чтобы оба фильтра работали совместно
        });
    });

// Функционал галочки Акция
    const saleCheckbox = document.getElementById("discount-checkbox");
    // input type="checkbox", который обернут лейблом (считает клики по лейблу)
    const saleFilterCheckmark = document.querySelector(".filter-check_checkmark");
    // Галочка

    // Переключатель стилей для отображения нажато/отжато
    saleCheckbox.addEventListener("change", () => {
        if (saleCheckbox.checked) { // если галочка стоит в поле Акция
            saleFilterCheckmark.classList.add("checked");
        } else {
            saleFilterCheckmark.classList.remove("checked");
        }

        getData().then((data) => {
            renderGoods(costFilter(saleFilter(data, saleCheckbox.checked), minCostInput.value, maxCostInput.value));
        });
    });
};