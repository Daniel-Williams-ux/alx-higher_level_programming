function getHello() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'https://fourtonfish.com/hellosalut/?lang=fr',
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

getHello()
  .then((data) => {
    $('DIV#hello').html(data.hello);
  })
  .catch((error) => {
    console.log(error)
  })
