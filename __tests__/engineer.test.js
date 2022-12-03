const Engineer = require("../lib/engineer")

describe('engineer', () => {
    it('Should return the role of "engineer"', () => {

        const e = new Engineer('name', 1, 'email@email.com')
    
        expect(e.getRole()).toBe('engineer')
      })
})