import UsersController from './../user-list/user-list.controller';
import userService from './../user-list/user-list.services';

const $httpMock = {
    get: jest.fn()
};

describe('UsersController', () => {
    let $controller, userServiceMock, spyLoadData;

    beforeEach(() => {
        // Inject necessary AngularJS services
        // angular.mock.inject((_UserServices_) => {
        //     userServiceMock = _UserServices_;
        // });
        userServiceMock = new userService($httpMock);
        $controller = new UsersController(userServiceMock);
        spyLoadData = jest.spyOn(userServiceMock, 'loadData');


    });

    it('should call clicked', () => {
        const controller = $controller;
        const spy = jest.spyOn(controller, 'click')
        controller.click();
        expect(spy).toHaveBeenCalled();
    });

    it('should run sum()', () => {
        const controller = $controller;
        const a = 1;
        const b = 2;
        const sum = a + b;
        expect(controller.sum(a, b)).toEqual(sum);
    });

    it('should run loadDataUsers()', () => {
        const controller = $controller;
        const responseData = [
            {
                "name": "User 1",
                "description": "This is user 1"
            },
            {
                "name": "User 2",
                "description": "This is user 2"
            },
            {
                "name": "User 3",
                "description": "This is user 3"
            }
        ]
        
        $httpMock.get.mockReturnValue(Promise.resolve({ data: responseData }));
        controller.loadDataUsers();
        userServiceMock.loadData().then(res => {
            expect(res.data).toEqual(responseData);
        })
        expect(spyLoadData).toHaveBeenCalled();
    })
});