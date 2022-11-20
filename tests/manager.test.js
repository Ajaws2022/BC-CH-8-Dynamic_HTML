const Manager = require("../lib/manager")

describe('manager', () => {
    it('should return objects with the role of manager', () => {
        const obj = new Manager();

        expect('role' in obj).toEqual('manager')
    })
})