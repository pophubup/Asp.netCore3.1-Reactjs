import { useState } from 'react'


export const useForm = (initalvalue) => {
    const [values, setvalue] = useState(initalvalue)

    return [
        values,
        e => {
           setvalue({
              ...values,
               [e.target.name]: e.target.value
           })
        }
     
    ]
}

