/**
 *  función que se encarga de cálcular la raíz para cualquier
 *  índice
 * @param {*} number: representa el radicando, de la raíz
 * @param {*} n: representa el índice
 * @returns
 */
function rootForAnyIndex(number, n) {
	let result = 0;
	// si los los parámetros son distintos de número retorna null
	if (typeof number !== 'number' || typeof n !== 'number') {
		return null;
	}
	// cálculo para números negativos no está definido
	if (number < 0) {
		return undefined;
	}
	result = Math.pow(number, 1 / n);
	return result;
}

/**
 *función encargada de cálcular el factor de crecimiento (growthFactor)
  de un valor porcentual
 * @param {*} p_list: lista porcentuales de ventas
 * @returns
 */
function growthFactor(p_list) {
	let listGrowFactor = p_list.map(function (value) {
		value = 1 + value / 100;
		return value;
	});
	console.group('growthFactor');
	console.log(listGrowFactor);
	console.groupEnd();
	return listGrowFactor;
}

/**
 *
 * @param {*} p_list
 * @returns
 */
function geometricAverage(p_list) {
	console.group('geometricAverage');
	let n = 0;
	let resultMultiplication = 0;
	let resultGeometricAverage = 0;

	//se obtiene el índece  de la raíz
	n = p_list.length;
	// se múltiplca los factores de crecimiento
	resultMultiplication = p_list.reduce(function (
		valueAcumulate,
		currentValue
	) {
		return parseFloat(valueAcumulate * currentValue);
	});

	//se cálcula el valor de la raíz
	resultGeometricAverage = rootForAnyIndex(resultMultiplication, n);

	return resultGeometricAverage;
}

const inputListAnnualPercentageOfSales = document.getElementById(
	'inputListAnnualPercentageOfSales'
);
const inputResulGeometricAverage = document.getElementById(
	'inputResulGeometricAverage'
);

const listSalesPercentageAnual = [26, 32, 28];

const resultGrowFactor = growthFactor(listSalesPercentageAnual);
const resultGeometricAverage = geometricAverage(resultGrowFactor);

// Se muestra los resultados en la página html
inputListAnnualPercentageOfSales.innerText = `${listSalesPercentageAnual} %`;
inputResulGeometricAverage.innerText = `${resultGeometricAverage}`;
