function submitOrder() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > 0.5) {
                resolve("Order submitted successfully");
            } else {
                reject("Order submission failed");
            }
        }, 1000);
    });
}

async function processOrder() {
    let success = false;

    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const result = await submitOrder();

            console.log("Attempt " + attempt + ": Success");
            console.log(result);

            success = true;
            break;

        } catch (error) {
            console.log("Attempt " + attempt + ": Failed");
        }
    }

    if (!success) {
        throw new Error("Order could not be processed");
    }
}

async function main() {
    try {
        await processOrder();
    } catch (error) {
        console.log("Final Error:", error.message);
    }
}

main();