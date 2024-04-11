export default class UserService {
    constructor($http) {
        this._http = $http
    }
    loadData() {
        return this._http.get('mock/users.json');
    }
}
UserService.$inject = ['$http'];



