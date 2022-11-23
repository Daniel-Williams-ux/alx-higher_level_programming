function getCharacterName() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'https://swapi-api.hbtn.io/api/people/5/?format=json',
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

getCharacterName()
  .then((data) => {
    $('DIV#character').html(data.name);
  })
  .catch((error) => {
    console.log(error)
  })
