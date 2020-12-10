const isPangram = function(text) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    text = text.toLowerCase()

    for (const letter of alphabet) {
        if (!text.includes(letter)) {
            return false;
        }
    }
    return true;
};

module.exports = isPangram;
