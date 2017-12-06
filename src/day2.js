module.exports = function day2(input) {
	let result;
	
	const splitted = input.split(/[\n]+/)
	const rows = splitted.map( row => {
		const numbers = row.split(/[\t]+/);
		const max = Math.max(...numbers);
		const min = Math.min(...numbers);
		return max-min;
	});
	
	result = rows.reduce( (acc, val) => acc + val, 0);

	return result;
}