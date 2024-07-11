export default class Card {
    createCard(elem) {
        const columnItem = document.createElement('li');
        const columnWrapper = document.createElement('div');
        const columnItemHover = document.createElement('div');
        const columnInput = document.createElement('input');

        columnItem.classList.add('column__item');
        columnWrapper.classList.add('column__wrapper');
        columnItemHover.classList.add('column__item-hover');
        columnInput.classList.add('column__item-input');

        columnInput.placeholder = 'Enter a title for this card';

        columnItem.prepend(columnWrapper);
        columnItem.prepend(columnInput);
        columnWrapper.append(columnItemHover);
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
