import axios from 'axios'

const default_ProductAction = () => {
    return function (dispatch) {
        return axios.get('http://localhost:53321/api/Default/Index').then(res => {
            dispatch({
                type: "DEFAULT_PRODUCTS",
                payload: res.data
            })
        })
    }

}

export default { default_ProductAction };

