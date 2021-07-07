const notes = [
	{
		course: 'Educación Física',
		note: 10,
		credit: 2,
	},
	{
		course: 'Programación',
		note: 8,
		credit: 5,
	},
	{
		course: 'Finanzas personales',
		note: 7,
		credit: 5,
	},
];

//Multiplicar cada número de la lista por su peso
const notesWithCredit = notes.map(function (noteObject) {
	return noteObject.note * noteObject.credit;
});

// Sumar todos los elementos del arreglo de elementos multiplicados por su peso
const sumOfNotesWithCredit = notesWithCredit.reduce(function (sum = 0, newVal) {
	return sum + newVal;
});

// Se obtiene  la suma total de los créditos
const credits = notes.map(function (noteObject) {
	return noteObject.credit;
});

// Sumar todos los pesos (créditos)
const sumOfCredits = credits.reduce(function (sum = 0, newVal) {
	return sum + newVal;
});

// Hacer la división entre ambas “sumas”
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

//obtener elementos html
const inputResultListNotes = document.getElementById('inputResultListNotes');
const inputResultWeightedAverage = document.getElementById(
	'inputResultWeightedAverage'
);

const showListNotes = function (p_listCourses) {
	for (const asignature of p_listCourses) {
		inputResultListNotes.innerText += `-----------------------------\n`;
		inputResultListNotes.innerText += `curso: ${asignature.course} \n`;
		inputResultListNotes.innerText += `nota: ${asignature.note} \n`;
		inputResultListNotes.innerText += `crédito: ${asignature.credit}\n`;
	}
};

const showListWeightedAverage = function () {
	inputResultWeightedAverage.innerText = ` ${promedioPonderadoNotasConCreditos}`;
};

//  muestra la información en la página web
showListNotes(notes);
showListWeightedAverage();

console.group('Notas');
console.log('notesWithCredit: ' + notesWithCredit);
console.log('sumOfNotesWithCredit: ' + sumOfNotesWithCredit);
console.groupEnd();

console.group('Creditos');
console.log('credits: ' + credits);
console.log('sumOfCredits: ' + sumOfCredits);
console.groupEnd();

console.group('Promedio Ponderado');
console.log('Promedio Ponderado: ' + promedioPonderadoNotasConCreditos);
console.groupEnd();
