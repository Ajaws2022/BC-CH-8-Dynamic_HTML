const Employee = require("../lib/employee");

describe("Employee", () => {
  it('Should return an object', () => {
        const obj = new Employee();

        expect(typeof(obj)).toBe('object');
   });
  it('Should set object name', () =>{
      const name = 'Bill';

      const e = new Employee(name);

      expect(e.name).toEqual(name);
  });
   
  it('Should object id', () =>{
      const id = 4;
      
      const e = new Employee('name',id);

      expect(e.id).toEqual(id);
  });

  it('Should object email', () =>{
    const email = 4;

    const e = new Employee('name', 4, email);
    
    expect(e.email).toEqual(email);
  });

  it('Should return the role of "employee"', () => {
    const e = new Employee('name', 1, 'email@email.com')

    expect(e.getRole()).toBe('employee')
  })
})