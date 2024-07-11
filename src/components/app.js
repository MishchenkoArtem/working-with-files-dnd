import { page, buttonAddCard, columnList, popup } from './constans';
import Card from './Card';

const card = new Card();
let columnItemHover;

document.addEventListener("DOMContentLoaded", () => {
    
    // --- Слушатель отображения корзины на карточке
    page.addEventListener('mouseover', (event) => {
        const target = event.target;
    
        if (target.className === 'column__item') 
        {
            columnItemHover = target.querySelector('.column__item-hover');
            columnItemHover.style.visibility = 'visible';
        }
    
        if (target.className === 'column__text') 
        {
            columnItemHover.style.visibility = 'visible';
        }

        if (target.className === 'column__wrapper') 
        {
            columnItemHover.style.visibility = 'visible';
        }

        if (target.className === 'column__item-input') 
        {
            columnItemHover.style.visibility = 'visible';
        }
    
        if (target.className === 'column__item-hover') 
        {
            const columnItemHover = target;
            columnItemHover.style.visibility = 'visible';
        }
    });
    
    // --- Слушатель скрытие корзины на карточке
    page.addEventListener('mouseout', (event) => {
        const target = event.target;
    
        if (target.className === 'column__item-hover') return;
    
        if (target.className === 'column__item') 
        {
            const columnItemHover = target.querySelector('.column__item-hover');
            columnItemHover.style.visibility = 'hidden';
        }

        if (target.className === 'column__wrapper') 
        {
            columnItemHover.style.visibility = 'visible';
        }
    
        if (target.className === 'column__text') 
        {
            columnItemHover.style.visibility = 'hidden';
        }
    });
    
    const changeButtonDefault = (button) => {
        button.classList.remove('column__button_active');
        button.textContent = 'Add another card';

        const columnButtonImage = document.createElement('span');
        columnButtonImage.classList.add('column__button-image');
        button.prepend(columnButtonImage);
    }

    const changeButtonActive = (button) => {
        button.classList.add('column__button_active');
        button.querySelector('.column__button-image').remove();
        button.textContent = 'Add card';
    }

    // --- Слушатель добавления новой карточки
    buttonAddCard.forEach(button => {
        button.addEventListener('click', () => {
            columnList.forEach(elem => {
                if (button.dataset.button === elem.dataset.column) {
                    if (button.className === 'column__button') 
                        {
                            elem.append(popup);
                            popup.classList.add('popup_opened');
                            changeButtonActive(button);
                        }
                    else if (button.classList.contains('column__button_active')) 
                        {
                            changeButtonDefault(button);
                            popup.classList.remove('popup_opened');
                        }
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

    // let actualElement;

    // columnList.forEach(elem => {
    //     elem.addEventListener('mousedown', (event) => {
    //         event.preventDefault();

    //         actualElement = event.target.closest('li');
    //         actualElement.classList.add('page__dragged');
    //         actualElement.style.cursor = 'grab';

    //         page.addEventListener('mousemove', moveElement);
    //         page.addEventListener('mouseup', mouseUpElement);
    //     });
    // });

    // const moveElement = (event) => {
    //     actualElement.style.top = `${event.clientY}px`;
    //     actualElement.style.left = `${event.clientX}px`;
    // }

    // const mouseUpElement = (event) => {
    //     const parentElement = actualElement.parentNode;

    //     parentElement.prepend(actualElement);

    //     actualElement.classList.remove('page__dragged');
    //     actualElement = undefined;
    //     page.removeEventListener('mousemove', moveElement);
    //     page.removeEventListener('mouseup', mouseUpElement);
    // }
});
