/**
 *  función que ordena una lista de números enteros de forma ascendentemente
 * @param {*} p_list: array de números enteros
 * @returns p_list: array de nú
 */
function orderList(p_list) {
	// se crea una copia del array por parámetro
	const list = p_list.slice();
	// ordena lista de salarios
	list.sort(function (a, b) {
		return a - b;
	});
	console.group('Ordenando elementos');
	console.log(list);
	console.groupEnd();
	return list;
}

/**
 * función encargada de agrupar y  contar los elementos
 * @param {*} p_list: array de valores enteros
 * @returns  listGroup: un objeto con los valores enteros agrupados
 */
function groupList(p_list) {
	// se crea una copia del array por parámetro
	const list = p_list.slice();
	let listGroup = {};

	list.map(function (p_element) {
		if (listGroup[p_element]) {
			// si existe el grupo para el elemento que se desea agrupar
			//entonces se cuenta 1
			listGroup[p_element] += 1;
		} else {
			// si no existe el grupo para el elemento que se desea agrupar
			// entonces se  crea el grupo y se  inicializa la cuenta en 1
			listGroup[p_element] = 1;
		}
	});

	console.group('Agrupando elementos');
	console.log(listGroup);
	console.groupEnd();
	return listGroup;
}

/**
 * función encargada de calcular la moda
 * @returns moda: retorna valor que  más se repite
 */
function arithmeticModa() {
	let moda = 0;
	let valuesByCategories = {};
	let valuesByCategoriesToArray = [];

	// 1. Se grupan los elementos y se cuentan por categoría en un  objecto
	valuesByCategories = groupList(SALARY_LIST);
	// 2. Se convierte el la lista de objetos en un array
	valuesByCategoriesToArray = Object.entries(valuesByCategories);
	// 3.  Se ordena el array de mayor a menor según las veces
	// que se repite un elemento
	valuesByCategoriesToArray.sort(function (a, b) {
		return a[1] - b[1];
	});
	//4. finalmente la moda es el valor
	moda = valuesByCategoriesToArray[valuesByCategoriesToArray.length - 1];

	return parseInt(moda);
}

const inputResultModaSalary = document.getElementById('inputResultModaSalary');
const inputResultListSalarys = document.getElementById(
	'inputResultListSalarys'
);

const SALARY_LIST = [100, 200, 300, 100, 200, 300, 400, 200, 200, 200, 100];

// Se  muestran los resultados
inputResultListSalarys.innerText = `${SALARY_LIST}`;
inputResultModaSalary.innerText = `${moda}`;
