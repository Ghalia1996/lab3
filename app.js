/*
// 1- ask the user about favourite color 
//show image on the answer 
// choice red -> red pic
// choice green -> green
*/
var userColor = prompt('that your favourite color')
if (userColor === 'red'){
  document.write('<img src="https://www.tarkett-asia.com/media/img/M/TH_3917011_3707003_3708011_3912011_3914011_800_800.jpg">') 
}
else if(userColor === 'green'){
  document.write('<img src="https://www.dictionary.com/e/wp-content/uploads/2020/02/20200727_emoji_greenHeart_1000x700.png">')
}
else { alert ('thank you')}
