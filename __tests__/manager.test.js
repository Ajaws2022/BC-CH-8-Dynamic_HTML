const Manager = require("../lib/manager")

describe('manager', () => {
    it('Should return the role of "manager"', () => {
        const e = new Manager('name', 1, 'email@email.com')
    
        expect(e.getRole()).toBe('manager')
      })
})