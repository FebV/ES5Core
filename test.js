function hd(arr) {
    return arr.filter((value) => value < 10).map((val) => val*2).reduce((p, c) => p + c);
}

console.log(hd([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]));