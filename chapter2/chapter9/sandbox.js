const saleProduct = products.map(product =>{
    if (product.price>30) {
        return {user:product.user, price:product.price/2}
    }
    else {
        return product
    }
})

console.log(saleProduct)