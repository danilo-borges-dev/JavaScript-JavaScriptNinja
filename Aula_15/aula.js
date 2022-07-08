let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

array.forEach(element => {
    console.log(element);
});

array.forEach((item, index, array) => console.log(item, index, array))