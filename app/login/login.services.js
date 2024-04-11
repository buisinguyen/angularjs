export default class LoginService {
    constructor($http) {
        this._http = $http
    }
    login() {
        // return this._http.get('mock/users.json');
    }
}
LoginService.$inject = ['$http'];


