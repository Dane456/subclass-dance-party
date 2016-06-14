$(document).ready(function() {
  window.dancers = [];

  // dancers = {
  //   dancer1.id: dancer1,  <-- 
  //   dancer2.id: dancer2,
  // }

  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'lib/drake.mp3');
  audioElement.setAttribute('autoplay', 'autoplay');
  audioElement.load();

  $.get();
  window.distances = {};
  //{dancer1.id: {dancer2.id: distance, dancer3.id, } } 
  audioElement.addEventListener("load", function() {
    audioElement.play();
  }, true);

  $('.addPulsyButton, .addFlashyButton, .addDancerButton').on('click', function(event) {
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
    //append dancer to page
    $('body').append(dancer.$node);
     //add dancer to array of dancers
    window.dancers[dancer.id] = dancer;

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



  $('.interact').on('click', function(event) {
    for (var key1 in window.dancers) {
      var refDancer = window.dancers[key1];
      distances[refDancer.id] = {};
      for (var key2 in window.dancers) {
        if (key1 !== key2) {
          var restDancer = window.dancers[key2];
          distances[key1][key2] = euclidean(refDancer.$node.position().top, refDancer.$node.position().left, restDancer.$node.position().top, restDancer.$node.position().left);
        }
      }
    }
    var max = Object.keys(dancers).length;
    var rand1 = generateRand(max);

    var rand2 = generateRand(max);
    rand2 = (rand2 === rand1) ? generateRand(max) : rand2;
    console.log(rand1, rand2);

    var top1 = dancers[rand1].$node.position().top;
    var top2 = dancers[rand2].$node.position().top;
    var left1 = dancers[rand1].$node.position().left;
    var left2 = dancers[rand2].$node.position().left;

    var meetTop = (top1 + top2) / 2 + 100;
    var widthRef = dancers[rand1].$node.width();
    var leftRef = (left1 + left2) / 2;
    var leftBuff = leftRef + widthRef;

    dancers[rand1].$node.animate({top: meetTop, left: leftRef});
    dancers[rand2].$node.animate({top: meetTop, left: leftBuff});


    setTimeout(function() {
      dancers[rand1].$node.addClass('animated shake');
      dancers[rand2].$node.addClass('animated shake');
    }, 500);

    setTimeout(function() {
      dancers[rand1].$node.animate({top: top1, left: left1});
      dancers[rand2].$node.animate({top: top2, left: left2});
      dancers[rand1].$node.removeClass('animated shake');
      dancers[rand2].$node.removeClass('animated shake');
    }, 1500);

  });

  var euclidean = function(top1, left1, top2, left2) {
    var x = Math.pow(top1 - top2, 2);
    var y = Math.pow(left1 - left2, 2);

    return Math.sqrt(x + y);
  };

  var generateRand = function(limit) {
    return Math.floor(Math.random() * limit);
  };



});
