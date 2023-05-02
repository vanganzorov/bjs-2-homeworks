function compareArrays(arr1, arr2) {
    return arr1.every((element, i) => arr1[i] == arr2[i]) && arr1.length === arr2.length;
}


function getUsersNamesInAgeRange(users, gender) {

    return users.filter((user) => gender === user.gender).map(userAge => userAge.age).reduce((acc, item, index, userAge) => acc + item / userAge.length, 0)
}
