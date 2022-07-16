// 1. Buatlah function dalam JavaScript yang menerima input berupa string, kemudian
// menampilkan string tersebut ke terminal.
// Contoh:
// Input -> “hello world!”
// Maka tampilan pada terminal “hello world!”

const sayHello =()=> console.log("hello world!")
sayHello()


// 2. Buatlah function dalam JavaScript untuk menghitung nilai kuadrat dari sebuah angka!
// Contoh:
// Input -> 2
// Output -> 4

const kuadrat = a => console.log(a*a)
kuadrat(2)

// 3. Celcius & Fahrenheit adalah satuan suhu, buatlah function dalam javascript untuk
// mengkonversi satuan suhu Celcius ke Fahrenheit! (inputnya berupa derajat celcius yang akan
// diubah menjadi Fahrenheit)
// Contoh:
// Input -> 20
// Output -> 68

const celciusToFarenheit =a=> console.log((a* 9/5)+32) 
celciusToFarenheit(20)


// 4. Buatlah sebuah function dalam javascript yang menerima input berupa string, kemudian
// mengeluarkan output berupa string input yang sudah dikonversi menjadi lowercase.
// Berikut 3 Contohnya:
// a. Input -> “Makan Nasi”
// Output -> “makan nasi”
// b. Input -> “KE RUMAH NENEK”
// Output -> “ke rumah nenek”
// c. Input -> “bErmAin BoLa”
// Output -> “bermain bola”

const toLowerCase =(word)=> console.log(word.toLowerCase())
toLowerCase("bErmAin BoLa")

// 5. Buatlah function untuk menghitung jumlah huruf tertentu dalam sebuah string; Jumlah
// parameter ada 2, pertama adalah string, kedua adalah huruf/karakter yang ingin dihitung
// Contoh:
// Input -> “sepak bola”, “a”
// Output -> 2
// Output 2 dikarenakan huruf “a” dalam “sepak bola” ada 2
// Berikut contoh functionnya, text adalah string input dan char adalah karakter/huruf yang
// akan dihitung:

// const count_char = (text, char)=>{
    
// }


const count_char= (text, char) => {
    console.log(text.split(char).length - 1);
 }
 count_char("sepak bola", "a")


//  6. Buatlah function dalam javascript yang menerima input berupa array of string kemudian
// mengeluarkan output berupa string yang jumlah huruf terbanyak dalam array tersebut
// Contoh:
// Input -> [‘javascript’, ‘java’, ‘python’, ‘php’]
// Output -> ‘javascript’

arr =['javascript', 'java','python','php']
const higestArrayString = (myArray) =>{
  let array =myArray.map((value)=>value).sort((a, b) => b-a)[0]
 console.log(array)
  }

higestArrayString(arr)



// 7. Buatlah function dalam javascript yang menerima input berupa array of integer kemudian
// mengeluarkan output berupa nilai terbesar ke dua dari array tersebut, jika jumlah element
// dalam array kurang dari 2, maka nilai yang dikembalikan adalah 0
// Berikut 3 Contoh:
// a. Input -> [3,4,1,6]
// Ouput -> 4
// b. Input -> [6]
// Ouput -> 0
// c. Input -> [7,1]
// Output -> 1


// todo




// 8. Buatlah function dalam javascript yang menerima input berupa string kemudian
// mengeluarkan output berupa jumlah huruf vocal dari string tersebut.
// Contoh:
// Input -> “manado”
// Output -> 3
// Output 3 dikarenakan ada 3 huruf vokal di “manado” yaitu 2 huruf “a” dan 1 huruf “o”


function getVowelsCount(str)
{
  let vowel = 'aeiouAEIOU'.split(''); 
  let count = 0;
  str.split('').forEach(item=>{
  if(vowel.indexOf(item) !== -1){
  count++;} });
  console.log(count);
}

getVowelsCount("manado");


//9 Buatlah function dalam javascript untuk mengitung factorial, function tersebut menerima
// input berupa integer (harus lebih dari 0), untuk referensi berikut adalah rumus factorial:
 

// const factorial = n => !(n > 1) ? 1 : factorial(n - 1) * n;
// console.log(factorial(4))

function factorial(number) {
    total = 1
    while (number > 0) {
      total *= number
      number = number - 1
    }
    return total
  }
  console.log(factorial(4))



// 10. Buatlah function untuk menghitung nilai rata-rata (mean) dari input berupa array
// Contoh:
// Input -> [3,5,7,3]
// Output -> 4.5

const averageValue = (value) => value.reduce((a, b) => a + b) / value.length;
console.log(averageValue([3,5,7,3]));


let nilai =[4,5,2,3,5].reduce()
console.log(nilai)