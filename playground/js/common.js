var {
	pow
} = Math;

function getRndStr(){
	var str = "$_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var result = str.split('').sort(() => (Math.random() - 0.5));

	return (result.join('')).substr(0,12);
}