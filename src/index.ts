import User from "./libs/User";

const main = (): void => {
    let u = new User("Suzuki");
    u.SayHello();
}

(() => {
    main();
})();