//===========================
//      ==Cuadrado==
//===========================
console.group('Cuadrado');

const cuadradoLado = 5;

function fn_cuadradoPerimetro(p_cuadradoLado) {
	return p_cuadradoLado * 4;
}

function fn_cuadradoArea(p_cuadradoLado) {
	return p_cuadradoLado * p_cuadradoLado;
}

const cuadradoPerimetro = fn_cuadradoPerimetro(cuadradoLado);
const cuadradoArea = fn_cuadradoArea(cuadradoLado);

console.log('Los lados del cuadro mide : ' + cuadradoLado + 'cm');
console.log('El perímetro del cuadro mide : ' + cuadradoPerimetro + 'cm^2');
console.log('El área del cuadro mide : ' + cuadradoArea + 'cm^2');

console.groupEnd();

//===========================
//      ==Triángulo==
//===========================

console.group('Triángulo');

const trianguloLado_a = 6;
const trianguloLado_b = 6;
const trinaguloBase = 4;
const trianguloAltura = 5.5;

function fn_trainguloPerimetro(
	p_trainguloLado_a,
	p_trainguloLado_b,
	p_trainguloLado_base
) {
	return trianguloLado_a + trianguloLado_b + trinaguloBase;
}

function fn_trianguloArea(p_trianguloBase, p_trianguloAltura) {
	return (p_trianguloBase * p_trianguloAltura) / 2;
}

const trianguloPerimetro = fn_trainguloPerimetro(
	trianguloLado_a,
	trianguloLado_b,
	trinaguloBase
);
const trianguloArea = fn_trianguloArea(trinaguloBase, trianguloAltura);

console.log('El lado A del triángulo a mide: ' + trianguloLado_a + 'cm,');
console.log('El lado B del triángulo b mide: ' + trianguloLado_b + 'cm,');
console.log('La base o lado C del triángulo mide: ' + trinaguloBase + 'cm');
console.log('La altura del triángulo mide: ' + trianguloAltura + 'cm');
console.log('El perímetro del triángulo mide: ' + trianguloPerimetro + 'cm');
console.log('El area triángulo mide: ' + trianguloArea + 'cm^2');

console.groupEnd();

//===========================
//      ==Círculo==
//===========================

console.group('Círculo');

const PI = Math.PI;
const circuloRadio = 4;

function fn_circuloPerimetro(p_circuloRadio) {
	return 2 * p_circuloRadio * PI;
}

function fn_circuloArea(p_circuloRadio) {
	return p_circuloRadio * p_circuloRadio * PI;
}

const circuloPerimetro = fn_circuloPerimetro(circuloRadio);
const circuloArea = fn_circuloArea(circuloRadio);

console.log('La constante PI es de: ' + PI);
console.log('El radio del círculo mide ' + circuloRadio + 'cm');
console.log('El diametro del circulo es : ' + circuloPerimetro + 'cm');
console.log('El área triángulo mide: ' + circuloArea + 'cm^2');

console.groupEnd();
