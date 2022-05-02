enum ROLE {
  ADMIN = 5,
  READ_ONLY = 100,
  WRITE_ONLY = 200,
}

const person = {
  name: 'Ishaan',
  age: 26,
  role: ROLE.WRITE_ONLY,
};

const activities: string[] = []; // can be of any type as well

activities.push('Ishaan');

console.log(person);

// Tuple
const fixed: [number, string] = [2, 'Author'];

if (person.role === ROLE.WRITE_ONLY) {
  console.log(ROLE.WRITE_ONLY);
}

const ADMIN = ROLE.ADMIN;

console.log(ADMIN);

// ANY type
const dynamic: any[] = [];
