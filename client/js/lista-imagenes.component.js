angular.module('galeriaImagenes').component('listaImagenes',{
  template: '<ul class="list-group">' +
    '<div ng-repeat="imagen in $ctrl.imagenes" class="row">' +
      '<li class="list-group-item">' +
        '<span class="col-sm-2">{{imagen.nombre}}</span>' +
        '<img src={{imagen.rutaArchivo}} class="col-sm-2" />' +
      '</li>' +
    '</div>' +
  '</ul>',
  controller: function listaImagenesController() {
    this.imagenes = [
      {
        nombre : 'avocado',
        rutaArchivo : 'img/avocado.png'
      },
      {
        nombre : 'allee',
        rutaArchivo : 'img/allee.jpg'
      },
      {
        nombre : 'blume4',
        rutaArchivo : 'img/blume4.jpg'
      },
      {
        nombre : 'blumen3',
        rutaArchivo : 'img/blumen3.JPG'
      },
      {
        nombre : 'kuh1',
        rutaArchivo : 'img/kuh1.jpg'
      },
      {
        nombre : 'meer',
        rutaArchivo : 'img/meer.jpg'
      },
      {
        nombre :'palme',
        rutaArchivo : 'img/palme.JPG'
      },
      {
        nombre : 'sonnenuntergang2',
        rutaArchivo : 'img/sonnenuntergang2.jpg'
      }
    ];
  }
});
