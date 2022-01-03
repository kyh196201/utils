/**
 * 참고: https://joshua1988.github.io/web-development/javascript/javascript-interview-3questions/#%EC%A7%88%EB%AC%B8-3--%EB%94%94%EB%B0%94%EC%9A%B4%EC%8B%B1-debouncing
 */

// 이벤트를 감쌀 디바운싱 함수
function debounce(fn, delay = 250) {
	// 타이머 선언
	let timer = null;
	// 타이머 변수에 접근 가능한 클로져 함수
	return function () {
		// 클로져 함수 안에서 this 와 arguments 변수로 디바운싱 함수의 스코프와 변수를 접근한다.
		let context = this;
		let args = arguments;

		// 만약 이벤트가 호출되면 타이머를 초기화 하고 다시 시작한다.
		clearTimeout(timer);

		timer = setTimeout(function () {
			fn.apply(context, args);
		}, delay);
	};
}