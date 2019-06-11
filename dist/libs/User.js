"use strict";
class User {
    constructor(name) {
        this.SayHello = () => {
            console.log(`Hello ${this.name}!`);
        };
        this.name = name;
    }
}
module.exports = User;
//# sourceMappingURL=User.js.map