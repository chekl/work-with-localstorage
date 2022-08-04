function visitLink(path) {
	let num = +localStorage.getItem(path) ? +localStorage.getItem(path) : 0;
	localStorage.setItem(path, ++num);
}

function viewResults() {
	let list = document.createElement('ul');
	let val1 = document.createElement('li');
	let val2 = document.createElement('li');
	let val3 = document.createElement('li');
	list.appendChild(val1);
	list.appendChild(val2);
	list.appendChild(val3);
	let page = [localStorage.getItem('Page1'), localStorage.getItem('Page2'), localStorage.getItem('Page3')];
	let text = document.createTextNode('You visited Page1' +' '+ page[0] + ' time(s)');
	let text2 = document.createTextNode('You visited Page2' +' '+ page[1] + ' time(s)');
	// eslint-disable-next-line no-magic-numbers
	let text3 = document.createTextNode('You visited Page3' +' '+ page[2] + ' time(s)');
	val1.appendChild(text);
	val2.appendChild(text2);
	val3.appendChild(text3);

	let element = document.getElementById('content');
	element.appendChild(list);
	localStorage.clear();
}