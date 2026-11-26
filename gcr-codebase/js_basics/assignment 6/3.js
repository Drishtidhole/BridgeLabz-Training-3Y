function getBugs() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const apiSuccess = Math.random() > 0.3;

            if (apiSuccess) {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            } else {
                reject("Failed to fetch bugs from API");
            }
        }, 1000);
    });
}

getBugs()
    .then(function (bugs) {
        console.log("Bug List:");
        console.table(bugs);
    })
    .catch(function (error) {
        console.log("Error:", error);
    });