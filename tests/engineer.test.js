const Engineer = require("../lib/engineer")

describe('engineer', () => {
    it('should return objects with the role of engineer', () => {
        const obj = new Engineer();

        expect('role' in obj).toEqual('Engineer')
    })
})