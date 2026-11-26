function loadProfile() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > 0.3) {
                resolve("Profile Loaded");
            } else {
                reject("Profile Failed");
            }
        }, 2000);
    });
}

function loadPosts() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > 0.3) {
                resolve("Posts Loaded");
            } else {
                reject("Posts Failed");
            }
        }, 1500);
    });
}

function loadMessages() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > 0.3) {
                resolve("Messages Loaded");
            } else {
                reject("Messages Failed");
            }
        }, 1000);
    });
}

async function loadDashboard() {
    const startTime = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    results.forEach(function (result, index) {
        const modules = ["Profile", "Posts", "Messages"];

        if (result.status === "fulfilled") {
            console.log(modules[index] + ":", result.value);
        } else {
            console.log(modules[index] + ":", result.reason);
        }
    });

    const endTime = Date.now();

    console.log("Total Time:", (endTime - startTime) / 1000, "seconds");
}

loadDashboard();