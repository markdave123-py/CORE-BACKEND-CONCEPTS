const eventEmitter = require('events');

class Event extends eventEmitter {
    // constructor() {
    //     super();
    // }
}

const myEvent = new Event();

const add = (a, b) => {
    console.log("event occured add")
    console.log(a + b)
    return a + b;
}

myEvent.on("foo", ()=>{
    console.log("event occured fooooo")
})

myEvent.on("add", add(1,3))
// myEvent.on("foo", ()=>{
//     console.log("event occured second time")
// })

// myEvent.on("foo", (x)=>{
//     console.log("event occured bar 1")
//     console.log(x)
// })

// myEvent.emit("foo")
// myEvent.emit("foo", "some text")

myEvent.emit("add")