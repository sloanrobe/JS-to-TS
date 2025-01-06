function isAdult(user) {
    return user.age >= 19;
}
var justine = {
    name: 'Justine',
    age: 'Secret!',
};
var isJustineAnAdult = isAdult(justine, "I should not be here!");
