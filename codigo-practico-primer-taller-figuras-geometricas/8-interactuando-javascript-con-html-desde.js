//===========================
//==Obteniendo los inputs de html==
//===========================

//===========================
//      ==Cuadrado==
//===========================

const input_cuadradoLado = document.getElementById('input_cuadradoLado');
const input_respCuadradoArea = document.getElementById(
	'input_respCuadradoArea'
);
const input_respCuadradoPerimetro = document.getElementById(
	'input_respCuadradoPerimetro'
);

function fn_cuadradoPerimetro(p_cuadradoLado) {
	return p_cuadradoLado * 4;
}

function fn_cuadradoArea(p_cuadradoLado) {
	return p_cuadradoLado * p_cuadradoLado;
}

function fn_calcularCuadradoPerimetro() {
	const cuadradoLado = parseFloat(input_cuadradoLado.value);
	const cuadradoPerimetro = fn_cuadradoPerimetro(cuadradoLado);

	input_respCuadradoPerimetro.value = cuadradoPerimetro;

	console.group('Cuadrado');
	console.log('Los lados del cuadro mide : ' + cuadradoLado + 'cm');
	console.log('El perímetro del cuadro mide : ' + cuadradoPerimetro + 'cm');
}

function fn_calcularCuadradoArea() {
	const cuadradoLado = parseFloat(input_cuadradoLado.value);
	const cuadradoArea = fn_cuadradoArea(cuadradoLado);

	input_respCuadradoArea.value = cuadradoArea;

	console.log('El área del cuadro mide : ' + cuadradoArea + 'cm^2');
	console.groupEnd();
}

//===========================
//      ==Triángulo==
//===========================

const input_trianguloLadoA = document.getElementById('input_trianguloLadoA');
const input_trianguloLadoB = document.getElementById('input_trianguloLadoB');
const input_trianguloBase = document.getElementById('input_trianguloBase');
const input_trianguloAltura = document.getElementById('input_trianguloAltura');
const input_respTrianguloArea = document.getElementById(
	'input_respTrianguloArea'
);
const input_respTrianguloPerimetro = document.getElementById(
	'input_respTrianguloPerimetro'
);

function fn_trainguloPerimetro(
	p_trainguloLadoA,
	p_trainguloLadoB,
	p_trainguloBase
) {
	return p_trainguloLadoA + p_trainguloLadoB + p_trainguloBase;
}

function fn_trianguloArea(p_trianguloBase, p_trianguloAltura) {
	return (p_trianguloBase * p_trianguloAltura) / 2;
}

function fn_calcularTrianguloPerimetro() {
	const trianguloLadoA = parseFloat(input_trianguloLadoA.value);
	const trianguloLadoB = parseFloat(input_trianguloLadoB.value);
	const trinaguloBase = parseFloat(input_trianguloBase.value);

	const trianguloPerimetro = fn_trainguloPerimetro(
		trianguloLadoA,
		trianguloLadoB,
		trinaguloBase
	);

	input_respTrianguloPerimetro.value = trianguloPerimetro;

	console.group('Triángulo');
	console.log('El lado A del triángulo a mide: ' + trianguloLadoA + 'cm,');
	console.log('El lado B del triángulo b mide: ' + trianguloLadoB + 'cm,');
	console.log('La base o lado C del triángulo mide: ' + trinaguloBase + 'cm');
	console.log(
		'El perímetro del triángulo mide: ' + trianguloPerimetro + 'cm'
	);
}

function fn_calcularTrianguloArea() {
	const trinaguloBase = parseFloat(input_trianguloBase.value);
	const trianguloAltura = parseFloat(input_trianguloAltura.value);

	const trianguloArea = fn_trianguloArea(trinaguloBase, trianguloAltura);

	input_respTrianguloArea.value = trianguloArea;

	console.log('La altura del triángulo mide: ' + trianguloAltura + 'cm');
	console.log('El area triángulo mide: ' + trianguloArea + 'cm^2');
	console.groupEnd();
}

//===========================
//      ==Círculo==
//===========================

const input_circuloPI = document.getElementById('input_circuloPI');
const input_circuloRadio = document.getElementById('input_circuloRadio');
const input_respCirculoArea = document.getElementById('input_respCirculoArea');
const input_respCirculoPerimetro = document.getElementById(
	'input_respCirculoPerimetro'
);
const PI = Math.PI;

input_circuloPI.value = PI;

function fn_circuloPerimetro(p_circuloRadio) {
	return 2 * p_circuloRadio * PI;
}

function fn_circuloArea(p_circuloRadio) {
	return p_circuloRadio * p_circuloRadio * PI;
}

function fn_calcularCirculoPerimetro() {
	const circuloRadio = parseFloat(input_circuloRadio.value);
	const circuloPerimetro = fn_circuloPerimetro(circuloRadio);

	input_respCirculoPerimetro.value = parseFloat(circuloPerimetro);

	console.group('Círculo');
	console.log('La constante PI es de: ' + PI);
	console.log('El radio del círculo mide ' + circuloRadio + 'cm');
	console.log('El diametro del circulo es : ' + circuloPerimetro + 'cm');
}

function fn_calcularCirculoArea() {
	const circuloRadio = parseFloat(input_circuloRadio.value);
	const circuloArea = fn_circuloArea(circuloRadio);

	input_respCirculoArea.value = parseFloat(circuloArea);

	console.log('El área círculo mide: ' + circuloArea + 'cm^2');
	console.groupEnd();
}
