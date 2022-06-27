let arr = [1, 2, 3, 4, 5, 6, 7];

// `for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// for(let value of arr){
//     console.log(value);
// }

arr.forEach(function(item, index, arr){
    console.log(`${index}: ${item} into arr ${arr}`);
})