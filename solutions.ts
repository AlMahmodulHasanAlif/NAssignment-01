//Problem-1

function filterEvenNumbers(Number:number[]):number[]{
    return Number.filter(num => num % 2 === 0);
}

const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]); 
console.log(result);

//Problem-2
function reverseString(String:string):string{
    return String.split('').reverse().join('');
}
const reversed = reverseString("is it working?");
console.log(reversed);  