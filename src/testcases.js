// userService.test.js

// Assuming your userService has a function like 'validateUser' that returns
// a success status/message or throws an error/returns an error object on failure.
// You will need to import the actual function from your userService.js file.
const { validateUser } = require('./userService');

describe('User Validation Service', () => {

  // Test case 1: Validate a user with complete and valid information (Happy Path)
  test('should successfully validate a user with valid email and age >= 18', () => {
    // Arrange
    const validUser = {
      username: 'johndoe',
      email: 'john.doe@example.com',
      age: 25,
    };

    // Act
    const result = validateUser(validUser);

    // Assert
    expect(result.success).toBe(true);
    expect(result.message).toBe('User validated successfully');
  });

  // Test case 2: Reject a user with a missing email
  test('should reject user with missing email address', () => {
    // Arrange
    const userWithoutEmail = {
      username: 'janedoe',
      age: 30,
      // email is missing
    };

    // Act & Assert
    // Assuming the validateUser function throws an error or returns a specific error object for better assertion
    expect(() => validateUser(userWithoutEmail)).toThrow('Email is required');
  });

  // Test case 3: Reject a user who is under 18 years old
  test('should reject user who is under 18 years old', () => {
    // Arrange
    const userUnderAge = {
      username: 'billykid',
      email: 'billy@example.com',
      age: 17,
    };

    // Act & Assert
    expect(() => validateUser(userUnderAge)).toThrow('User must be at least 18 years old');
  });

  // Additional Test Case: Invalid email format
  test('should reject user with an invalid email format', () => {
    // Arrange
    const userWithInvalidEmail = {
      username: 'invaliduser',
      email: 'invalid-email-format',
      age: 20,
    };

    // Act & Assert
    expect(() => validateUser(userWithInvalidEmail)).toThrow('Not a valid e-mail address');
  });
});

