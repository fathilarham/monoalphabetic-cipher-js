$(document).ready(function () {
    let key
    let phrase
    let final_key
    let encrypted_phrase

    $('#key').keyup(function () {
        if ($('#key').val().length == 0) {
            $('#finalKey').html('')
        } else {
            key = $('#key').val()
            final_key = Array.from(generateKey(key))
            $('#finalKey').html(final_key)
        }
    })

    $('#phrase').keyup(function () {
        if ($('#phrase').val().length == 0) {
            $('#result').html('')
        } else {
            phrase = $('#phrase').val()
            encrypted_phrase = encrypt(phrase, final_key)
            $('#result').html(encrypted_phrase)
        }
    })

    // Encrypt Process Function
    function encrypt(phrase, final_key) {
        let array_phrase = Array.from(phrase)

        array_phrase.forEach(function (character, key) {
            if (toAsci(character) != -64) {
                array_phrase[key] = final_key[toAsci(character) - 1]
            }
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