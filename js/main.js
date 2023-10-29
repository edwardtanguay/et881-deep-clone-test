import * as tools from './tools.js';

const appElem = document.querySelector('#app');

// first object
const obj1 = {
	firstName: 'Hans',
	age: 45,
	scores: [1, 2, 3, 4, 5],
	config: {
		login: 'hans',
		passwords: {
			first: '111',
			second: '222',
			third: '333'
		}
	}
};

// copy/clone object
const obj2 = tools.getClone(obj1);

// change copy/clone
obj2.firstName = 'new';
obj2.age = 0;
obj2.scores = [0, 0, 0];
obj2.config.login = 'new';
obj2.config.passwords.first = 'new';
obj2.config.passwords.second = 'new';
obj2.config.passwords.third = 'new';

appElem.innerHTML = `
<h2>obj1</h2>
<pre>
${JSON.stringify(tools.getClone(obj1), null, 2)}
</pre>
<h2>obj2</h2>
<pre>
${JSON.stringify(tools.getClone(obj2), null, 2)}
</pre>
`;