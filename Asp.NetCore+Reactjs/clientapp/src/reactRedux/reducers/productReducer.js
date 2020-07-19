const initalState = {
    products: [],
    chekout_Product: [],
    transcation: [],
    categories:[]
   
}
const productReducer = (state = initalState, action) => {
   
    switch (action.type) {
        case "DEFAULT_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        case "BUY_PRODUCTS":
            
            return {
                ...state,
                products: state.products.filter(x => x.productId !== action.payload[0].productId)
            }
      
        case "CHECKOUT_PRODUCTS":
            return {
                ...state,
                chekout_Product: state.chekout_Product.concat(action.payload[0])
            }
        case "REST_CHECKOUTPRODUCTS":
            return {
                ...state,
                chekout_Product: action.payload
            }
        case "EDIT_QTY_PRODUCT":
            
            let index = state.chekout_Product.findIndex(function (item) {
                return item.productId === action.payload.productId
            })
            let afterupdate = state.chekout_Product.filter(function (item) {
                if (item.productId === action.payload.productId) {
                    item.productQuantity = action.payload.productQuantity
                }
                return item.productId === action.payload.productId
            });
            const updateState = [
                ...state.chekout_Product.slice(0, index),
                afterupdate[0],
                ...state.chekout_Product.slice(index + 1)
            ];
            return {
                ...state,
                chekout_Product: updateState
            }
        case 'DELETE_CHECKOUTLIST':
            return {
                ...state,
                chekout_Product: state.chekout_Product.filter(item => item.productId !== action.payload.productId),
                products: state.products.concat(action.payload)
            }
        case "DEFAULT_TRANSCATIONS":
            console.log(action.payload)
            return {
                ...state,
                transcation: state.transcation.concat(action.payload)
            }
        case "DEFAULT_CATEGORY":
            return {
                ...state,
                categories: state.categories.concat(action.payload)
            }
        default:
            return state;
    }

}
export default productReducer;