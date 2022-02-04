import React from 'react'
import { addManyAsyncAction } from "./asyncActions";
import axios from 'axios'

const axiosGetObj = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
    responseType: 'json'
}

export default () => (dispatch) => (
    axios(axiosGetObj)
        .then(resp => resp.data)
        .then(resp => dispatch(addManyAsyncAction(resp)))
)