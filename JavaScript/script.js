$(function () {
  const tomb = [];

  beolvas(tomb, "/JSON/termekek.json", termekmegjelenit);
  const kiskosar = new Kosar();



  function beolvas(tomb, filenev, callblack) {

    $.ajax({
      url: filenev, success: function (result) {

        result.forEach(adat => {
          tomb.push(adat);
        });
        callblack(tomb);
      }
    });
  }

  function termekmegjelenit(tomb) {

    const termekek = $('.termekek');
    let sablonElem = $('.termek');


    tomb.forEach(function (tombelem) {
      let ujElem = sablonElem.clone().appendTo(termekek);
      let ujTermek = new TermekVasarlo(ujElem, tombelem);
    })
    sablonElem.remove();

  }

  $(window).on('Kattintas', function (event) {
    //console.log(event.detail);
    kiskosar.setElemKosarba(event.detail);

  })






});


