import * as tools from './js/tools.js';

// first object
const obj1 = {
	firstName: 'Hans',
	age: 45,
	scores: [1, 2, 3, 4, 5],
	config: {
		login: 'hans',
		password: 'hans123'
	}
}

// copy/clone object
const obj2 = tools.getClone(obj1);

// change copy/clone
obj2.firstName = 'nnn';
obj2.age = 0;
obj2.scores = [0, 0, 0];
obj2.config = {
	login: 'nnn',
	password: 'nnn'
}

// see if to what extent the original object was changed or not
console.log('obj1', obj1);
console.log('obj2', obj2);
