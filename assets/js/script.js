// Class Multimedia
class Multimedia {
  constructor(url) {
    this._url = url;
  }
  getUrl() {
    return this._url;
  }

  setInicio() {}
}

//Class Reproductor extends Multimedia
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }
  getId() {
    return this._id;
  }
  //Tiempo de iniciación
  setInicio(tiempo) {
    let url = this.getUrl();
    url += `?start=${tiempo}`;
    document.getElementById(this.getId()).setAttribute("src", url);
  }
  //Llamado a la IIFE
  playMultimedia() {
    url_id.insertarVideo(this.getUrl(), this.getId());
  }
}

//IIFE (Revisar)
const url_id = (() => {
  let insertaVideo = (url, id) => {
    document.getElementById(id).setAttribute("src", url);
  };
  return {
    insertarVideo: (url, id) => insertaVideo(url, id),
  };
})();

//Links
let musica = new Reproductor(
  "https://www.youtube.com/embed/T2C4kwwmZno",
  "musica"
);
let peliculas = new Reproductor(
  "https://www.youtube.com/embed/ZL_2E-HfIZY",
  "peliculas"
);
let series = new Reproductor(
  "https://www.youtube.com/embed/eyonP1AgC0k",
  "series"
);

//AddEventListener, click, playMultimedia
let cartaMusica = document.getElementById("cartaMusica");
let cartaPelicula = document.getElementById("cartaPelicula");
let cartaSerie = document.getElementById("cartaSerie");

cartaMusica.addEventListener("click", function () {
  musica.playMultimedia();
});

cartaPelicula.addEventListener("click", function () {
  peliculas.playMultimedia();
  peliculas.setInicio("10");
});

cartaSerie.addEventListener("click", function () {
  series.playMultimedia();
});
