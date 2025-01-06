type User = {
    name: string,
    age: number,
}

function isAdult(user: User): boolean {
    return user.age >= 18
}

const justine: User = {
    name: 'Justine',
    age: 'Secret!',
}

const isJustineAnAdult: string = isAdult(justine, "I should not be here!")