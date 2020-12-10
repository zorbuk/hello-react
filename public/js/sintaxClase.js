class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    getDescription(){
        return `Mi nombre es ${this.name} y mi edad es de ${this.age} años.`
    }
}

const alguien = new Person('NombrePersona', 35)
console.log(alguien.getDescription())

class Libro {
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
    }
}
class Estanteria {
    constructor(libros){
        this.libros = libros
    }
    getLibros(){
        this.libros.forEach(libro => {
            console.log(libro.titulo, libro.autor)
        });
    }
}

const estanteriaA = new Estanteria([])
const estanteriaB = new Estanteria([])

estanteriaA.libros.push(new Libro('La La Lan', 'Alguien'))
estanteriaA.libros.push(new Libro('La L12a Lan', 'Alguie123n'))
estanteriaA.libros.push(new Libro('La asdf Lan', 'Algu2ien'))
estanteriaB.libros.push(new Libro('La La asdfsdf', 'Algu3ien'))
estanteriaB.libros.push(new Libro('adsfasdffd La Lan', 'Algu3ien'))
estanteriaB.libros.push(new Libro('La 23423423423 Lan', 'Algui4en'))
estanteriaA.libros.push(new Libro('adsf adsf Lan', 'Alg6346uien'))

estanteriaA.getLibros();
estanteriaB.getLibros();