//#region Array
const isArray = value => {
	return Array.isArray(value);
};

const isEmptyArray = value => {
	return isArray(value) && !!value.length;
};
//#endregion

//#region Object
const isObject = value => {
	return typeof value === 'object' && value !== null;
};
//#endregion

//#region String
// https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript
const isString = value => {
	return typeof value === 'string' || value instanceof String;
};
//#endregion