function imparesNormal() {
	var impar = 1;
	return impar;
	impar += 2;
	return impar;
}

console.log(imparesNormal());
console.log(imparesNormal());

console.log("------------------");

function* impares() {
	var impar = 1;
	yield impar;
	impar += 2;
	return impar;
}

const generadorImpares = impares();

console.log(generadorImpares.next(2));
console.log(generadorImpares.next());
console.log(generadorImpares.next());
console.log(generadorImpares.next());

function* log() {
	console.log("Inicio");
	console.log("%s", yield);
}

const l = log();
let r = l.next("VALOR NEXT 1");
console.log(r);
r = l.next("VALOR NEXT 2");
console.log(r)

function getGenerator(parametro) {
	return (function* () {
		let inicio = parametro;
		while (true) {
			yield inicio++
		}
	})
}

let miContador = getGenerator(10000)();
console.log(miContador.next().value);
console.log(miContador.next().value);
console.log(miContador.next().value);