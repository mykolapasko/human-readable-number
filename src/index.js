module.exports = function toReadable (number) {
    const maxDigitsQty = 3

    const coreWords = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty' ,
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety'
    }

    const digits = number.toString().split('').map(item => parseInt(item))

    while (digits.length < maxDigitsQty) {
        digits.unshift(0)
    }

    const hundred = digits[digits.length -3]
    const dozen = digits[digits.length -2]
    const unit = digits[digits.length -1]
   
    const dozenPart = function(arr) {
        if (arr[0] !== 0 && arr[1] === 0) {
            return coreWords[arr.join('')];
        } else if (arr[0] === 0 && arr[1] !== 0) {
            return coreWords[arr[1].toString()]
        } else if (arr[0] === 1 && arr[1] !== 0) {
            return coreWords[arr.join('')];
        } else {
            return coreWords[(arr[0]*10).toString()] + ' ' + coreWords[arr[1].toString()]
        }
    }

    const stringBuilder = function () {
        if (hundred === 0 && dozen === 0 && unit === 0) {
            return coreWords[unit.toString()]
        } else if (hundred === 0 && dozen === 0 && unit !== 0) {
            return dozenPart(digits.slice(1))
        } else if (hundred !== 0 && dozen === 0 && unit === 0) {
            return coreWords[hundred.toString()] + ' hundred'
        } else if (hundred === 0 && dozen !== 0 && unit !== 0) {
            return dozenPart(digits.slice(1))
        } else if (hundred === 0 && dozen !== 0 && unit === 0) {
            return dozenPart(digits.slice(1))
        } else {
            return coreWords[hundred.toString()] + ' hundred ' + dozenPart(digits.slice(1))
        }
    }

    return stringBuilder().trim()
  
}

