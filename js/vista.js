document.addEventListener("DOMContentLoaded", function() {
  //titulo
  ocultarContenido('no_titulo_secundario_content');
  ocultarContenido('si_titulo_secundario_content');
  ocultarContenido('horas_trabajo_content');
  ocultarContenido('sector_trabajo_content');
  ocultarContenido('horas_trabajo_content');


  ocultarContenido('descripcion_obra_social_content');
  ocultarContenido('descripcion_tratamiento_medico_content');
  ocultarContenido('descripcion_medicacion_content');
  ocultarContenido('descripcion_discapacidad_content');
  ocultarContenido('estado_discapacidad_content');
  ocultarContenido('certificado_discapacidad_content');
  
  var trabajaSiRadio = document.getElementById('trabaja_si');
  var trabajaNoRadio = document.getElementById('trabaja_no');

  var viveSoloSiRadio = document.getElementById('vive_solo_si');
  var viveSoloNORadio = document.getElementById('vive_solo_no');

  var obraSocialSiRadio = document.getElementById('obra_social_si');
  var obraSocialNoRadio = document.getElementById('obra_social_no');

  var discapacidadSiRadio = document.getElementById('discapacidad_si');
  var discapacidadNoRadio = document.getElementById('discapacidad_no');

  var tratamientoSiRadio = document.getElementById('tratamiento_medico_si');
  var tratamientoNoRadio = document.getElementById('tratamiento_medico_no');

  var medicacionSiRadio = document.getElementById('medicacion_si');
  var medicacionNoRadio = document.getElementById('medicacion_no');

  



  viveSoloSiRadio.addEventListener('change', function() {
    if (viveSoloSiRadio.checked) {
      ocultarContenido('vive_con_content');
      ocultarContenido('familia_aCargo_content');
    } else {
      mostrarContenido('familia_aCargo_content' ,'familia_aCargo_content')
    }
  });
  viveSoloNORadio.addEventListener('change', function() {
    if (viveSoloSiRadio.checked) {
      ocultarContenido('vive_con_content');
      ocultarContenido('familia_aCargo_content');
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



  obraSocialSiRadio.addEventListener('change', function () {
    if (obraSocialSiRadio.checked) {
      mostrarContenido('descripcion_obra_social_content', 'descripcion_obra_social_content');

    }
  });

  obraSocialNoRadio.addEventListener('change', function () {
    if (obraSocialNoRadio.checked) {
      ocultarContenido('descripcion_obra_social_content');

    }
  });





  discapacidadSiRadio.addEventListener('change', function () {
    if (discapacidadSiRadio.checked) {
      mostrarContenido('descripcion_discapacidad_content', 'descripcion_discapacidad_content');
      mostrarContenido('estado_discapacidad_content', 'estado_discapacidad_content');
      mostrarContenido('certificado_discapacidad_content', 'certificado_discapacidad_content');

    }
  });

  discapacidadNoRadio.addEventListener('change', function () {
    if (discapacidadNoRadio.checked) {
      ocultarContenido('descripcion_discapacidad_content');
      ocultarContenido('estado_discapacidad_content');
      ocultarContenido('certificado_discapacidad_content');

    }
  });



  tratamientoSiRadio.addEventListener('change', function () {
    if (tratamientoSiRadio.checked) {
      mostrarContenido('descripcion_tratamiento_medico_content', 'descripcion_tratamiento_medico_content');

    }
  });

  tratamientoNoRadio.addEventListener('change', function () {
    if (tratamientoNoRadio.checked) {
      ocultarContenido('descripcion_tratamiento_medico_content');

    }
  });

  medicacionSiRadio.addEventListener('change', function () {
    if (medicacionSiRadio.checked) {
      mostrarContenido('descripcion_medicacion_content', 'descripcion_medicacion_content');

    }
  });

  medicacionNoRadio.addEventListener('change', function () {
    if (medicacionNoRadio.checked) {
      ocultarContenido('descripcion_medicacion_content');

    }
  });


});



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
