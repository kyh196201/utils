// https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

// format ISO string to YYYY-MM-DD
// parseISO(new Date().toISOString());
function parseISO(d = '') {
	return d.substring(0, 10);
}