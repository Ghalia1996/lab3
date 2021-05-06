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

