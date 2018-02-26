function simpleMultipliers(x) {
    var j = 0;
    var i = 2;
    var simpleMult = [];
    var count = 0
    do {

        if (x % i == 0 && x != 2) {
            simpleMult[j] = i;
            j++;
            x = x / i;
        } else if (x != 2) {
            i++;
        }
    }
    while (i < x);
    simpleMult[j] = i;
    return simpleMult;
}

function amountSameSimple(base) {
    var simpleMult = simpleMultipliers(base);
    var count = 0;
    var amountSameSimple = {};
    k = simpleMult[0];
    for (var i = 0; i < simpleMult.length; i++) {
        if (k == simpleMult[i]) {
            count += 1;
            amountSameSimple[k] = count;
        } else {
            k = simpleMult[i];
            count = 1;
            amountSameSimple[k] = count;
        }
    }
    return amountSameSimple;
}

function amountSimpleInNumber(number, amountSameSimple) {
    var amountSimpleInNumber = {};
    for (key in amountSameSimple) {
        var numberFromArg = number;
        var count = 0;
        while (numberFromArg >= key) {
            numberFromArg /= key;
            count += Math.floor(numberFromArg);
        }
        amountSimpleInNumber[key] = count;
    }
    return amountSimpleInNumber;

}

function countForCompare(amountSimpleInNumber, amountSameSimple) {
    var countForCompare = [];
    var numberKey = 0;
    for (key in amountSameSimple) {
        countForCompare[numberKey] = amountSimpleInNumber[key] / amountSameSimple[key]
        //print(countForCompare[numberKey]);
        numberKey++;
    }
    return countForCompare;
}

module.exports = function getZerosCount(number, base) {
    var min = Math.min.apply(null, countForCompare(amountSimpleInNumber(number, amountSameSimple(base)), amountSameSimple(base)));
    return Math.floor(min);

}