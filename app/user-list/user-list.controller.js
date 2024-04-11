export default class UsersController {
    constructor(UserService) {
        this._UserServices = UserService;
        this.users = [];
        this.lastName = 'nguyenbs'
        "ngInject";
    }

    click = () => {
        console.log('clicked');
    }

    loadDataUsers = () => {
        this._UserServices.loadData().then(users => {
            console.log(users.data, 'promise')
            this.users = users.data;
        })
    }

    sum = (a, b) => {
        return a + b;
    }

    submitForm = () => {
        console.log('submit form');
    }
}
UsersController.$inject = ['UserService'];
