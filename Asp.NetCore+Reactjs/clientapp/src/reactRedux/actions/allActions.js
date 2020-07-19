import defaultAction from './default_ProductsAction';
import buyAction from './buy_ProductsAction';
import checkoutAction from './checkout_ProductsAction';
import editQtyAction from './edit_ProductQTY'
import restCheckOutProducts from './reset_CheckOutProducts'
import editCheckOutList from './edit_CheckOutList'
import defaultTranscation from './display_Transcations'
import defaultCategories from './default_Categories'

const allActions = {
    defaultAction,
    buyAction,
    checkoutAction,
    editQtyAction,
    restCheckOutProducts,
    editCheckOutList,
    defaultTranscation,
    defaultCategories
}

export default allActions;