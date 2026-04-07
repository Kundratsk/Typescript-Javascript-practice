function introduce (person) {
    console.log("Hi, my name is " + person.name);
    if (person.age >= 18) {
    console.log("I'm an adult");
    } else {
    console.log("I'm a minor");
    }
    if (person.name === "Kristo") {
        console.log("Nice to meet you boss!")
    } else {
        console.log("Nice to meet you!")
    }
}
introduce({ name: "Kristo", age: 23 });