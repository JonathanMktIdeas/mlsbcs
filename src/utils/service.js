import axios from 'axios';

const service = (path, params, body, method = 'get', headers = {}) => {
    return new Promise((resolve, reject) => {
        //const url = 'http://localhost:3000/api';
        const url = 'https://api.mlsbcs.com.mx/public/api';
        const h = {
            'Content-Type': 'application/json',
            'api-key': '6ce781a6-84fe-4866-b200-309484445ec5',
            ...headers,
        }
        const auth = localStorage.getItem('t');
        if (auth) {
            h.token = auth;
        }

        axios({
            url: `${url}/${path}`,
            method,
            params,
            data: body,
            headers: h
        })
        .then(response => {
            let token = response.headers['x-access'];
            if (token) {
                localStorage.setItem('t', token);
            }

            resolve(response.data);
        })
        .catch(err => {
            if(err.response.status === 401) {
                window.location.href = '/';
            }
            if (err.response && err.response.data) {
                reject(err.response.data.message);
            }
        })
    });
}

export default service;
