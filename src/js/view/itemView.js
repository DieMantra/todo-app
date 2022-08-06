const renderMarkup = function (item, groupName) {
	return `<li class="group__list--item">${item}<button class="remove-button remove-item" value="${groupName}-${item}">Remove Item</button></li>`;
};

export const renderItem = function (array, groupName) {
	const el = `.group__list--${groupName}`;
	const groupUl = document.querySelector(el);
	groupUl.innerHTML = '';
	if (array.length <= 0) return;
	const markup = array.map((item) => renderMarkup(item, groupName)).join('');

	// clear the old markup

	// append the new markup
	groupUl.insertAdjacentHTML('afterbegin', markup);
};
