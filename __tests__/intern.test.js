const Intern = require("../lib/intern")

describe('intern', () => {
    it('should return objects with the role of intern', () => {
        const obj = new Intern();

        expect('role' in obj).toEqual('intern')
    })
})