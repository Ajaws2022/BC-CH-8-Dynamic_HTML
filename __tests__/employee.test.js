const Employee = require("../lib/employee");

describe("Employee", () => {
  it('Should return an object containing the employee data', () => {
        const obj = new Employee();

        expect("role" in  obj).toEqual('Employee');
   })
})