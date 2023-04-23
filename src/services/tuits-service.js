import axios from 'axios';
//const TUITS_API = 'http://localhost:4001/api/tuits';
const TUITS_API = "https://tuiter-node-server-app2-v0go.onrender.com/api/tuits"

export const findTuits = async () => {
    console.log(TUITS_API, "apiii")
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}

export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}

