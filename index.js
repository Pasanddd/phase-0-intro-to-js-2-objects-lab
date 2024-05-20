// Write your solution in this file!

let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  
  test('updateEmployeeWithKeyAndValue', () => {
    expect(updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe')).toEqual({
      name: 'Jane Doe',
      streetAddress: '123 Main St'
    });
  });
  
  test('destructivelyUpdateEmployeeWithKeyAndValue', () => {
    expect(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm St')).toEqual({
      name: 'John Doe',
      streetAddress: '456 Elm St'
    });
  });
  
  test('deleteFromEmployeeByKey', () => {
    expect(deleteFromEmployeeByKey(employee, 'name')).toEqual({
      streetAddress: '123 Main St'
    });
  });
  
  test('destructivelyDeleteFromEmployeeByKey', () => {
    expect(destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress')).toEqual({
      name: 'John Doe'
    });
  });
  