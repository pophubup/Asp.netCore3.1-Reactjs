import axios from 'axios'

const default_Transcation = () => {
    return async function (dispatch) {
        const data = await axios.get('http://localhost:50424/api/Default/display_Transcations').then(res => {
            return res.data;
           
         })
        return dispatch({
            type: "DEFAULT_TRANSCATIONS",
            payload: data
        })
    }

}

export default { default_Transcation };

