export default class Card {
    createCard(elem) {
        const columnItem = document.createElement('li');
        const columnItemHover = document.createElement('div');

        columnItem.classList.add('column__item');
        columnItemHover.classList.add('column__item-hover');

        columnItem.append(columnItemHover);
        elem.appendChild(columnItem);
    }

    addCard(item) {
        this.createCard(item);
    }

    removeCard(item) {
        const parentElement = item.closest('.column__item');
        parentElement.remove();
    }
}
