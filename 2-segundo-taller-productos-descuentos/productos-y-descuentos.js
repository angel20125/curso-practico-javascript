const _PORCENTAGE_OF_100_ = 100;

const inputPriceProduct = document.getElementById('inputPriceProduct');
const inputPercentageDiscount = document.getElementById(
	'inputPercentageDiscount'
);

// se calcula  el descuento
const resultPriceProduct = document.getElementById('resultPriceProduct');

function fn_calculateDiscountPrice(p_priceProduct, p_porcentageDiscount) {
	const priceProductWithDiscount =
		(p_priceProduct * (_PORCENTAGE_OF_100_ - p_porcentageDiscount)) / 100;

	return priceProductWithDiscount;
}

// Se toma el precio y descuento introducido por el usuario y hace el descuento
function onclickButtonDiscountPrice() {
	// se obtiene los valores introducidos por el usuario
	const valuePriceProduct = inputPriceProduct.value;
	const valuePercentageDiscount = inputPercentageDiscount.value;

	const priceProductWithDiscount = fn_calculateDiscountPrice(
		valuePriceProduct,
		valuePercentageDiscount
	);

	// se muestra el resultado  en página web
	resultPriceProduct.innerText = `El precio del producto con descuento es:
      $  ${priceProductWithDiscount}
    `;
}
