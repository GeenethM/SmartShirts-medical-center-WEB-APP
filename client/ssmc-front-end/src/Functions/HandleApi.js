import axios from 'axios'


export const getAllStoreData = (setValues) => {
    axios
        .get("http://localhost:4000/api/store")
        .then(({ data }) => {
            console.log('data ---> ', data);
            setValues(data)
        })
}