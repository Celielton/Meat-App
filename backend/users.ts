export class User {
    constructor(public email: string, public name: string, private password: string) { }

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

export const users: { [key: string]: User } = {
    'teste@gmail.com': new User('teste@gmail.com', 'Teste 001', '123456'),
    '1@2.com': new User('1@2.com', 'Teste1', '123456'),
    '1@1.com': new User('1@1.com', 'Teste', '123')
}
