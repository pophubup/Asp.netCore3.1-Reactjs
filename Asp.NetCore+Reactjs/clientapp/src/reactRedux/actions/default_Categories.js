import axios from 'axios'

const default_CategoryAction = () => {
    return function (dispatch) {
        return axios.get('http://localhost:53321/api/Default/GetCategories').then(res => {
            dispatch({
                type: "DEFAULT_CATEGORY",
                payload: res.data
            })
        })
    }

}

export default { default_CategoryAction };

