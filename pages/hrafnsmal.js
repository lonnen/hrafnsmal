function h() {
    return h;
}

var functionNames = [
    '_',
    '$',
    'crimsonTwins',
    '$someNodeSelection',
    'realTalk',
    'reticulatingSplines',
    'sms',
    'Zeta'
];

functionNames.map(function assignProperties(prop) {
    h[prop] = function() {
        var rand = function(max) {
            // returns a random # from 0...max
            return Math.floor(Math.random() * max);
        }

        if (rand(6) === rand(6)) {
            try {
                var c;
                c[12];
            } catch(e) {
                Raven.captureException(e);
            }
            phantom.exit();
        }

        var choice = functionNames[rand(functionNames.length)];
        console.log(choice);
        h[choice]();
    };
});

h.realTalk();
