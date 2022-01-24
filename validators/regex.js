/**
 * https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
 * 이메일 validation 체크
 */
function validateEmail(email = '') {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

// 6 ~ 20자 사이, 영어, 숫자 특수문자(_) 입력 가능한 아이디 검증
function validateId(id = '') {
	const regex = /^[\w_]{6,20}$/g; // /^([a-zA-Z0-9_]){6,20}$/g;

	return regex.test(id);
}

// 빈 문자열이 아닌지 체크
function validateNotEmpty(string = '') {
	return /\S/.test(string);
};

// 숫자로만 이루어진 문자열인지 체크
function isOnlyNumberString(string = '') {
	const regex = /^\d+$/;
	return regex.test(string);
};

// 숫자를 제외한 모든 문자 제거
// https://bobbyhadz.com/blog/javascript-remove-all-characters-except-numbres
function removeExceptNumbers(string = '') {
	return string.replace(/[^\d]/g, '');
}