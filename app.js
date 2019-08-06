console.log("Let's get this party started!");
$(function () {

  const $gifForm = $('#gif-form');
  const $gifContainer = $('.gif-container');
  const $removeButton = $('.btn-danger');

  async function getGif(event) {
    event.preventDefault();

    let gifSearchValue = $('#gif-search').val();
    let response = await axios.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        q: gifSearchValue,
        api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
      }
    });
    
    let randomImageNum = Math.floor(Math.random() * (24));
    $gifContainer.append(`<img src="${response.data.data[randomImageNum].images.fixed_height.url}"/>`);
  }

  

  $removeButton.click(function () {
    console.log('got here!')
    $gifContainer.empty();
  })

  $gifForm.on('submit', getGif);

});

// API Key --> MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym