import axios from 'axios'

const default_CategoryAction = () => {
    return function (dispatch) {
        return axios.get('http://localhost:5000/api/Home/GetCategories').then(res => {
            dispatch({
                type: "DEFAULT_CATEGORY",
                payload: res.data
            })
        })
    }

}

export default { default_CategoryAction };

