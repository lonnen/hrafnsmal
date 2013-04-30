var page = require('webpage').create(),
    system = require('system'),
    uri = require('URIjs'),
    address;

if (system.args.length === 1) {
    console.log('Usage: netlog.js <some URL>');
    phantom.exit(1);
} else {
    address = system.args[1];

    page.onResourceRequested = function (req) {
        var url = req.url,
            parsed;
        if (!(/sentry/).test(url)) {
            return;
        }
        parsed = uri(url);
        console.log(JSON.stringify(parsed._parts, undefined, 4));
    };

    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
        }
        phantom.exit();
    });
}
