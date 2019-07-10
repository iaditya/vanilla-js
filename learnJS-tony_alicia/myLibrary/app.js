var g = G$('adi', 'sha');


  $('#login').on('click', function() {

    var loginGtr = G$('adi', 'sha');

    $('#loginDiv').hide();

    loginGtr.setLang($('#lang').val()).HTMLGreeting($('#greeting'), true).log();

  });
