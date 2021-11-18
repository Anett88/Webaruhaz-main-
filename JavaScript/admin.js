$(function(){
    const tomb=[];

    beolvas(tomb,"/JSON/termekek.json",termekmegjelenit);

    function beolvas(tomb,filenev,callblack){
      
        $.ajax({url: filenev, success: function(result){
    
            result.forEach(adat => {
                tomb.push(adat);
            });
            callblack(tomb);
          }});
    }

    function termekmegjelenit(tomb){

        const termekek = $('.tabla');
        let sablonElem=$('.termek');
    
    
        tomb.forEach(function (tombelem) {
            let ujElem = sablonElem.clone().appendTo(termekek);
            let ujTermek = new TermekAdmin(ujElem, tombelem);
          })
          sablonElem.remove();
    
    }


    $(window).on('Torles', function (event) {
        //console.log(event.detail);
        alert("Megnyomva");
    
      })

      $(window).on('Modosit', function (event) {
        //console.log(event.detail);
        alert("Megnyomva");
    
      })







});

