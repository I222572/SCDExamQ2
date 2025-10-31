
const { validateUser } = require('./userService');

describe('User Validation Service', () => {

  // validate user with correct user object
  test('should successfully validate a user with valid email and age >= 18', () => {
   
    const validUser = {
      username: 'iman',
      email: 'iman@example.com',
      age: 25,
    };


    const result = validateUser(validUser);

    expect(result.success).toBe(true);
    expect(result.message).toBe('User validated successfully');
  });

// Reject a user with a missing email
  test('should reject user with missing email address', () => {
    // Arrange
    const userWithoutEmail = {
      username: 'janedoe',
      age: 30,
   
    };

    expect(() => validateUser(userWithoutEmail)).toThrow('Email is required');
  });

  // Reject user with less than 18 age
  test('should reject user who is under 18 years old', () => {
  
    const userUnderAge = {
      username: 'billykid',
      email: 'billy@example.com',
      age: 17,
    };

   
    expect(() => validateUser(userUnderAge)).toThrow('User must be at least 18 years old');
  });

//invalid email
  test('should reject user with an invalid email format', () => {
    // Arrange
    const userWithInvalidEmail = {
      username: 'invaliduser',
      email: 'invalid-email-format',
      age: 20,
    };


    expect(() => validateUser(userWithInvalidEmail)).toThrow('Not a valid e-mail address');
  });
});

