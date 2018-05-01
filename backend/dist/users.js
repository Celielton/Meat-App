"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'teste@gmail.com': new User('teste@gmail.com', 'Teste 001', '123456'),
    '1@2.com': new User('1@2.com', 'Teste1', '123456'),
    '1@1.com': new User('1@1.com', 'Teste', '123')
};
