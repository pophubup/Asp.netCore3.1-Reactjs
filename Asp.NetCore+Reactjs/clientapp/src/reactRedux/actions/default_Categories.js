import axios from 'axios'

const default_CategoryAction = () => {
    return function (dispatch) {
        return axios.get('https://restwebapigroup.azurewebsites.net/api/Product/GetAllCategory').then(res => {
            dispatch({
                type: "DEFAULT_CATEGORY",
                payload: res.data
            })
        })
    }

}

export default { default_CategoryAction };

