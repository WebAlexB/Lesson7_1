//    Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const array = [1, '2', 5, 3, '5', 4, 5, 6, '7'];

// Результат: [1, '2', 3, '5', 4, 6, '7']

function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

removeElement(array, 5);
console.log(removeElement(array, 5));
