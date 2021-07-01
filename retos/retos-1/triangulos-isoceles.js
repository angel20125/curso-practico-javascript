//===========================
//      ==Triángulo Isocéles==
//===========================

const input_trianguloIsocelesLadoA = document.getElementById(
	'input_trianguloIsocelesLadoA'
);
const input_trianguloIsocelesLadoB = document.getElementById(
	'input_trianguloIsocelesLadoB'
);
const input_trianguloIsocelesBase = document.getElementById(
	'input_trianguloIsocelesBase'
);
const input_respTrianguloIsocelesAltura = document.getElementById(
	'input_respTrianguloIsocelesAltura'
);
const input_respTrianguloIsocelesArea = document.getElementById(
	'input_respTrianguloIsocelesArea'
);
const input_respTrianguloIsocelesPerimetro = document.getElementById(
	'input_respTrianguloIsocelesPerimetro'
);

// se iniciliza los campos
input_trianguloIsocelesLadoA.value = 0;
input_trianguloIsocelesLadoB.value = 0;
input_trianguloIsocelesBase.value = 0;
input_respTrianguloIsocelesAltura.value = 0;
input_respTrianguloIsocelesArea.value = 0;
input_respTrianguloIsocelesPerimetro.value = 0;

// Muestra el mensaje error
function fn_mostrarError(p_mostrarMensaje = false) {
	const error = document.getElementById('error');
	if (p_mostrarMensaje) {
		error.style.display = 'inline-block';
	} else {
		error.style.display = 'none';
	}
}

//valida  si  el triángulo es isocéles
function fn_esIsoceles(p_trianguloLadoA, p_trianguloLadoB, p_trianguloBase) {
	if (p_trianguloLadoA !== p_trianguloLadoB) {
		return false;
	} else if (
		p_trianguloLadoA === p_trianguloBase ||
		p_trianguloLadoB === p_trianguloBase
	) {
		return false;
	} else if (
		p_trianguloLadoA === 0 ||
		p_trianguloLadoB === 0 ||
		p_trianguloBase === 0
	) {
		return false;
	} else if (
		p_trianguloLadoA === p_trianguloLadoB &&
		p_trianguloBase !== p_trianguloLadoA &&
		p_trianguloBase !== p_trianguloLadoB
	) {
		return true;
	}
	return false;
}

// Función que encuentra un lado de un triángulo rectángulo
function fn_encontrarUnLado(ladoA, ladoBase) {
	let ladoB = 0;

	ladoA = ladoA ** 2;
	ladoBase = ladoBase ** 2;
	ladoB = Math.abs(ladoA - ladoBase);
	ladoB = Math.sqrt(ladoB);

	return ladoB;
	// referencia : https://www.youtube.com/watch?v=7zWtpaz_yl0
}

function fn_trianguloIsocelesArea(p_trianguloBase, p_trinaguloIsocelesAltura) {
	return (p_trianguloBase * p_trinaguloIsocelesAltura) / 2;
}

function fn_trainguloIsocelesPerimetro(
	p_trainguloLadoA,
	p_trainguloLadoB,
	p_trainguloBase
) {
	return p_trainguloLadoA + p_trainguloLadoB + p_trainguloBase;
}

function fn_calcularTrianguloIsocelesAltrura() {
	const trianguloLadoA = parseFloat(input_trianguloIsocelesLadoA.value);
	const trianguloLadoB = parseFloat(input_trianguloIsocelesLadoB.value);
	const trianguloBase = parseFloat(input_trianguloIsocelesBase.value);
	let trianguloAltura = 0;

	if (input_respTrianguloIsocelesAltura.value !== 0) {
		input_respTrianguloIsocelesAltura.value = 0;
	}
	if (fn_esIsoceles(trianguloLadoA, trianguloLadoB, trianguloBase)) {
		fn_mostrarError(false);
		trianguloAltura = fn_encontrarUnLado(trianguloLadoA, trianguloBase);
		input_respTrianguloIsocelesAltura.value = trianguloAltura;
	} else {
		fn_mostrarError(true);
	}

	console.group('fn_calcularTrianguloIsocelesAltrura');
	console.log(trianguloLadoA);
	console.log(trianguloLadoB);
	console.log(trianguloBase);
	console.log(trianguloAltura);
	console.groupEnd();
}

function fn_calcularTrianguloIsocelesArea() {
	let trianguloBase = parseFloat(input_trianguloIsocelesBase.value);
	let trianguloAltura = parseFloat(input_respTrianguloIsocelesAltura.value);
	let trianguloArea = parseFloat(input_respTrianguloIsocelesArea.value);

	if (trianguloAltura === 0) {
		fn_calcularTrianguloIsocelesAltrura();
		trianguloAltura = parseFloat(input_respTrianguloIsocelesAltura.value);
		trianguloArea = fn_trianguloIsocelesArea(
			trianguloBase,
			trianguloAltura
		);
		input_respTrianguloIsocelesArea.value = trianguloArea;
	}

	if (trianguloAltura !== 0) {
		trianguloAltura = parseFloat(input_respTrianguloIsocelesAltura.value);
		trianguloArea = fn_trianguloIsocelesArea(
			trianguloBase,
			trianguloAltura
		);
		input_respTrianguloIsocelesArea.value = trianguloArea;
	}
}

function fn_calcularTrianguloIsocelesPerimetro() {
	const trianguloLadoA = parseFloat(input_trianguloIsocelesLadoA.value);
	const trianguloLadoB = parseFloat(input_trianguloIsocelesLadoB.value);
	const trianguloBase = parseFloat(input_trianguloIsocelesBase.value);

	if (fn_esIsoceles(trianguloLadoA, trianguloLadoB, trianguloBase)) {
		fn_mostrarError(false);
		let trianguloPerimetro = fn_trainguloIsocelesPerimetro(
			trianguloLadoA,
			trianguloLadoB,
			trianguloBase
		);
		input_respTrianguloIsocelesPerimetro.value = trianguloPerimetro;
	} else {
		fn_mostrarError(true);
	}
}
