$(document).ready(function(){

  //Landing Page***********************************************************
  $("#secondary").on("click", function(){
    window.open("http://www.surveymonkey.com/s/FYWTCSP");
  })
  $("#primary").on("click", function(){
    $(".corner_logo, div.home").hide();
    $("div.score, .next, .transparent, main.quiz, #next").show();
  })

  //Quiz/Answer Page*******************************************************
  var quizQuestions = [
    { //first question
      question: "Springtime often brings new furry critters and feathered friends to the neighborhood! What is the most responsible way to welcome them?",
      choices: [
        {content: "<span class='bold'>A. </span>Feed the ducks and geese so they’ll come back and visit all season.",
        correct: false},
        {content: "<span class='bold'>B. </span>Create a backyard habitat for wildlife with their favorite grasses and plants.",
        correct: true}
      ],
      answer: "Feeding wild animals can be unhealthy for their diets, and dangerous for both the critters and for your family and pets. It might be nice to see them every day, but the better choice is to create a backyard space that encourages them to come and go as they please!"
    },

    { //second question
      question: "When you are choosing the most environmentally friendly way to mow your lawn, what’s the best practice?",
      choices: [
        {content: "<span class='bold'>A. </span>Always set your mower blades to 2 inches or less to keep your grass shorter.",
        correct: false},
        {content: "<span class='bold'>B. </span>Switch to an electric mower or a push mower.",
        correct: true}
      ],
      answer: "Electric or push mowers are a better choice for the environment because they run without gasoline or oil. And if you have the option, raise your mower's blades to 3 inches or higher to keep the lawn a little longer and healthier."
    },

    { //third question
      question: "Deciding how much water to dedicate to your landscaping can be a tricky balance. What option would you choose to be more environmentally friendly?",
      choices: [
        {content: "<span class='bold'>A. </span>Use more fertilizer on your plant beds so they are healthier and require less water in the long run.",
        correct: false},
        {content: "<span class='bold'>B. </span>Turn off the sprinklers and irrigate less frequently.",
        correct: true}
      ],
      answer: "It's always a good idea to minimize the use of sprinklers to water the lawn and plants only when really needed. But when it comes to fertilizers, less is always better for the environment, and fertilizer use will not reduce your plants' water dependency. Before deciding to fertilizer your lawn or plants, always get a soil test first."
    },

    { //fourth question
      question: "Your plants have a bigger impact on the local environment than you might think. Can you guess which option below is true?",
      choices: [
        {content: "<span class='bold'>A. </span>Reduce your lawn area by dedicating the majority of your yard to plant beds and trees.",
        correct: true},
        {content: "<span class='bold'>B. </span>Choose a blend of exotic plants from different areas around the world to diversify your garden and introduce new species.",
        correct: false}
      ],
      answer: "The smaller your lawnspace, the less chemical maintenance and water you’ll need. And when you are deciding what to plant in your yard, always choose native plants and avoid invasive species which have a tendency to overgrow and harm the natural ecosystem."
    },

    { //fifth question
      question: "Composting is a great way to reduce your household waste and recycle nutrients back to the earth. But what's the right way to do it?",
      choices: [
        {content: "<span class='bold'>A. </span>Compost your kitchen waste, grass clippings, and leaves in a dedicated compost bin/pile.",
        correct: true},
        {content: "<span class='bold'>B. </span>If you are a pet owner, compost your pet waste in the garden instead of discarding it.",
        correct: false}
      ],
      answer: "Learning how to properly compost your food waste from the kitchen and from yard maintenance will give you a great source of nutrients for the garden. But pet waste is a different story — take the pledge to 'Scoop the Poop' and always dispose of pet waste in the trash."
    },

    { //sixth question
      question: "Not all of your household waste products can be recycled. Choose which of these options is the right choice for the environment:",
      choices: [
        {content: "<span class='bold'>A. </span>Use any leftover cooking grease to help your kitchen's garbage disposal run more smoothly and save electricity in the long run.",
        correct: false},
        {content: "<span class='bold'>B. </span>Make sure you keep dirt, leaves, and debris away from the gutter area in front of your house.",
        correct: true}
      ],
      answer: "It's important to keep your gutters clear of all debris and waste products because they are direct outlets to the storm water drains that lead back to our community's waterways. And in the kitchen, it's a good idea to keep a grease can, and reduce or eliminate your use of the garbage disposal altogether."
    },

    { //seventh question
      question: "We can't control the weather, but we do have control over how to use and redirect the rain that collects on our property. What is the better choice:",
      choices: [
        {content: "<span class='bold'>A. </span>Install a rain barrel or cistern to collect the rain runoff from your property.",
        correct: true},
        {content: "<span class='bold'>B. </span>Redirect your downspout to a paved surface or blacktop so it doesn’t drain directly into your propery’s gutters or drains.",
        correct: false}
      ],
      answer: "Redirect your downspout away from paved surfaces and onto plant beds or rain gardens where storm water can infiltrate the soil. Rain barrels can also be a great way to collect and reuse clean water around the house."
    },

    { //eigth question
      question: "Households with property on the bay or the river have an important opportunity to make choices that keep our waterways healthy. If you live on the water, which should you choose?",
      choices: [
        {content: "<span class='bold'>A. </span>Install a bulkhead at the edge of the water to create a responsible barrier between your property and the marine life.",
        correct: false},
        {content: "<span class='bold'>B. </span>Start growing oysters on your own reefs.",
        correct: true}
      ],
      answer: "Restoring our waterways' natural oyster population benefits the whole community, so we encourage waterfront residents to help grow oysters for conservation reefs. We also recommend avoiding bulkheads, which cause erosion problems, and install a living shoreline as a natural buffer instead."
    },

    { //ninth question
      question: "You can help everyone in your household make more sustainable choices by encouraging the right habits. Which investment do you think is better?",
      choices: [
        {content: "<span class='bold'>A. </span>At the grocery store, choose disposable water bottles, utensils, and bags that are made with newer plastic material that is easier to break down.",
        correct: false},
        {content: "<span class='bold'>B. </span>At the hardware store, look for 'low-flow' faucets and toilets to install in your own home.",
        correct: true}
      ],
      answer: "Disposable plastic products are not good for the earth, and reusable bottles, shopping bags, etc. are a much better solution for the environment and for your wallet. Another smart choice is installing appliances that run more efficiently with less water required."
    },

    { //tenth question
      question: "When it comes to chores around the house, how can you help make sure what's clean for your home is also clean for the environment?",
      choices: [
        {content: "<span class='bold'>A. </span>Avoid washing your car at home because it is not the best use of resources.",
        correct: true},
        {content: "<span class='bold'>B. </span>Avoid line-drying your laundry in the yard because it can introduce chemicals from the detergent into the environment.",
        correct: false}
      ],
      answer: "Line-drying laundry is a great way to take advantage of natural renewable resources like wind and solar power, and it poses no threat to the environment. Washing your car in the driveway, though, can send harmful chemicals right down the stormdrain and into our waterways. Instead, many local carwashes use filtration and recycled water systems to help with this problem."
    }
  ] //end of var quizQuestions array

  //what question in the array we're starting on:
  var currentQuestion = 0;
  var quizScore = 0;

  function printQuestion(){
    $("h2").html(quizQuestions[currentQuestion].question);
    $(".quizButtons").show();
    $("#A").html( quizQuestions[currentQuestion].choices[0].content );
    $("#B").html( quizQuestions[currentQuestion].choices[1].content );
    //listen for the last question: if so, display 'results page' on click
    if ( currentQuestion == (quizQuestions.length - 1) ) {
      $("#next").html("See results");
      $("#next").on("click", function(){
        $(".transparent, div.score, #next").hide();
        $(".corner_logo, div.home").show();
        $("h1").html("You got " + quizScore + " / 10 questions correct!").css("font-size", "2.5em");
        $("h1").append("<p id='thanks'>Thank you for helping <b>Lynnhaven River Now</b> protect our community and our waterways by learning how to be more sustainable at home! Please take the time to apply for <b>PEARL HOME</b> certification today — click below to see how many requirements your household is already meeting, and to learn how you can keep improving!</p>");
        $("#primary").html("Redo quiz").on("click", function() {
          $("body").html(""); //creates a clean refresh
          location.reload(true); //refreshes the app
        })
      })
    }
  }

  //attach event listener based on correct true/false
  $("#A").on("click", function(){
    if (quizQuestions[currentQuestion].choices[0].correct == false){
      $(".quizButtons").effect("shake").toggle("drop", function(){
        $("h2").html("<span class='answerEmph'>Not quite! </span>" + quizQuestions[currentQuestion].answer);
      });
    } else {
      $(".quizButtons").toggle("drop", function(){
        $("h2").html("<span class='answerEmph'>You got it! </span>" + quizQuestions[currentQuestion].answer);
        $("h3").html("Score: " + (quizScore + 1) + " / 10"); //update score if correct
        quizScore = parseFloat(quizScore + 1); //convert that variable back to a number
      });
    }
  })

  $("#B").on("click", function(){
    if (quizQuestions[currentQuestion].choices[1].correct == false){
      $(".quizButtons").effect("shake").toggle("drop", function(){
        $("h2").html("<span class='answerEmph'>Try again! </span>" + quizQuestions[currentQuestion].answer);
      });
    } else {
      $(".quizButtons").toggle("drop", {complete: function(){
        $("h2").html("<span class='answerEmph'>You're right! </span>" + quizQuestions[currentQuestion].answer);
        $("h3").html("Score: " + (quizScore + 1) + " / 10"); //update score if correct
        quizScore = parseFloat(quizScore + 1); //convert that variable back to a number
      }});
    }
  })

  printQuestion();

  $("#next").on("click", function(){
    currentQuestion++;
    //make sure it doesn't try to run through the array again when there are no more questions
    if (currentQuestion < quizQuestions.length) {
      printQuestion();
    }
  })
});

/*pseudocode overview:
company name links to LRN homepage
button to apply for Pearl Home certification links to LRN Pearl Homes page
button to begin quiz loads new page layout with first question displayed
if incorrect answer is clicked, shake the box, then load answer page with "incorrect" intro
if incorrect answer is clicked, add nothing to the corner total
if correct answer is clicked,  load answer page with "correct" intro
if correct answer is clicked, add +1 to the corner total
when user clicks next page button, next question&choices are displayed
on the last answer page, next page button is replaced with see results button
when user clicks see results button, load results page featuring final score
give user the option to redo quiz, apply for pearl home, or share
*/
