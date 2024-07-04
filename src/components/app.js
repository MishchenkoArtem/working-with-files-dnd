import { page, buttonAddCard, columnList, columnItemHover } from './constans';
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
    buttonAddCard.forEach(element => {
        element.addEventListener('click', () => {
            const card = new Card();
            card.addCard(columnList);
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

    let draggedEl;
    let ghostEl;
    
    const onMouseOver = (event) => {
        actualElement.style.top = event.clientY + 'px';
        actualElement.style.left = event.clientX + 'px';
    }
    
    const onMouseUp = (event) => {
        const mouseUpItem = event.target;

        columnList[0].insertBefore(actualElement, mouseUpItem);
        actualElement.classList.remove('page__dragged');
        actualElement = null;
        page.removeEventListener('mouseup', onMouseUp);
        page.removeEventListener('mouseover', onMouseOver);
    };

    columnList[0].addEventListener('mousedown', (event) => {
        event.preventDefault();

        if (event.target.className.includes('column__item')) {
            return;
        }

        draggedEl = event.target;
        ghostEl.event.target.cloneNode(true);
        ghostEl.classList.add('page__dragged');
        page.appendChild(ghostEl);
        ghostEl.style.top = `${evt.pageY - ghostEl.offset.Hidth /2}px}`;
        ghostEl.style.left = `${evt.pageX - ghostEl.offset.Width /2}px}`;
    });
});
