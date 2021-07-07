const _PORCENTAGE_OF_100_ = 100;

// lista de cupones con su valor de descuento
const _LIST_COUPONS_DISCOUNT_ = [
	{
		name: 'avanger',
		discount: 15,
	},
	{
		name: 'justice legue',
		discount: 30,
	},
	{
		name: 'batman',
		discount: 25,
	},
];

const inputPriceProduct = document.getElementById('inputPriceProduct');
const inputCouponName = document.getElementById('inputCouponName');
const resultOperations = document.getElementById('resultOperations');

// función encargada de calcular el descuento
function fn_calculateDiscountPrice(p_priceProduct, p_porcentageDiscount) {
	const priceProductWithDiscount =
		(p_priceProduct * (_PORCENTAGE_OF_100_ - p_porcentageDiscount)) / 100;

	return priceProductWithDiscount;
}

// función  del bóton para calcular los descuentos
function onclickButtonDiscountPrice() {
	const valuePriceProduct = inputPriceProduct.value;
	const valueCouponName = inputCouponName.value;

	// función que verifica si el cupón del usuario pertenece
	// a la lista de cupones válidos.
	const isCouponValueValid = function (coupon) {
		return coupon.name === valueCouponName;
	};

	// guarda el cupón  con su nombre y descuento si  pertenece a la lista
	const couponValue = _LIST_COUPONS_DISCOUNT_.find(isCouponValueValid);

	// sino existe el cupón, dice cupon invalido
	if (!couponValue) {
		resultOperations.innerText = `
            Cupón de descuento invalido
         `;
	} else {
		const priceProductWithDiscount = fn_calculateDiscountPrice(
			valuePriceProduct,
			couponValue.discount
		);

		resultOperations.innerText = `
            El precio del producto con descuento es:
            $  ${priceProductWithDiscount}
        `;
	}
}
