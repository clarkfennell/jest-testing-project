const functions = require('./functions');

// Lifecycle tests
const initDB = () => console.log('Database initialized');
const closeDB = () => console.log('Database closed');

// beforeEach(() => initDB());
// afterEach(() => closeDB());

// beforeAll(() => initDB());
// afterAll(() => closeDB());

const nameCheck = () =>  console.log('Checking name...');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Clark', () => {
    const user = 'Clark';
    expect(user).toBe('Clark');
  })

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  })
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
})

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
})

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(0)).toBeFalsy();
})

// toBeTruthy
test('Should be truthy', () => {
  expect(functions.checkValue(2)).toBeTruthy();
})

// toEqual works with objects and Arrays
test('user should be Clark Fennell object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Clark',
    lastName: 'Fennell'
  });
})

// Lees than and Greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// Regex w/ regular expression
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
})

// Asynchronous data
// Promise
test('User fetched names should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham');
    })
})

// Async Await
test('User fetched names should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham');
})