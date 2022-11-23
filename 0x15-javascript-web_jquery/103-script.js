$(document).ready(function() {
  function getHelloBasedOnTranslation(langRegion) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `https://fourtonfish.com/hellosalut/?lang=${langRegion}`,
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

  function getHello() {
    var langRegion =  $('INPUT#language_code').val();
      if (langRegion == null || langRegion == '') {
         console.log('Input required');
         return;
      }
      getHelloBasedOnTranslation(langRegion)
        .then((data) => {
          $('DIV#hello').html(data.hello)
        })
        .catch((error) => {
          console.log(error)
        })
    }

  $('INPUT#language_code').keypress(() => {
      getHello();
  })

  $('INPUT#btn_translate').click(() => {
      getHello();
  })

})
