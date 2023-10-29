import * as tools from './js/tools.js';

// first object
const obj1 = {
	firstName: 'Hans',
	age: 45,
	scores: [1, 2, 3],
	config: {
		login: 'hans',
		passwords: {
			first: '111',
			second: '222',
			third: '333'
		}
	}
}

// copy/clone object
const obj2 = tools.getClone(obj1);

// change copy/clone
obj2.firstName = 'nnn';
obj2.age = 0;
obj2.scores[0] = 0;
obj2.scores[1] = 0;
obj2.scores[2] = 0;
obj2.config.login = 'new';
obj2.config.passwords.first = 'new';
obj2.config.passwords.second = 'new';
obj2.config.passwords.third = 'new';

// see if to what extent the original object was changed or not
console.log('obj1', obj1);
console.log('obj2', obj2);
