function design(callback) {
    setTimeout(function () {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(function () {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(function () {
        console.log("Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(function () {
        console.log("Deployment completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(function () {
        console.log("Celebration time!");
    }, 1000);
}

design(function () {
    build(function () {
        test(function () {
            deploy(function () {
                celebrate();
            });
        });
    });
});