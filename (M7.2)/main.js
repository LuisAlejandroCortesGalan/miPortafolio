function ip() {
    var p = false;
    var n = prompt("Escoge un número: ");
    if (n > 1) {
        p = ep(n);
    }
    alert(p);
}


function ep(n) {
    let p = true;
    let i = 2;
    while (p && i < n) {
        if (n % i == 0) {
            p = false;
        }
        i++;
    }
    return p;
}
