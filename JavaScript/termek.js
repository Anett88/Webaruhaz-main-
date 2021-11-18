class Termek{
constructor(elem,adat){
    this.elem=elem;
    this.adat=adat;

    this.cimElem = this.elem.children('.termeknev');
    this.leirasElem = this.elem.children('.leiras');
    this.arElem = this.elem.children('.ar');
    
  
}


setAdat(ertek){
    this.cimElem.html(ertek.nev);
    this.leirasElem.html(ertek.leiras);
    this.arElem.html(ertek.ar);
    this.kepElem.attr('src', ertek.kep);

  }


}

class TermekAdmin extends Termek{
  constructor(elem,adat){
    super(elem,adat);
    this.kepElem=this.elem.children(".kep").children("img");
    this.gombTorles = this.elem.children('.torles').children("button");//td majd a gyereke(elérsi útja)
    this.gombModosit = this.elem.children('.modosit').children("button");

    this.setAdat(this.adat);
    this.gombTorles.on('click', () => {
      this.torles(); 
    })
    this.gombModosit.on('click', () => {
      this.modosit(); 
    })

  }


  torles() {
    let esemeny = new CustomEvent('Torles', { detail: this.adat })
    window.dispatchEvent(esemeny);
  }
  modosit() {
    let esemeny = new CustomEvent('Modosit', { detail: this.adat })
    window.dispatchEvent(esemeny);
  }

}

class TermekVasarlo extends Termek{
  constructor(elem,adat){
    super(elem,adat);
    this.gombElem = this.elem.children('.kosarba');
    this.kepElem=this.elem.children(".kep");
    this.setAdat(this.adat);
    this.gombElem.on('click', () => {
      this.kattintas(); 
    })



    

  }
  kattintas() {
    let esemeny = new CustomEvent('Kattintas', { detail: this.adat })
    window.dispatchEvent(esemeny);
  }


  
}