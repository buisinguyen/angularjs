export default class UsersController {
    constructor(userService) {
        this._userServices = userService;
        this.users = [];
        this.lastName = 'nguyenbs'
        "ngInject";
    }
    click = () => {
        console.log('clicked');
    }
    loadDataUsers = () => {
        this._userServices.loadData().then(users => {
            console.log(users.data, 'promise')
            this.users = users.data;
        })
    }
    sum = (a, b) => {
        return a + b;
    }
}
UsersController.$inject = ['userService'];
