const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toEqual(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toEqual(true);
  });

  test("missing character 'x'", () => {
    // Arrange
    const text = 'the quick brown foe jumps over the lazy dog'

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toEqual(false);
  });

  test('empty sentence', () => {
    // Arrange
    const text = ''

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toEqual(false);
  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'sphinx_of_black_quartz_judge_my_vow';

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toEqual(true);
  });

  test('pangram with numbers', () => {
    // Arrange
    const text = '37 quick brown foxes jump over the lazy dog 12 times'

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toEqual(true);
  });

  // Write your own test case
  test('pangram with capital letters', () => {

    const text = 'Sphinx of Black Quartz, judge my vow';

    const result = isPangram(text);

    expect(result).toEqual(true);
  });
});
