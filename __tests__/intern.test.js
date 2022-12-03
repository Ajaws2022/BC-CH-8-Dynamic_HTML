const Intern = require("../lib/intern")

describe('intern', () => {
    it('Should return the role of "intern"', () => {
        const e = new Intern('name', 1, 'email@email.com')
    
        expect(e.getRole()).toBe('intern')
      })
})