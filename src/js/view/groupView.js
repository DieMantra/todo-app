import everythingIMG from 'url:../../assets/icon-everything.png';

// append new groups to dom

const renderMarkup = function (group) {
	return `
      <div class="group group__${group.toLowerCase()}">
         <div class="group__header">
            ${
							group.toLowerCase() === 'everything'
								? `<img src="${everythingIMG}" alt="" class="group__header--img" />`
								: ''
						} 
            <h3 class="group__header--header">${group.toUpperCase()}</h3>
				<button class="remove-button remove-group" value="${group.toLowerCase()}">Remove Group</button>
         </div>
         <ul class="group__list--${group.toLowerCase()}">
         </ul>
      </div> 
   `;
};

/**
 * Takes an array of groups and appends them to the DOM
 * const markup / maps over the array and returns a string of markup;
 * @param {Array} groups - an array of groups
 * @returns {undefined}
 */
export const renderNewGroup = function (array) {
	const parentElement = document.querySelector('.main-container');

	const markup = array.map((group) => renderMarkup(group.group)).join('');
	parentElement.innerHTML = '';
	parentElement.insertAdjacentHTML('afterbegin', markup);
};

// Show the new group modal
export const showGroupModal = function () {
	const modal = document.querySelector('.new-group__container');
	modal.style.visibility = 'visible';
	modal.style.opacity = '1';
};

// hide the new group modal
const closeModal = document.querySelector('.new-group__close-btn');
closeModal.addEventListener('click', function () {
	const modal = document.querySelector('.new-group__container');
	modal.style.visibility = 'hidden';
	modal.style.opacity = '0';
});
