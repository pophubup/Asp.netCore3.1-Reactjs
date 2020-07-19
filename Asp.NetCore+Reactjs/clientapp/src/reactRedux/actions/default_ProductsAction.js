import axios from 'axios'

const default_ProductAction = () => {
    return function (dispatch) {
        return axios.get('http://localhost:5000/api/Home/Index').then(res => {
            dispatch({
                type: "DEFAULT_PRODUCTS",
                payload: res.data
            })
        })
    }

}

export default { default_ProductAction };

