$(document).ready(function() {
  window.dancers = [];

  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'lib/drake.mp3');
  audioElement.setAttribute('autoplay', 'autoplay');
  audioElement.load();

  $.get();

  audioElement.addEventListener("load", function() {
    audioElement.play();
  }, true);

  $('.addShakyButton, .addFlashyButton, .addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make on  e small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    //
    var dancer = dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });


  $('.lineup').on('click', function(event) {
    $('.snape').animate({top: 100}, 1500);
    $('.gandalf').animate({top: 400}, 1500);
    $('.drake').animate({top: 700}, 1500);
  });

  $('body').on('mouseenter', '.drake', function(event) {
    $(this).toggleClass('rotateIn');
  });
  $('body').on('mouseleave', '.drake', function(event) {
    $(this).toggleClass('rotateIn');
  });

});
