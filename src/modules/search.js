import getData from "./getData"; // импорт модуля
import renderGoods from "./renderGoods";
import {searchFilter} from "./filters"; // импорт отдельной функции
import {debounce} from "./helpers";

const search = () => {
    const searchInput = document.querySelector(".search-wrapper_input");

    const debouncedSearch = debounce((event) => {
        getData().then((data) => {
            renderGoods(searchFilter(data, event.target.value));
            // передает полученные данные в виде .JSON в функцию searchFilter()
            // также передает value поискового запроса
            // отфильтрованные по event.target.value данные передаются в renderGoods()
            // event.target - элемент, целью которого является действие input
            // event.target.value - содержит все данные, введенные пользователем при действии input
        });
    }, 600); // здесь передается кастомное время задержки дебаунсера

    searchInput.addEventListener("input", debouncedSearch);
    // по событию ввода в окно поиска, будет осуществляться функция debouncedSearch
};

export default search;