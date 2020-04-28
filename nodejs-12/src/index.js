const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

const formatValue = value => value.toFixed(2)

function getShoppingCart(ids, productsList) {	
	const filteredProducts = productsList.filter(product => ids.includes(product.id))

	let categories = []
	let regularTotalPrice = 0
	let totalPrice = 0
	let discountValue = 0
	let discount = 0

	filteredProducts.forEach(product => {
		regularTotalPrice += product.regularPrice		
		if (!categories.includes(product.category)) categories.push(product.category)
	})
	let promotion = promotions[categories.length - 1]

	const products = filteredProducts.map(({ name, category }) => ({ name, category }))
	let price = 0
  filteredProducts.forEach(product => {
		price = product.regularPrice
		product.promotions.forEach(prom => {
			if (prom.looks.includes(promotion)) price = prom.price
		});

		totalPrice += price
	});
	
	discountValue = regularTotalPrice - totalPrice
	discount = (100 - ((totalPrice * 100) / regularTotalPrice))

	return { 
		products, 
		promotion,		
		totalPrice: formatValue(totalPrice), 
		discountValue: formatValue(discountValue), 
		discount: `${formatValue(discount)}%`
	}	
}

module.exports = { getShoppingCart };
