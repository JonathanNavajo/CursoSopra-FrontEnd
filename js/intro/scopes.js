var global = 1;
global2 = 2;

function fn1(){
    var local1 = 3;
    local2 = 4;  //Es global porque no lleva el var
    console.log(global);
    console.log(global2);

    function fn2(){
        console.log(local1);
    }
    fn2();
}

fn1();

console.log(global);
console.log(global2);
console.log(local2);