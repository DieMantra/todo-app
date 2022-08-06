export const state = {
	list: [{ group: 'everything', items: [] }],
	selected: [],
};

export const addItemModel = function (item, groupName) {
	// 1) Create a new object for the new item
	const newObject = { group: groupName, items: [item] };

	// 2) Check if the group already exists in the list
	if (state.list.some((list) => list.group === groupName)) {
		// Find the group in the list
		state.list.find((list) => list.group === groupName).items.push(item);
	}

	// 3) If not, create a new group and add the item to it
	else state.list.push(newObject);
	saveState();
};

export const addGroupModel = function (groupName) {
	// 1) Create a new object for the new item
	const newObject = { group: groupName, items: [] };

	// 2) Check if the group already exists in the list
	if (state.list.some((list) => list.group === groupName))
		return alert('Group already exists');

	// 3) If not, create a new group
	state.list.push(newObject);
	saveState();
};

// Delete an item from the model
export const deleteItemModel = function (e) {
	const groupName = e.target.value.split('-')[0];
	const itemName = e.target.value.split('-')[1];
	const group = state.list.find((list) => list.group === groupName);
	const item = group.items.find((item) => item === itemName);
	group.items.splice(group.items.indexOf(item), 1);
	saveState();
};

// Delete group from the state
export const deleteGroupModel = function (e) {
	const newstate = state.list.filter((list) => list.group !== e.target.value);
	state.list = newstate;
	saveState();
};

// save state to local storage
export const saveState = function () {
	localStorage.setItem('todoList', JSON.stringify(state));
};

export const loadState = function () {
	const data = JSON.parse(localStorage.getItem('todoList'));
	if (data) state.list = data.list;
	// state.list = data.list;
	return state;
};

// clear local storage
const clearState = function () {
	localStorage.clear();
};

// clearState();
