
//business logic
function Movie (movie,time, age,gender){
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.gender = gender;

}
// user interface
$(documents.ready(function(){
$("form#movie-time").submit(function(event){
  event.preventDefault();
  var newMovieTitle = $("input#movie-title").val();
  var newMovieTime = $("input#movie-time").val();
  var newMovieAge = $("input#age-of-viewer").val();
  var newMovieGenderMale = $("input#male-check-box").val();
  var newMovieGenderFemale = $("input#female-check-box").val();
  var newMovie = new Movie(newMovieTitle, newMovieTime, newMovieAge, newMovieGenderMale, newMovieGenderFemale);
  $("ul#movie-ticket-price").append("<li><span>" + newMovie.movie + "</li></span>");
});


});
