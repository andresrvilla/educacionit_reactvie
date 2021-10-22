function imparesNormal (){
	var impar = 1;
	return impar;
	impar += 2;
	return impar;
}

console.log(imparesNormal());
console.log(imparesNormal());

console.log("------------------");

function* impares(a){
	console.log(`a: ${a}`);
	var impar = 1;
	yield impar;
	impar += 2;
	return impar;
}

const generadorImpares = impares();

console.log(generadorImpares.next());
console.log(generadorImpares.next());
console.log(generadorImpares.next());
console.log(generadorImpares.next());

