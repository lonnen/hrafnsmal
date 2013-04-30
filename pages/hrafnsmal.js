var a = 1
try {
    doSomething();
} catch(e) {
    Raven.captureException(e);
}
