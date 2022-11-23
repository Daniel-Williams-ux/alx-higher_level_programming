function getMovieTitle() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'https://swapi-api.hbtn.io/api/films/?format=json',
      type: 'GET',
      data: {
        key: 'value',
      },
      success: function (data) {
        resolve(data)
      },
      error: function (error) {
        reject(error)
      },
    })
  })
}

getMovieTitle()
  .then((data) => {
    var filmResult = data.results;

    filmResult.forEach((film, i) => {
        $('UL#list_movies').append(`<li>${film.title}</li>`)
    });
  })
  .catch((error) => {
    console.log(error)
  })
