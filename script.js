(function(){

// for mouseover on contact page
$('#twitter').mouseover(function(){
  $(this).attr('src', 'images/twitterHov.png');
  console.log('mousein');
  }).mouseout(function(){
  $(this).attr('src', 'images/twitter.png');
});




}())
