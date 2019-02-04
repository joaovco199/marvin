function fibonacci(x) {
var fib = [0,1];

for ( i = 2; i <= x; i++) {

fib.push(fib[i - 1] + fib[i - 2]);

}

return fib.splice(1,fib.length);

}


