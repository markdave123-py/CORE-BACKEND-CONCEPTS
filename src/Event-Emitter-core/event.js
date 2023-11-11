const eventEmitter = require('events');

class Event extends eventEmitter {
    // constructor() {
    //     super();
    // }
}

const myEvent = new Event();

myEvent.on("foo", ()=>{
    console.log("event occured")
})
myEvent.on("foo", ()=>{
    console.log("event occured second time")
})

myEvent.on("foo", (x)=>{
    console.log("event occured bar 1")
    console.log(x)
})

myEvent.emit("foo")
myEvent.emit("foo", "some text")