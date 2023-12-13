function isPalindrome(str) {
    /* Seu código aqui */
    let palavraFrase = str.replace(/\s/g, '').toLowerCase();
    let comprimento = palavraFrase.length;

    for (let i = 0; i < comprimento / 2; i++) {
        if (palavraFrase[i] !== palavraFrase[comprimento - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome())

function arrayMaxMin(arr) {
    /* Seu código aqui */

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min, max];

}

console.log(arrayMaxMin());
