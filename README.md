# **JAVASCRIPT QUIZ**
Lightweight Web Based Online Quiz



## **Disclaimer**
This project was created for us to learn more about javascript. Everyone is allowed
to use our source-code for his project.



## **Contributors**
@webhistoryy



## **How does it work?**
Every Button has it's own id from 0 - 3 (When you're programming you're start counting from 0).
```HTML
<li><button class="submit-answer" id="0"></button></li>
<li><button class="submit-answer" id="1"></button></li>
<li><button class="submit-answer" id="2"></button></li>
<li><button class="submit-answer" id="3"></button></li>
```

Every Score is set to 0.
```JAVASCRIPT
var questionNumber = 0,
    totalCorrect = 0,
    optionFinal = 0;
```

The Question is built like this, it should be self explaining (**WATCH OUT! We are counting from 0**).
```JAVASCRIPT
 question: 'What is, "5 + 5"',
            choices: ["3", "0", "10", "12"],
            answer: 2}
```
