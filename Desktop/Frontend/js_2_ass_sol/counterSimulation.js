let count = 0;

function increment() {
    count = count + 1;
    console.log(count);
    function inner() {
        count = count + 0;
    }
    inner();
}

function decrement() {
    count = count - 1;
    console.log(count);
    function inner() {
        count = count + 0;
    }
    inner();
}

increment();
increment();
decrement();
