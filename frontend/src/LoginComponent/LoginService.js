import Constants from '../Common/Constants.js';

export default class LoginService {

    login(username, password) {

        let headers = new Headers();
        let basicAuth = `Basic ${this.generateUsernamePasswordBase64(username, password)}`;
        headers.append("authorization", basicAuth);

        var request = {
            method: 'POST',
            headers: headers,
            mode: 'cors',
            cache: 'default'
        };
        return fetch(Constants.API_LOGIN_ENDPOINT, request)
            .then((response) => {
                if (response.ok) {
                    console.log("logado");
                } else {
                    throw new Error("erro");
                }
            });
    }

    logout() {
        return fetch('/sample/api/logout', { method: 'POST' })
            .then((response) => this.getLogoutSuccess(response));
    }

    getLogoutSuccess = (response) => {
        if (response.ok) {
            console.log("saiu");
        } else {
            throw new Error("erro");
        }
    }

    generateUsernamePasswordBase64(username, password) {
        return btoa(`${username}:${password}`);
    }
}