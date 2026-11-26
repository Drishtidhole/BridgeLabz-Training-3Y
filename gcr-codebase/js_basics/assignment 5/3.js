const user = {
    name: "Drishti",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

const user2 = {
    name: "Drishti",

    showName: function () {
        console.log(this.name);
    }
};

user2.showName();