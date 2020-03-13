$(document).ready(function () {
    let key = "we hope you enjoy this book"
    let phrase = "testing"
    let final_key

    $('#key').on('change', function () {
        if ($('#key').val().length == 0) {
            $('#finalKey').html('')
        } else {
            key = $('#key').val()
            final_key = Array.from(generateKey(key))
            $('#finalKey').val(final_key)
        }
    })


    //let encrypted_phrase = encrypt(phrase, final_key)

    // Encrypt Process Function
    function encrypt(phrase, final_key) {
        let array_phrase = Array.from(phrase)

        array_phrase.forEach(function (character, key) {
            // console.log(key)
            array_phrase[key] = final_key[toAsci(character) - 1]
        })

        return array_phrase
    }

    // Key Process Function
    function generateKey(key) {
        // Remove space between words
        let unique_key = Array.from(key.replace(/\s+/g, '').toLowerCase())

        // Create Set Var to remove same characters in string
        let set = new Set()

        unique_key.forEach(function (character) {
            // Add each character to Set datatype
            set.add(character)
        })

        unique_key = Array.from(set)

        let alphabet = 'abcdefghijklmnopqrstuvxyz'

        unique_key.forEach(function (character) {
            alphabet = alphabet.replace(character, '')
        })

        let add_key = Array.from(alphabet)
        shuffle(add_key)

        let final_key = unique_key.join('') + add_key.join('')

        return final_key
    }

    // Shuffle Array Content Function
    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // Transform ASCI to Char Function
    function toChar(asci) {
        return String.fromCharCode(asci + 96)
    }

    // Transform Char to ASCI Function
    function toAsci(char) {
        return char.charCodeAt() - 96
    }

});