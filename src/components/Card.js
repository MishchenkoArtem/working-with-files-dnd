export default class Card {
    addCard(item) {
        const columnItem = document.createElement('li');
        const columnItemHover = document.createElement('div');

        columnItem.classList.add('column__item');
        columnItemHover.classList.add('column__item-hover');

        columnItem.append(columnItemHover);
        item[0].append(columnItem);
    }

    removeCard(item) {
        const parentElement = item.closest('.column__item');
        parentElement.remove();
    }
}
