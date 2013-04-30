var rand = function rand(max) {
        // returns a random # from 0...max
        return Math.floor(Math.random() * max);
    },
    randChoice = function randChoice(arr) {
        return arr[rand(arr.length)];
    },
    throwAnError = function throwAnErr() {
        switch (rand(4)) {
            case 0:
                //caught bare exception
                try {
                    var c;
                    c[12];
                } catch(e) {
                    Raven.captureException(e);
                }
                break
            case 1:
                //uncaught bare exception
                var c;
                c[10];
                break
            case 2:
                //message
                Raven.captureMessage('Case 2!');
                break
            case 3:
                //exception plus tags
                Raven.context({tags: {'plus': 'tags', 'other': 'metadata'}},
                              function() { var c; c[10]; });
                break;
            default:
                throw new Error('Something went horribly wrong!');
        }
    },
    next = function next() {
        switch (rand(9)) {
            case 0:
                throwAnError();
                break;
            case 1:
                _();
                break;
            case 2:
                $()
                break;
            case 3:
                crimsonTwins();
                break;
            case 4:
                $someNodeSelection();
                break;
            case 5:
                reticulatingSplines();
                break;
            case 6:
                sms();
                break;
            case 7:
                Zeta();
                break;
            case 8:
                (function(){ next(); })();
                break;
            default:
                throwAnError();
        }
        return;
    }

// lots of duplication here but we can't reuse the same function
// name without getting boring stack traces full of lambdas
function realTalk() { next(); }
function _() { next(); }
function $() { next(); }
function crimsonTwins() { next(); }
function $someNodeSelection() { next(); }
function reticulatingSplines() { next(); }
function sms() { next(); }
function Zeta() { next(); }

realTalk();
