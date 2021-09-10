exports.Apartado = {
  name: 'Apartado',
  properties: {
    titulo: 'string?',
    explicacion: 'string?'
  }
}

exports.Apuntes = {
  name: 'Apuntes',
  properties: {
    apartados: 'Apartado[]'
  }
}

exports.Checklist = {
  name: 'Checklist',
  properties: {
    opciones: 'Opcion[]',
    tipo: 'string'
  }
}

exports.Ejercicio = {
  name: 'Ejercicio',
  properties: {
    enunciado: 'string',
    infoextra: 'string?',
    acierto: 'bool',
    pregunta: 'Pregunta[]',
    respuestas: 'Respuestas'
  }
}

exports.Horario = {
  name: 'Horario',
  properties: {
    dias_semana: 'date[]',
    hora: 'date'
  }
}

exports.Leccion = {
  name: 'Leccion',
  properties: {
    tema: 'string',
    explicacion: 'Apuntes',
    total_aciertos: 'int',
    progreso: 'int',
    ejercicios: 'Ejercicio[]',
    portada: 'string',
    // test: 'Ejercicio[]'
  }
}

exports.Listening = {
  name: 'Listening',
  properties: {
    lectura: 'string'
  }
}

exports.Nivel = {
  name: 'Nivel',
  properties: {
    nombre: 'string',
    progreso: 'int',
    lecciones: 'Leccion[]',
    leccion_seleccionada: 'Leccion'
  }
}

exports.Niveles = {
  name: 'Niveles',
  properties: {
    niveles: 'Nivel[]',
    nivel_seleccionado: 'Nivel'
  }
}

exports.Notificacion = {
  name: 'Notificacion',
  properties: {
    titulo: 'string',
    mensaje: 'string'
  }
}

exports.Opcion = {
  name: 'Opcion',
  properties: {
    mostrar: 'data',
    esCorrecta: 'bool'
  }
}

exports.Par = {
  name: 'Par',
  properties: {
    par: 'string[]'
  }
}

exports.Pares = {
  name: 'Pares',
  properties: {
    pares: 'Par[]',
    sonImagenes: 'bool'
  }
}

exports.Planificacion = {
  name: 'Planificacion',
  properties: {
    tiene_plan: 'bool',
    horarios: 'Horario[]',
    notificacion: 'Notificacion'
  }
}

exports.Pregunta = {
  name: 'Pregunta',
  properties: {
    tipo: 'string',
    palabras_clave: 'string[]',
    pregunta: 'data?[]'
  }
}

exports.Respuestas = {
  name: 'Respuestas',
  properties: {
    correcta: 'bool',
    tipo: 'string[]'
  }
}

exports.Sort = {
  name: 'Sort',
  properties: {
    subunidades: 'string[]',
    completa: 'string'
  }
}

exports.Speaking = {
  name: 'Speaking',
  properties: {
    correcta: 'string'
  }
}

exports.Test = {
  name: 'Test',
  properties: {
    ejercicios: 'Ejercicio[]',
    aciertos: 'int',
    resultado: 'Nivel'
  }
}

