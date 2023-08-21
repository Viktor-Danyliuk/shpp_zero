// Завдання: https://shpp.gitbook.io/zero/tutorials/functions/array-reversing
main();

function main () {
    let arrayLength = getArrayLength();

    function getArrayLength () {
        return +prompt("Розмір массиву");
    }

    let array = [];

    fillArray(array, arrayLength);

    function fillArray (arr, arrLength) {
        for (let i = 0; i < arrLength; i++) {
            arr[i] = prompt("Введіть елемент массиву");
        }
    }

    printArray(array);

    function printArray (array1) {
        for (let i = 0; i < array1.length; i++) {
            if (i == 0) {
                console.put("[" + array1[0]);
            } else if (i == array1.length - 1) {
                console.put(", " + array1[array1.length - 1] + "]");
            } else {
                console.put(", " + array1[i]);
            }
        }

        console.log();
    }

    reverseArray(array);

    function reverseArray (arr) {
        let reverse = [];

        for (let i = 0; i < arr.length; i++) {
            reverse[i] = arr[arr.length - 1 - i];
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i] = reverse[i];
        }
    }

    console.log("ось реверснутий масив:");

    printArray(array);
}
