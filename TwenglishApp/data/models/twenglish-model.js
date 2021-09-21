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
    bloqueString: 'Bloques'
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