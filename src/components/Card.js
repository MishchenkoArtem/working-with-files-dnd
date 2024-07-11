export default class Card {
    createCard(elem) {
        const columnItem = document.createElement('li');
        const columnWrapper = document.createElement('div');
        const columnText = document.createElement('p');
        const columnItemHover = document.createElement('div');

        columnItem.classList.add('column__item');
        columnWrapper.classList.add('column__wrapper');
        columnItemHover.classList.add('column__item-hover');
        columnText.classList.add('column__text');

        columnItem.prepend(columnWrapper);
        columnWrapper.prepend(columnText);
        columnWrapper.append(columnItemHover);
        elem.appendChild(columnItem);
    }

    renderCard(item) {
        this.createCard(item);
    }

    removeCard(item) {
        const parentElement = item.closest('.column__item');
        parentElement.remove();
    }
}
