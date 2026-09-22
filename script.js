function palindroma(str) {
    str = str.toLowerCase().replace(/\W/g, "");

    let invertita = "";

    for (let i = str.length - 1; i >= 0; i--) {
        invertita += str[i];
    }

    return str === invertita;
}

console.log(palindroma("i topi non avevano nipoti"));