function serverA() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > 0.2) {
                resolve("Server A completed deployment");
            } else {
                reject("Server A deployment failed");
            }
        }, 2000);
    });
}

function serverB() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > 0.2) {
                resolve("Server B completed deployment");
            } else {
                reject("Server B deployment failed");
            }
        }, 3000);
    });
}

const deploymentA = serverA();
const deploymentB = serverB();

Promise.all([deploymentA, deploymentB])
    .then(function (results) {
        console.log(results);
        console.log("Deployment completed for all servers");
    })
    .catch(function (error) {
        console.log("Deployment Error:", error);
    });

Promise.race([serverA(), serverB()])
    .then(function (result) {
        console.log("Fastest response:", result);
    })
    .catch(function (error) {
        console.log("Fastest response failed:", error);
    });