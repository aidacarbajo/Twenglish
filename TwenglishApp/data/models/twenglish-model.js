exports.Apartado = {
  name: 'Apartado',
  properties: {
    titulo: 'string?',
    listaVocabulario: 'ApartadoVoc[]',
    listaGramatica: 'ApartadoGram[]'
  }
}

exports.ApartadoGram = {
  name: 'ApartadoGram',
  properties: {
    titulo: 'string?',
    explicacion: 'string?',
    ejemplo: 'string?'
  }
}

exports.ApartadoVoc = {
  name: 'ApartadoVoc',
  properties: {
    palabra: 'string',
    traduccion: 'string'
  }
}

exports.Apuntes = {
  name: 'Apuntes',
  properties: {
    apartados: 'Apartado[]'
  }
}

exports.Bloques = {
  name: 'Bloques',
  properties: {
    frase: 'string?',
    opcionesClave: 'string[]',
    imagenes: 'string[]'
  }
}

exports.Ejercicio = {
  name: 'Ejercicio',
  primaryKey: '_id',
  properties: {
    _id: 'int',
    enunciado: 'string?',
    intentos: 'int',
    tipo: 'int',
    bloqueString: 'Bloques',
    bloqueRadioButton: 'RadioButton',
    bloquePares: 'Pares'
  }
}

exports.Leccion = {
  name: 'Leccion',
  properties: {
    tema: 'string?',
    explicacion: 'Apuntes',
    progreso: 'int',
    portada: 'string',
    ejercicios: 'Ejercicio[]'
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

exports.Opcion = {
  name: 'Opcion',
  properties: {
    frase: 'string?',
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
    pares: 'Par[]'
  }
}

exports.RadioButton = {
  name: 'RadioButton',
  properties: {
    opciones: 'Opcion[]'
  }
}

