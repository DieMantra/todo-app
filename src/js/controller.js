import {
	addGroupModel,
	addItemModel,
	deleteGroupModel,
	deleteItemModel,
	loadState,
	state,
} from './model.js';
import { renderNewGroupOption, showModal } from './view/addItemView.js';
import { renderNewGroup, showGroupModal } from './view/groupView.js';
import { renderItem } from './view/itemView.js';

const header = document.querySelector('.header');
const formElement = document.querySelector('.add-item__form');
const newGroupForm = document.querySelector('.new-group__form');

header.addEventListener('click', function (e) {
	if (e.target.closest('.header__new-item')) showModal();
	if (e.target.closest('.header__new-group')) showGroupModal();
	else return;
});

formElement.addEventListener('submit', function (e) {
	e.preventDefault();

	// Gathering all inputs from the form
	const input = e.target.querySelector('.add-item__input');
	const group = e.target.querySelector('.add-item__select');
	const inputValue = input.value;
	const groupValue = group[group.selectedIndex].value;

	// Adding new item to the model
	addItemModel(inputValue, groupValue);

	// Resetting the form
	input.value = '';

	// Add new item to the view
	addingItem();
});

// new group add

newGroupForm.addEventListener('submit', function (e) {
	e.preventDefault();
	const groupInput = document.querySelector('.new-group__input');
	if (groupInput.value === '') return;
	const groupName = new FormData(newGroupForm);

	// add new group to the model / state
	for (const [_, value] of groupName) {
		addGroupModel(value);
	}

	// reset the form
	groupInput.value = '';

	// Render New Groups
	renderNewGroup(state.list);

	// Add new item to the view
	addingItem();

	// Add new delete buttons
	removeGroupItem();

	// Render the new group options to the select element
	renderNewGroupOption(state.list);
});

const addingItem = function () {
	// Add new item to the view
	state.list.forEach((list) => {
		renderItem(list.items, list.group);
	});

	removeListItem();
	removeGroupItem();
};

const removeListItem = function () {
	const removeItem = document.querySelectorAll('.remove-item');
	removeItem.forEach((button) => {
		button.addEventListener('click', function (e) {
			deleteItemModel(e);
			addingItem();
		});
	});
};

const removeGroupItem = function () {
	const deleteGroupButton = document.querySelectorAll('.remove-group');
	deleteGroupButton.forEach((button) => {
		button.addEventListener('click', function (e) {
			deleteGroupModel(e);
			renderNewGroupOption(state.list);
			renderNewGroup(state.list);
			addingItem();
		});
	});
};
removeGroupItem();

// remove group
// const removeGroup = function ()

// wait for page to load and check for localstorage
window.addEventListener('load', function () {
	const thisState = loadState();
	if (!thisState) return;

	// Render New Groups
	renderNewGroup(state.list);

	addingItem();

	renderNewGroupOption(state.list);
});
