import { alerts } from './icons.js';

function onScroll() {
	handleShownElement();
}

function addHeaders() {
	let index = 0;
	const nav = document.getElementById('header-navigation');
	const list = document.createElement('ul');

	const headers = document.querySelectorAll('section h1,h2,h3,h4,h5,h6');

	let currentList = list;
	let lastNesting = 0;

	for (let header of headers) {
		header.id = `header-${index}`;

		const nesting = parseInt(header.tagName[1]);

		if (lastNesting && lastNesting != nesting) {
			let currentNesting = nesting;
			if (nesting > lastNesting) {
				while (currentNesting > lastNesting) {
					const listItem = document.createElement('li');
					const nestedList = document.createElement('ul');

					listItem.appendChild(nestedList)
					currentList.appendChild(listItem);
					currentList = nestedList;
					currentNesting--;
				}
			}
			else {
				while (currentNesting < lastNesting) {
					currentList = currentList.parentElement.parentElement;
					currentNesting++;
				}
			}
		}

		const item = document.createElement('li');
		const link = document.createElement('a');

		link.innerHTML = header.innerHTML;
		link.href = `#${header.id}`;
		link.addEventListener('click', function (e) {
			window.onscroll = null;
			selectedHeader = null;
			e.preventDefault();
			header.scrollIntoView({ behavior: 'smooth' });
			history.pushState({}, '', `#${header.id}`);

			document.getElementsByClassName('selected-header')[0]?.classList.remove('selected-header');
			link.classList.add('selected-header');
		});
		link.id = `header-nav-${index++}`;

		item.appendChild(link);
		currentList.appendChild(item);

		lastNesting = nesting;
	}

	nav.appendChild(list);
	nav.querySelector('li').classList.add('selected-header');
}

function addAlerts() {
	const alertElements = [...document.querySelectorAll('blockquote>p')]
		.filter(nota => nota.innerHTML.startsWith('[!'));

	const alertTypes = {
		note: 'Note',
		tip: 'Tip',
		important: 'Important',
		warning: 'Warning',
		caution: 'Caution',
	};

	for (let alert of alertElements) {
		const elementText = alert.innerHTML;

		const regex = /\[!(.*?)\]\n(.*)/;
		const matches = elementText.match(regex);

		const matchType = matches[1].toLowerCase();
		const alertText = matches[2].trim();

		alert.innerHTML = `${notas[matchType]}${alertTypes[matchType].toUpperCase()}`;

		const textElement = document.createElement('p');
		textElement.innerHTML = alertText;
		alert.parentNode.appendChild(textElement);
		alert.parentNode.classList.add('alert', matchType);
	}
}

window.onload = function () {
	addAlerts();
	addHeaders();
	handleShownElement();
	window.onscroll = onScroll;
}

let selectedHeader;

function handleShownElement() {
	var elements = [...document.querySelectorAll('section h1,h2,h3,h4,h5,h6')];
	var screenMiddlePoint = window.innerHeight / 2;

	const filteredElements = elements.filter(e => e.getBoundingClientRect().bottom <= screenMiddlePoint);
	const shownElement = filteredElements.reduce(function (res, obj) {
		let condition;
		const resThreshold = res.getBoundingClientRect().bottom;
		const objThreshold = obj.getBoundingClientRect().bottom;
		const topThreshold = 75;

		if (window.scrollY < topThreshold) {
			condition = resThreshold >= objThreshold;
		}
		else {
			condition = resThreshold < objThreshold;
		}

		return condition ? obj : res;
	});

	if (shownElement) {
		const id = shownElement.id.slice(-1);
		document.getElementsByClassName('selected-header')[0]?.classList.remove('selected-header');

		selectedHeader = document.getElementById(`header-nav-${id}`);
		selectedHeader?.classList.add('selected-header');
	}
}

window.onscrollend = function () {
	selectedHeader?.scrollIntoView({ behavior: 'smooth' });
	selectedHeader = null;

	if (!window.onscroll) {
		window.onscroll = onScroll;
	}
}
