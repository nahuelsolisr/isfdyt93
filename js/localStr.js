document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a todos los campos
    const campos = [
        'carrera', 'last_name', 'first_name', 'TipoDocumentoId', 'NumeroDocumento', 'EstadoCivilId',
        'Sexo', 'FechaNacimiento', 'PaisNacionalidadId', 'LocalidadNacimiento',
        'ProvinciaId', 'LocalidadId', 'Distrito', 'CodigoPostal', 'Calle',
        'Altura', 'Piso', 'Departamento', 'Telefono', 'Celular', 'Email','TituloSecundario', 'materias_adeuda', 'descripcion_materias', 'titulo', 'orientacion', 'otorgado_por',
        'anio_egreso', 'promedio', 'TituloTramite', 'MayorTitulo', 'otro_titulo', 'mayor_otorgado_por', 'mayor_promedio',
        'maximo_nivel_educativo_padre', 'maximo_nivel_educativo_madre','Trabaja', 'SectorTrabajo', 'otro_sector_trabajo', 'HorasTrabajoDiario', 'PensionadoJubilado','ViveSolo', 'ViveCon', 'FamiliaresACargo', 'ACargoDe', 'BecaPrograma',
        'EscuchaRadio','MiraTelevision','AsisteObrasTeatros','AsisteMuseos','AsisteConciertos','LecturasFrecuentes','TipoLecturaFrecuente','LecturaEspecializada','OtrasPracticasCulturales','UsaInternet','DondeUsaInternet','UsaRedesSociales','RedesSociales','SitiosFrecuentados','ObraSocialPrepaga','DescripcionObraSocial','TratamientoMedico','DescripcionTratamientoMedico',
        'Medicacion','DescripcionMedicacion','Discapacidad','DescripcionDiscapacidad','EstadoDiscapacidad','Certificado','ContactoEmergencia','TelefonoContacto'
    ];

    // Guardar los valores en localStorage
    function guardarDatos() {
      campos.forEach(function(campo) {
        let valor = document.getElementById(campo).value.trim(); // Obtener el valor del campo
  
        // Verificar si el campo está vacío y reemplazarlo con "false"
        if (valor === '') {
          valor = 'false';
        }
  
        // Guardar el valor en el localStorage
        localStorage.setItem(campo, valor);
      });
    }
  
    // Llamar a la función para guardar los datos al cargar la página
    guardarDatos();
  });