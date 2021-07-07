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
	return valueAverage;
}

/**
 *función que verfica sí  un numero es par o no
 * @param {*} p_number, un valor entero
 * @returns true: si  es par, false: si no es par
 */
function isEven(p_number) {
	let responseIsEven;
	if (p_number % 2 === 0) {
		responseIsEven = true;
	} else {
		responseIsEven = false;
	}
	console.log({ responseIsEven, p_number });
	return responseIsEven;
}

/**
 * Ordena una lista de números enteros ascendentemente
 * @param {*} p_list lista de números enteros
 */
function orderList(p_list) {
	// ordena lista de salarios
	p_list.sort(function (a, b) {
		return a - b;
	});
	return p_list;
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

	return resultMedian;
}

const inputResultListSalarys = document.getElementById(
	'inputResultListSalarys'
);
const inputResultMedianSalary = document.getElementById(
	'inputResultMedianSalary'
);

const SALARY_LIST = [100, 200, 500, 700];

let mediana = arithmeticMedian(SALARY_LIST);

inputResultListSalarys.innerText = `${SALARY_LIST}`;
inputResultMedianSalary.innerText = `${mediana}`;
