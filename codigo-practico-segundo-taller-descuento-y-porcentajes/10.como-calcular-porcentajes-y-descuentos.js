const _PORCENTAJE_TOTAL_ = 100;
const _PORCENTAJE_DESCUENTO_ = 15;

let precio_producto = 100;
let precio_con_descuento = 0;

precio_con_descuento =
	(precio_producto * (_PORCENTAJE_TOTAL_ - _PORCENTAJE_DESCUENTO_)) / 100;

console.log(`${precio_producto}`);
console.log(`${precio_con_descuento}`);
