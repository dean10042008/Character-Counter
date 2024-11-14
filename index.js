const [ textareaEl, resultEl, letterList ] = document.querySelectorAll('textarea, #result, #letter-list');

textareaEl.addEventListener("keyup", () => {
    const text = textareaEl.value;
    letterList.innerHTML = '';

    const letters = {};

    for (const letter of text) {
        if (letters.hasOwnProperty(letter))
            letters[letter]++;
        else {
            letters[letter] = 1;
        }
    }

    if (text.length === 1) {
        resultEl.textContent = `There is ${text.length} character in the provided text.`;
    }
    else {
        resultEl.textContent = `There are ${text.length} characters in the provided text.`;
    }

    const sortedLetters = Object.entries(letters).sort((a, b) => b[1] - a[1]);

    const totalCount = sortedLetters.reduce((acc, letter) => acc + letter[1]);
    
    sortedLetters.map(([ letter, count ]) => {
        const li = document.createElement('li');
        li.textContent = `"${letter}": ${count} (${((count / text.length) * 100).toFixed()}%)`;
        letterList.appendChild(li);
    });
});