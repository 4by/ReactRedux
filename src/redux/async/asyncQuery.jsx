import axios from "axios"



const axiosGetObj = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
    responseType: 'json'
}

export const axiosQuery =
    action =>
        dispatch =>
            axios(axiosGetObj).then(resp => dispatch(action(resp.data)))




//возвращает промис с результатом (статусы и тд)
export const getPromise = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

//принимает результат промиса 
//возвращает промис с результатом: ответ сервера
export const getAnswer = (arg) => new Promise(res => res(arg.json()))

//возвращает промис без результата (через задержку в размере ms) 
export const delay = (ms) => new Promise(res => setTimeout(res, ms))


// console.log(getPromise())
// console.log(axios.get('https://jsonplaceholder.typicode.com/users?_limit=10'))
