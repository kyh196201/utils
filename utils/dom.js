// 엘리먼트 높이 설정
const setElementHeight = (element, value) => {
	if(element instanceof HTMLElement && typeof value === 'number') {
		element.style.setProperty('height', `${value}px`, 'important');
	}
};