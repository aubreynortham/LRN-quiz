$(document).ready(function() {
  var quizScore = 0;

  for (var i = 0; i < questionArray.length; i++) {
    var selection = new QuizQuestion (questionArray[i].question, questionArray[i].choices, questionArray[i].answer);
    var selectionView = new QuestionView(selection);
    selectionView.render();
    //how do I tell it to recognize quiz view versus answer view?
    if (we are on question/choice view...) {
      $(".empty").append(selectionView.el);
    } else { //if we are on answer view...
      $(".empty").append(selectionView.el);
    }
  }
});

//where do I factor in the victory condition..
