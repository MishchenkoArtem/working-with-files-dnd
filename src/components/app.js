import { page, buttonAddCard, columnList, columnItemHover, actualElement } from './constans';
import Card from './Card';

document.addEventListener("DOMContentLoaded", () => {
    
    // --- Слушатель отображения корзины на карточке
    page.addEventListener('mouseover', (event) => {
        const target = event.target;
    
        if (target.className === 'column__item') {
            const columnItemHover = target.children[0];
            columnItemHover.style.visibility = 'visible';
        }
    
        if (target.className === 'column__text') {
            const columnItemHover = target.previousElementSibling;
            columnItemHover.style.visibility = 'visible';
        }
    
        if (target.className === 'column__item-hover') {
            const columnItemHover = target;
            columnItemHover.style.visibility = 'visible';
        }
    });
    
    
    // --- Слушатель скрытие корзины на карточке
    page.addEventListener('mouseout', (event) => {
        const target = event.target;
    
        if (target.className === 'column__item-hover') return;
    
        if (target.className === 'column__item') {
            const columnItemHover = target.children[0];
            columnItemHover.style.visibility = 'hidden';
        }
    
        if (target.className === 'column__text') {
            const columnItemHover = target.previousElementSibling;
            columnItemHover.style.visibility = 'hidden';
        }
    });
    
    // --- Слушатель добавления новой карточки
    buttonAddCard.forEach(button => {
        button.addEventListener('click', () => {
            const card = new Card();

            columnList.forEach(elem => {
                if (button.dataset.button === elem.dataset.column) {
                    card.addCard(elem);
                }
            });
        });
    });
    
    // --- Слушатель удаления карточки
    page.addEventListener('click', (event) => {
        const target = event.target;
    
        if (target.className === 'column__item-hover') {
            const card = new Card();
            card.removeCard(target);
        }
    });

    columnList.forEach(elem => {
        elem.addEventListener('mousedown', (event) => {
            event.preventDefault();

            actualElement = event.target.closest('li');
            actualElement.classList.add('page__dragged');
        });
    });

    page.addEventListener('mousemove', (event) => {
        console.log(event);
    });
});
