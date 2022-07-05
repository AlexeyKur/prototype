import Character from '../app';

test('check name', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.name).toBe('Alex');
});

test('check type', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.type).toBe('Daemon');
});

test('check level', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.level).toBe(1);
});

test('check attack', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.attack).toBe(10);
});

test('check defence', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.defence).toBe(40);
});

test('check damage', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.health).toBe(76)
})
