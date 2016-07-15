//******************************************* view constructor for question/choices display

function QuestionView(selection) {
  this.selection = selection;
  this.el = null;
}

QuestionView.prototype = {
  quizlayout: function() {
    var quizDisplay = $("main.quiz");
    quizDisplay.append($("<h2>" + this.selection.question + "</h2>"));
    quizDisplay.append($("<div class='quizButtons'>" + this.selection.choices + "</div>"));
    return quizlayout;
  },
  render: function() {
    this.el = this.quizlayout();
  }
}

//********************************************* view constructor for answer display

function AnswerView(selection) {
  this.selection = selection;
  this.el = null;
}

AnswerView.prototype = {
  answerlayout: function() {
    var answerDisplay = $("main.quiz");
    if (this.selection.choices.content == true) {
      $(".quizButtons").toggle("drop", function(){
        answerDisplay.append($("<h2><span class='answerEmph'>You got it! </span>" + this.selection.answer + "</h2>"));
        $("h3").html("Score: " + (quizScore + 1) + " / 10"); //update score if correct
        quizScore = parseFloat(quizScore + 1); //convert that variable back to a number
      }
    }
    else {
      $(".quizButtons").effect("shake").toggle("drop", function(){
        answerDisplay.append($("<h2><span class='answerEmph'>Not quite! </span>" + this.selection.answer + "</h2>"));
      }
    }
    return answerlayout;
  },
  render: function() {
    this.el = this.answerlayout();
  }
}
