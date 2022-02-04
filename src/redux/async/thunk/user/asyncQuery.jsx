import React from 'react'
import axios from 'axios'

const axiosGetObj = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
    responseType: 'json'
}

export default (action) => (dispatch) => (
    axios(axiosGetObj).then(resp => dispatch(action(resp.data)))
)