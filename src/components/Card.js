import { template, popup } from './constans.js';

export default class Card {
    createCard(elem, value) {
        const item = template.content.cloneNode(true);
        const itemText = item.querySelector('.column__text');
        
        itemText.textContent = value;
        
        elem.appendChild(item);
    }

    renderCard(item, value) {
        this.createCard(item, value);

        const popupInput = popup.querySelector('.popup__input');
        popupInput.value = '';
    }

    removeCard(item) {
        const parentElement = item.closest('.column__item');
        parentElement.remove();
    }
}
