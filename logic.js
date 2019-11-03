const images = [
    'https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    'https://images.unsplash.com/photo-1522012188892-24beb302783d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
    'https://images.unsplash.com/photo-1510279931157-4ca63af8a363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
    'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1962&q=80',
    'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
    'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2156&q=80'
]

const STORE = {
    questions: [{
        'question': "When you add cream to coffee, your coffee stays warm ____ longer.",
        'answer': "20%",
        options: ["10%", "20%", "30%", "40%"]
    },
    {
        'question': "Coffee is the ____ most traded commodity in the world.",
        'answer': "2nd",
        options: ["6th", "10th", "4th", "2nd"]
    },
    {
        'question': "Coffee is said to have been discovered by a _______",
        'answer': "Goat Herder",
        options: ["Goat Herder", "Wine Maker", "Cattle Rancher", "Farmer"]
    },
    {
        'question': "Kona coffee is grown in which American state.",
        'answer': "Hawaii",
        options: ["Washington", "California", "Hawaii", "Florida"]
    },
    {
        'question': "Which country is the largest exporter of Coffee?",
        'answer': "Brazil",
        options: ["Colombia", "Costa Rica", "Venezuela", "Brazil"]
    },
    {
        'question': "Which country drinks the most coffee (per capita)?",
        'answer': "Finland",
        options: ["France", "America", "Finland", "Egypt"]
    },
    {
        'question': "How many calories does one cup of black coffee contain?",
        'answer': "1",
        options: ["1", "5", "50", "100"]
    },
    ],
    score: 0,
    counter: 0
}

//templates
function renderQuestion() {
    // $('.js-start-quiz').click(function () {
    let question = STORE.questions[STORE.counter]
    console.log('hitting renderQuestion')
    $('.js-body').html('<main class="js-question">' +
        '<section class= "header" >' +
        `<h4> score: ${Math.floor(STORE.score)}</h4>` + //grab score
        `<p>Question ${STORE.counter + 1} of 7</p>` + //grab index of question array
        `<img src="" alt="">` + //add image
        '</section>' +
        '<form action="#" method="post" class="js-question-form">' +
        `<h2>${question['question']}</h2>` + //grab question from index
        `${generateOptions(question)}` +
        '<input class="js-submit" type="submit" value="Submit">' +
        '<input type="button" class="js-reset" value="Reset">' +
        '</form>' +
        '</main>')
    // })
}
//add to score
function renderFeedback(userAnswer) {
    let trueAnswer = STORE.questions[STORE.counter]['answer']
    console.log(userAnswer, trueAnswer)
    if (userAnswer == trueAnswer) {
        STORE.counter++;
        STORE.score += 14.2857
        $('.js-body').html(
            '<section class="header">' +
            `<h4> score: ${Math.floor(STORE.score)}</h4>` +
            `<p>Question ${STORE.counter + 1} of 7</p>` +
            `<img src="" alt="">` +
            '</section>' +
            '<section class="js-correct">' +
            '<h2 class="success">Correct!</h2>' +
            `<img src="" alt="">` +
            '<button class="js-next">Next</button>' +
            '<button class="js-reset">reset</button>' +
            '</section>'
        )
    } else {
        STORE.counter++;
        $('.js-body').html(
            '<section class="header">' +
            `<h4> score: ${Math.floor(STORE.score)}</h4>` +
            `<p>Question ${STORE.counter + 1} of 7</p>` +
            `<img src="" alt="">` +
            '</section>' +
            '<section class="js-incorrect">' +
            '<h2 class="incorrect">Whoops!</h2>' +
            "<h3>Actually, it is </h3>" +
            `<p>${trueAnswer}</p>` +
            '<button class="js-next">Next</button>' +
            '<button class="js-reset">reset</button>' +
            '</section>'
        )
    }
}

function renderResults() {
    if(Math.floor(STORE.score) == 99){
        STORE.score = 100;
    }
    $('.js-body').html(`<h1> Your Score: ${Math.floor(STORE.score)}%</h1 >`+ '<button class="js-reset">Restart</button>')
}

//js-start-quiz
function start() {
    $('.js-body').on('click', '.js-start-quiz', function () {
        console.log('start triggered');
        $(renderQuestion);
    })
}

// question logic
function generateOptions(question) {
    console.log('hitting generateOptions')
    // console.log(question)
    let answerString = "";
    for (let i = 0; i < question.options.length; i++) {
        answerString += '<div class="input-group">' +
            `<input type="radio" name="answer" id="${question.options[i]}" value="${question.options[i]}">` +
            `<label for="${question.options[i]}">${question.options[i]}</label>` +
            '</div>'
    }
    return answerString
}

//determine answer
function submit() {
    $('.js-body').on('click', '.js-submit', function () {
        event.preventDefault();
        let answer = $("input[name='answer']:checked").val();
        console.log('answer:', answer);
        renderFeedback(answer);
    })
}

//next question
function next() {
    $('.js-body').on('click', '.js-next', function () {
        console.log('hitting next')
        STORE.counter == 7 ? renderResults() : renderQuestion();
    })
}
//reset
function reset() {
    $('.js-body').on('click', '.js-reset', function () {
        STORE.counter = 0;
        STORE.score = 0;
        $('.js-body').html('<h1> How much do you know about coffee ?</h1 > ' +
            '<button class="js-start-quiz">Lets find out!</button>')
    })
}

$(() => {
    $(start)
    $(reset)
    $(submit)
    $(next)
})