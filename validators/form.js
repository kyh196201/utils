/**
 * https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
 * 이메일 validation 체크
 */
const validateEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const validateId = id => {
	// 6 ~ 20자 사이, 영어, 숫자 특수문자(_) 입력 가능.
	const regex = /[\w_]{6,20}/g;

	return regex.test(id);
}