$("#btn").click(function () {
    // declare variables
    var assignments = parseInt($("#assignments").val());
    var groupProject = parseInt($("#groupProject").val());
    var quizzes = parseInt($("#quizzes").val());
    var midterm = parseInt($("#midterm").val());
    var final = parseInt($("#final").val());
    var intex = parseInt($("#intex").val());
    var finalGrade = (assignments * .5) + (groupProject * .1) + (quizzes * .1) + (midterm * .1) + (final * .1) + (intex * .1)
    var letterGrade = ""

    // if statements to calculate letter grade
    if (finalGrade >= 94) {
        letterGrade = 'A';
    }
    else if (finalGrade >= 90) {
        letterGrade = 'A-';
    }
    else if (finalGrade >= 87) {
        letterGrade = 'B+';
    }
    else if (finalGrade >= 84) {
        letterGrade = 'B';
    }
    else if (finalGrade >= 80) {
        letterGrade = 'B-';
    }
    else if (finalGrade >= 77) {
        letterGrade = 'C+';
    }
    else if (finalGrade >= 74) {
        letterGrade = 'C';
    }
    else if (finalGrade >= 70) {
        letterGrade = 'C-';
    }
    else if (finalGrade >= 67) {
        letterGrade = 'D+';
    }
    else if (finalGrade >= 64) {
        letterGrade = 'D';
    }
    else if (finalGrade >= 60) {
        letterGrade = 'D-';
    }
    else {
        letterGrade = 'E';
    }

    // Output final grade & letter grade; fade image away to focus on the grade
    $("#finalGrade").html("Final Grade: " + finalGrade + "\nLetter Grade: " + letterGrade);
    $("#imgRachel").fadeOut("slow");

});