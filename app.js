/*
// 1- ask the user about favourite color 
//show image on the answer 
// choice red -> red pic
// choice green -> green

//var userColor = prompt('that your favourite color')
//if (userColor === 'red'){
 // document.write('<img //src="https://www.tarkett-asia.com/media/img/M/TH_3917011_//3707003_3708011_3912011_3914011_800_800.jpg">') 
//}
//else if(userColor === 'green'){
  document.write('<img src="https://www.dictionary.com/e/wp-content/uploads/2020/02/20200727_emoji_greenHeart_1000x700.png">')
}

*/
/*
alert ('what is your favourite color')

var userColor = prompt('what is your favourite color?')
while (userColor !== 'red' && userColor !== 'green')
{
userColor = prompt('try again')
}
 var numberCount = prompt('how many color do you want to see ?')

var image = ''
for(var x =  0; x < numberCount ;x++) {
if(userColor ==='red') 
{ image = image +'<img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_Vice_Admiral_of_Red_1805_to_1864.png">'}
else if ( userColor ==='green') {
image = image + '<img src="https://www.dictionary.com/e/wp-content/uploads/2020/02/20200727_emoji_greenHeart_1000x700.png">' }
}
document.write(image)
<<<<<<< HEAD
*/


function choosing(){
var userCar = prompt('choose your favourite Car??')
while(userCar !== "BMW" && userCar !== "Mercedis"){
  var userCar = prompt ("choose again pleas ")
}
if (userCar === 'BMW') {
  document.write("<p> its BMW </p>")
} else if (userCar === 'Mercedis') {
  document.write("<p> its Mercedis </p>")
} else {
  alert('you know what you choose')
}
}

choosing()


printImg()

function printImg(){
var userGhalia = prompt ("How many Cars did you drive")
console.log
for (var i = 0 ; i < userGhalia; i++){
document.write('<img src="https://s1.cdn.autoevolution.com/images/news/mercedes-benz-and-bmw-a-brotherly-rivalry-that-spanned-over-a-century-105372_1.jpg" >')

}
}



