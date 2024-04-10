export default class userService {
    constructor($http) {
        this._http = $http
    }
    loadData() {
        return this._http.get('mock/users.json');
    }
}
userService.$inject = ['$http'];


