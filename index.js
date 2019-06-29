function quizStart() {
    toggle(["0f", "2f", "3f", "4f"]);
    $(".start button").click(function (args) {
        args.preventDefault();
        toggle(["2t", "1f"]);
        updateProgress();
        nextQuestion(index);
        inspectInput();
    });
}
//(not mine)Fisher-Yates shuffle algorithm
function shuffle(args) {
    var j, x, i;
    for (i = args.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = args[i];
        args[i] = args[j];
        args[j] = x;
    }
}
function nextQuestion() {
    toggle(["0t"]);
    if (index < 8) {
        radioListener();
        $(".feedback h2").empty();
        $(".feedback p").empty();
        $(".quiz h2").empty();
        $(".quiz fieldset").empty();
        $(".quiz h2").append(QUESTIONS[index].question);
        for (let i = 0; i < 4; i++) {
            $(".quiz fieldset").append(
                "<label><input type=\"radio\" name=\"name\" value="
                + "\""
                + QUESTIONS[index].answers[i]
                + "\""
                + ">"
                + QUESTIONS[index].answers[i]
                + "<\/label>"
                + "<p><\/p>"
            );
        }
    } else {
        console.log("restart()");
        toggle(["0f", "1f", "2f", "3f", "4t"]);
        restart();
    }
    console.log(index);
}
function updateProgress() {
    $(".progress li").text(
        "Question: "
        + (index + 1)
        + "\/8 | "
        + "\nScore: "
        + (score)
        + "\/8");
}
function radioListener() {
    input = "";
    $(document).ready(function () {
        $("input[type='radio']").click(function () {
            input = $("input[name='name']:checked").val();
        });
    });
}
function inspectInput() {
    $(".quiz button").click(function (args) {
        if (input === QUESTIONS[index].answers[4]) {
            feedback(1);
            index++;
            score++;
        } else if (input !== QUESTIONS[index].answers[4]
            && input !== "") {
            feedback(0);
            index++;
        } else {
            alert("SELECT YOUR ANSWER!");
        }
    });
}
function feedback(args) {
    toggle(["0f", "2f", "3t"]);
    $(".feedback h2").empty();
    $(".feedback p").empty();
    if (args === 1) {
        $(".feedback h2").append("Correct :)");
        $(".feedback p").append(" "
            + QUESTIONS[index].answers[4]);
        $(".feedback button").text("Cool!");

    } else if (args === 0) {
        $(".feedback h2").append("Incorrect :(");
        $(".feedback p").append("The answer was "
            + QUESTIONS[index].answers[4]
            + ".");
        $(".feedback button").text("Got it!");
    }
    $(".feedback button").click(function (args) {
        toggle(["2t", "3f"]);
        nextQuestion();
        updateProgress();
    });
}
function restart() {
    $(".restart li").empty();
    $(".restart li").append(
        "Score: "
        + score
        + "\/8");
    $(".restart button").click(function () {
        location.reload();
    });
}
$(document).ready(function () {
    shuffle(QUESTIONS);
    quizStart();
});
var input = "";
var index = 0;
var score = 0;