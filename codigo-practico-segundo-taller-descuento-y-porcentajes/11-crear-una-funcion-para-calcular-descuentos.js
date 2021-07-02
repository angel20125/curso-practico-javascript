const _PORCENTAGE_OF_100_ = 100;

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

fn_calculateDiscountPrice(100, 15);
fn_calculateDiscountPrice(280, 15);
fn_calculateDiscountPrice(300, 15);
