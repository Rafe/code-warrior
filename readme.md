#Code Warrior !

A platform to practice algorithm questions, in your own editor.

[Code Warrior Questions](http://github.com/Rafe/code-warrior-questions)

## compatable

+ javascript

#### TBD

+ ruby
+ python
+ java

## Installation

    npm install -g code-warrior

## api

    //init project in directory
    war init

    //login with github account
    war login

    //show all questions
    war list

    //start to write a question with basic question
    war new -l [basic|moderate|hard]

    //run test case locally
    war test

    //commit the program, run tests on server side
    war commit

    //open status page
    war status

## Todos:

+ complate questions
+ add view page to view questions and answered record
+ switch to kue/worker structure to run code
+ running savely in vm
+ handle infinity loop
