var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 5] = "ADMIN";
    ROLE[ROLE["READ_ONLY"] = 100] = "READ_ONLY";
    ROLE[ROLE["WRITE_ONLY"] = 200] = "WRITE_ONLY";
})(ROLE || (ROLE = {}));
var person = {
    name: 'Ishaan',
    age: 26,
    role: ROLE.WRITE_ONLY
};
var activities = []; // can be of any type as well
activities.push('Ishaan');
console.log(person);
// Tuple
var fixed = [2, 'Author'];
if (person.role === ROLE.WRITE_ONLY) {
    console.log(ROLE.WRITE_ONLY);
}
var ADMIN = ROLE.ADMIN;
console.log(ADMIN);
