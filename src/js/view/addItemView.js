export const showModal = function () {
	const modal = document.querySelector('.modal-container');
	modal.style.visibility = 'visible';
	modal.style.opacity = '1';
};

const closeModal = document.querySelector('.modal__hide-btn');

closeModal.addEventListener('click', function (e) {
	const modal = document.querySelector('.modal-container');
	modal.style.visibility = 'hidden';
	modal.style.opacity = '0';
});

// Add new groups to the select element
export const renderNewGroupOption = function (array) {
	const parentElement = document.querySelector('.add-item__select');
	const markup = array
		.map((group) => `<option value="${group.group}">${group.group}</option>`)
		.join('');
	parentElement.innerHTML = '';
	parentElement.insertAdjacentHTML('afterbegin', markup);
};
