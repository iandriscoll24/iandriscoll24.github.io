const getNewQuote = document.querySelector('#js-new-quote');
getNewQuote.addEventListener('click', getQuote);

function getQuote() {
  const url = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed');
    })
    .then(quote => {
      console.log(quote);
      displayQuote(quote.question);
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

getQuote();