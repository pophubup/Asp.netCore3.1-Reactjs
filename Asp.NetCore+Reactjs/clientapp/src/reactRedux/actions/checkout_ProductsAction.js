const checkout_products = (obj) => {
    return {
        type: "CHECKOUT_PRODUCTS",
        payload: obj
    }
}
export default { checkout_products };