import axios from 'axios';

const URL = "http://localhost:8500";

export const fetchData = async () => {
    try {
        return await axios.get(`${URL}/`);

    } catch (error) {
        console.log("error while calling fetch data Api... ", error)
    }
}

