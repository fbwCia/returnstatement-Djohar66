let array =[3,4,5,0,10]

function returnMaxAndMinArray(arr){
    arr.sort((a,b) => a-b);
    console.log (arr[0]);
    console.log (arr[arr.length-1])

}
returnMaxAndMinArray(array)