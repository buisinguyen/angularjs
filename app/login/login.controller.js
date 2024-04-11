export default class LoginController {
    constructor(LoginService) {
        "ngInject";
        this._loginService = LoginService;
        this.formData = {
            username: 'nguyenbs',
            password: 'nguyenbs1'
        };

        document.addEventListener('custom-input-changed', function (event) {
            console.log(event.detail.newValue, 'event.detail.newValue;')
            // Apply changes to AngularJS digest cycle
            ctrl.$apply();
        });
    }
    submitForm = () => {
        console.log('Form is submitted ')
        console.log(this.formData, 'this.formData')
    }
}
LoginController.$inject = ['LoginService'];
