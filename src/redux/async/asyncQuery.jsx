import axios from "axios"


const url = 'https://jsonplaceholder.typicode.com/users'


const axiosGetObj = {
    method: 'get',
    url,
    responseType: 'json'
}

export const axiosThunkQuery =
    action =>
        dispatch =>
            axios(axiosGetObj).then(resp => dispatch(action(resp.data)))


export const axiosSagaQuery = () =>
    new Promise(res => res(axios(axiosGetObj)))


//возвращает промис без результата (через задержку в размере ms) 
export const delay = (ms) => new Promise(res => setTimeout(res, ms))

