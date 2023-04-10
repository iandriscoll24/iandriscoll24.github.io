const getNewQuote = document.querySelector('#js-new-quote');
getNewQuote.addEventListener('click', getQuote);

function getQuote() {
  const url = 'https://animechan.vercel.app/api/random';
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed');
    })
    .then(quote => {
      console.log(quote);
      displayQuote(quote.quote);
      displayCharacter(quote.character);
      displayAnime(quote.anime);
    })
    .catch(error => {
      console.error(error);
      alert('Failed');
    });
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
  }

  function displayCharacter(character) {
    const characterText = document.querySelector('#js-quotecharacter-text');
    characterText.textContent = character;
  }

function displayAnime(anime) {
  const animeText = document.querySelector('#js-quoteanime-text');
  animeText.textContent = anime;
}

getQuote();