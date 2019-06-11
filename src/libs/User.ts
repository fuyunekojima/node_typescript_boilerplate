class User{
    name: string;
    
    constructor(name: string){
        this.name = name;
    }

    SayHello = () => {
        console.log(`Hello ${this.name}!`);
    }
}

export = User;