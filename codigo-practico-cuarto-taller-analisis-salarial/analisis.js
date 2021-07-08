//          ===Helpers or Utils===
/**
 *función que verfica sí  un numero es par o no
 * @param {*} p_number, un valor entero
 * @returns true: si  es par,
 *          false: si no es par
 */
function isEven(p_number) {
	result = p_number % 2 === 0;

	console.group('isEven');
	console.log({
		result,
	});
	console.groupEnd();

	return result;
}

/**
 * Ordena una lista de números enteros ascendentemente
 * @param {*} p_list lista de números enteros
 */
function orderList(p_list) {
	// ordena lista de salarios
	const listOrdered = p_list.sort(function (a, b) {
		return a - b;
	});
	return listOrdered;
}
////////////////////////////////

//          ===Mediana===
/**
 * Función encargada de calcular el la media aritmética
 * @param {*} p_list,  recibe un lista de numeros enteros
 * @returns  valueAverage , promedio
 */
function arithmeticAverage(p_list) {
	let valueAcum = 0;
	let valueAverage = 0;

	// Realiza la sumatorias de valores
	valueAcum = p_list.reduce(function (valueAcumulate = 0, valueCurrent) {
		return valueAcumulate + valueCurrent;
	});

	// realiza el calculo de la media aritmética
	valueAverage = valueAcum / p_list.length;

	console.group('arithmeticAverage');
	console.log({
		valueAverage,
	});
	console.groupEnd();

	return valueAverage;
}

/**
 *Calcular la mediana
 * @param {*} p_list:
 * @returns resultMedian: Mediana
 */
function arithmeticMedian(p_list) {
	let valueA = 0;
	let valueB = 0;
	let resultMedian = 0;
	// Se obtiene  la mitad de la lista
	const midList = parseInt(p_list.length / 2);
	// Se Ordena la lista
	p_list = orderList(p_list);

	if (isEven(p_list.length)) {
		// si el tamaño de la lista es par, entonces:
		// se toma el valor de la mitad de la lista
		// y un valor anterior para sacar el promedio
		valueA = p_list[midList - 1];
		valueB = p_list[midList];
		resultMedian = arithmeticAverage([valueA, valueB]);
	} else {
		// Si lista de elementos es impar:
		// se retorna el elemento de la mitad de la lista
		resultMedian = p_list[midList];
	}

	console.group('arithmeticMedian');
	console.log({
		midList,
		resultMedian,
	});
	console.log(p_list);
	console.groupEnd();

	return resultMedian;
}

/**
 * función se encarga de retornar el top 10%  de persona que más gana
 * @param {*} listSorted: recibe una lista ordenada
 * @returns medianaTop10: una lista del top 10 % de los que más ganan
 */
function arithmeticMedianTop10(listSorted) {
	listSorted = orderList(listSorted);
	const valueStart = (listSorted.length * 90) / 100;
	const valueEnd = listSorted.length - valueStart;

	let listTop10 = listSorted.splice(valueStart, valueEnd);

	let medianaTop10 = arithmeticMedian(listTop10);

	console.group('arithmeticMedianTop10');
	console.log(listSorted);
	console.log({
		valueStart,
		valueEnd,
		medianaTop10,
	});
	console.log(listTop10);
	console.groupEnd();

	return medianaTop10;
}

// se obtiene los salarios de la lista
let listOnlySalaryColombia = colombia.map(function (person) {
	return person.salary;
});

let medianaSalarialGeneralColombia = 0;
let medianaSalarialTop10Colombia = 0;

medianaSalarialGeneralColombia = arithmeticMedian(listOnlySalaryColombia);
medianaSalarialTop10Colombia = arithmeticMedianTop10(listOnlySalaryColombia);

console.group('Result');
console.log({
	medianaSalarialGeneralColombia,
	medianaSalarialTop10Colombia,
});
console.groupEnd();
