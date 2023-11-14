document.addEventListener("DOMContentLoaded", function() {
  //titulo
  ocultarContenido('no_titulo_secundario_content');
  ocultarContenido('si_titulo_secundario_content');
  ocultarContenido('horas_trabajo_content');
  


  // Escuchar cambios en el radio button
  var trabajaSiRadio = document.getElementById('trabaja_si');
  var trabajaNoRadio = document.getElementById('trabaja_no');

  var viveSoloSiRadio = document.getElementById('vive_solo_si');
  var viveConContent = document.getElementById('vive_con_content');

  viveSoloSiRadio.addEventListener('change', function() {
    if (viveSoloSiRadio.checked) {
      ocultarContenido('vive_con_content');
    } else {
      mostrarContenido('vive_con_content', 'vive_con_content');
    }
  });

  trabajaSiRadio.addEventListener('change', function () {
    if (trabajaSiRadio.checked) {
      mostrarContenido('sector_trabajo_content', 'sector_trabajo_content');
      mostrarContenido('horas_trabajo_content', 'horas_trabajo_content');
    }
  });

  trabajaNoRadio.addEventListener('change', function () {
    if (trabajaNoRadio.checked) {
      ocultarContenido('sector_trabajo_content');
      ocultarContenido('horas_trabajo_content');
    }
  });
});
//y las funcionas aqui


function bloquearOpciones() {
  var opciones = document.getElementsByName("BecaPrograma");

  for (var i = 1; i < opciones.length; i++) {
      opciones[i].disabled = document.getElementById("ninguno").checked;
  }
}

function mostrarContenido(mostrar, ocultar) {
  var elementosMostrar = document.getElementById(mostrar).children;
  var elementosOcultar = document.getElementById(ocultar).children;

  for (var i = 0; i < elementosOcultar.length; i++) {
    elementosOcultar[i].style.display = "none";
  }

  for (var j = 0; j < elementosMostrar.length; j++) {
    elementosMostrar[j].style.display = "block";
  }
}

function ocultarContenido(ocultar) {
  var elementosOcultar = document.getElementById(ocultar).children;

  for (var i = 0; i < elementosOcultar.length; i++) {
    elementosOcultar[i].style.display = "none";
  }
}
