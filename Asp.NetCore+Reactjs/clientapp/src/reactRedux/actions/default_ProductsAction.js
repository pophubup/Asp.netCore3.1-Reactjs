import axios from 'axios'

const default_ProductAction = () => {
    return function (dispatch) {
        return axios.get('https://restwebapigroup.azurewebsites.net/api/Product/GetProducts').then(res => {
            dispatch({
                type: "DEFAULT_PRODUCTS",
                payload: res.data
            })
        })
    }

}

export default { default_ProductAction };

