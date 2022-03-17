/**
 * https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
 * 이메일 validation 체크
 * 
 * https://github.com/dream-ellie/regex
 * 
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

/**
 * 핸드폰, 전화번호 검증
 * @param {string} phone 
 * @returns {boolean}
 */
function validatePhone(phone = '') {
	const regex = /[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;

	return regex.test(phone);
}

/**
 * 숫자, 한글, 영어 대/소문자 제외한 모든 문자 제거하기
 * https://eblee-repo.tistory.com/40
 * @param {string} string 
 * @returns {string}
 */
function removeExceptNumberAndKoreanAndAlphabet(string = '') {
	const regex = /[^\da-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]/gm;

	return string.replace(regex, '');
}

/**
 * 
 * @param {Event | InputEvent | KeyboardEvent} event
 */
const handleInput = (event) => {
	const replacedString = removeExceptNumberAndKoreanAndAlphabet(event.target.value);
	event.target.value = replacedString;
};

/**
 * 하나 이상의 영어(대/소문자), 숫자, 특수문자(_)를 포함하고, 길이가 6 ~ 20자인지 체크하는 정규식
 * @returns {Regexp} : 정규식
 * 
 * daplus.net/javascript-암호에-대한-정규식은-8-자-이상-하나-이상의-숫자/
 * 
 * @TODO 이름 수정
 */
function getSpecialRegex() {
	const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*_)[a-zA-Z\d_]{6,20}$/;

	// 위 케이스에서 하나 이상의 영어 대, 소문자를 각각 하나 이상 포함해야하는 케이스
	// const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*_)[a-zA-Z\d_]{6,20}$/;

	return regex;
}