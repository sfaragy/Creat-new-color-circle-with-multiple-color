/* 
Codepen Link: https://codepen.io/sfaragy/pen/VwbvXLJ
Author: Md Soliman Faragy
Email: solimankhulna@gmail.com
Skype: solimanbd4321
Linkedin: https://www.linkedin.com/in/md-soliman-f-b3b3a347/

This scripts will help you to create a multicolor circle by different colors for radio options color swatches in eCommerce platforms. I hope that will help. If you have any query or if you need any help to develop/customize your eCommerce platfor please feel free to contact me!

*/
function onmouseOverSelection(idx){
    $('.tm-radio').each(function(){
          $(this).removeClass('tm-selected');
      });
    $("#input-option"+idx).parent().addClass('tm-selected');
}
