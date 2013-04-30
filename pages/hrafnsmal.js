function h() {
    return h;
}

var MAX_STACK_DEPTH = 6,
    functionNames = [
        '_',
        '$',
        'crimsonTwins',
        '$someNodeSelection',
        'realTalk',
        'reticulatingSplines',
        'sms',
        'Zeta'
    ],
    rand = function(max) {
        // returns a random # from 0...max
        return Math.floor(Math.random() * max);
    },
    randChoice = function(arr) {
        return arr[rand(arr.length)];
    }


functionNames.map(function assignProperties(prop) {
    h[prop] = function(times) {
        var args, choice;

        if (times < 1) {
            try {
                var c;
                c[12];
            } catch(e) {
                Raven.captureException(e);
            }
            phantom.exit();
        }

        args = [--times];
        for (var i = 0, l = rand(5); i < l; i++) {
            var argument;
            switch (rand(4)) {
                case 0:
                    argument = rand(256);
                    break;
                case 1:
                    argument = Math.random() * rand(10);
                    break;
                case 2:
                    argument = randChoice(functionNames);
                    break;
                case 3:
                    argument = [];
                    while (Math.random() < .7) {
                        argument.push(rand(256));
                    }
                    break;
                case 4:
                    argument = {};
                    while (Math.random() < .7) {
                        argument[randChoice(functionNames)] = rand(256);
                    }
                    break;
                default:
                    throw new Error('Something went terribly wrong.');
            }
            args.push(argument);
        }

        h[randChoice(functionNames)].apply(this, args);
    };
});

h.realTalk(Math.max(rand(MAX_STACK_DEPTH), 1));
