const _PORCENTAGE_OF_100_ = 100;
const inputPriceProduct = document.getElementById('inputPriceProduct');
const inputPercentageDiscount = document.getElementById(
	'inputPercentageDiscount'
);
const resultPriceProduct = document.getElementById('resultPriceProduct');

function fn_calculateDiscountPrice(p_priceProduct, p_porcentageDiscount) {
	const priceProductWithDiscount =
		(p_priceProduct * (_PORCENTAGE_OF_100_ - p_porcentageDiscount)) / 100;

	console.group(
		`
    fn_calculateDiscountPrice, linea: 2,
    archivo:11-crear-una-funcion-para-calcular-descuentos
    ===========`
	);
	console.log({
		p_priceProduct,
		p_porcentageDiscount,
		_PORCENTAGE_OF_100_,
		priceProductWithDiscount,
	});
	console.groupEnd();

	return priceProductWithDiscount;
}

function onclickButtonDiscountPrice() {
	const valuePriceProduct = inputPriceProduct.value;
	const valuePercentageDiscount = inputPercentageDiscount.value;

	const priceProductWithDiscount = fn_calculateDiscountPrice(
		valuePriceProduct,
		valuePercentageDiscount
	);

	resultPriceProduct.innerText = `El precio del producto con descuento es:
      $  ${priceProductWithDiscount}
    `;
}

fn_calculateDiscountPrice(100, 15);
fn_calculateDiscountPrice(280, 15);
fn_calculateDiscountPrice(300, 15);
