//===========================
//      ==Cuadrado==
//===========================

console.group('Cuadrado');

const cuadradoLado = 5;

const cuadradoPerimetro = cuadradoLado * 4;
const cuadradoArea = cuadradoLado * cuadradoLado;

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

const trianguloPerimetro = trianguloLado_a + trianguloLado_b + trinaguloBase;
const trianguloArea = (trinaguloBase * trianguloAltura) / 2;

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

const circuloPerimetro = 2 * circuloRadio * PI;
const circuloArea = circuloRadio * circuloRadio * PI;

console.log('La constante PI es de: ' + PI);
console.log('El radio del círculo mide ' + circuloRadio + 'cm');
console.log('El diametro del circulo es : ' + circuloPerimetro + 'cm');
console.log('El área triángulo mide: ' + circuloArea + 'cm^2');

console.groupEnd();
