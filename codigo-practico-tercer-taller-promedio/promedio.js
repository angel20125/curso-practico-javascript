//
//          ==Media aritmética==
//
console.group('Media aritmética');

const inputResultListSalarys = document.getElementById(
	'inputResultListSalarys'
);
const inputResultAverageSalary = document.getElementById(
	'inputResultAverageSalary'
);

//lista de salarios
const SALARY_LIST = [100, 200, 500, 700];

// contiene la medira aritmética de salarios
let resultAverageSalary = 0;

// función que se encarga de calcular la media aritmética
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

resultAverageSalary = arithmeticAverage(SALARY_LIST);

console.log({
	resultAverageSalary,
});

inputResultListSalarys.innerText = `${SALARY_LIST}`;
inputResultAverageSalary.innerText = `${resultAverageSalary}`;

console.groupEnd();
inputResultAverageSalary.innerText = `${resultAverageSalary}`;
