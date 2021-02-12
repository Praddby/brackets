module.exports = function check(str, bracketsConfig) {
  if (str.length === 0 || str.length === 1) return false;
	
	let breacks = '';
	let stackBreack = [];
	
	for(let i=0; i < bracketsConfig.length; i++) {
		breacks += bracketsConfig[i].join('');
	}
	
	for (let i=0; i < str.length; i++) {
		let indexBreack = breacks.indexOf(str[i])
		if (indexBreack === -1) {
			return false;
		}
		if (breacks[indexBreack] === breacks[indexBreack+1]) {
			if (indexBreack === stackBreack[stackBreack.length-1]) {
				stackBreack.pop()
			} else {
				stackBreack.push(indexBreack)
			}
		} else	if (indexBreack % 2 === 0) {
			stackBreack.push(indexBreack+1)
		} else {
			if (stackBreack.pop() !== indexBreack) {
				return false;
			}
		}
	}
	
	return stackBreack.length ? false : true;
}
