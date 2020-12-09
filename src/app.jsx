// -- CON COMPONENTS
'use strict';
class Persona extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: props.nombre, 
            edad: props.edad, 
            ciudad: props.ciudad, 
            defaultEdad: props.edad
        };

        console.log("Persona.")
    }
    componentDidMount() {
        this.setState({ defaultEdad: this.state.edad });
    }
    sumar(event) {
        this.setState({ edad: this.state.edad + 1 })
    }
    restar(event) {
        this.setState({ edad: this.state.edad - 1 })
    }
    reset(event) {
        this.setState({edad: this.state.defaultEdad}) 
    }
    getNombre(){
        return this.state.nombre ? this.state.nombre: 'Anónimo';
    }
    getEdad(){
        return this.state.edad >= 18 ? this.state.edad: 'Eso es carcel, nonono';
    }
    render(){
        return(
            <div>
            <p>Nombre: { this.getNombre() }</p>
            <p>Edad: { this.getEdad() }</p>
            
            <p><button value={this.state.edad} name="edad" onClick={() => this.sumar()}>+1</button><button value={this.state.edad} name="edad" onClick={() => this.restar()}>-1</button><button value={this.state.defaultEdad} name="edad" onClick={() => this.reset()}>reset</button></p>
            </div>
        );
    }
}

ReactDOM.render(<Persona nombre="manolito" edad={33} ciudad="reus"/>, document.getElementById('appRoot'));
// -- SIN COMPONENTS
/*const personas = [
    { nombre: 'Paquita', edad: 12, ciudad: 'Vilaseca' },
    { nombre: 'Paco', edad: 36, ciudad: 'Reus' }
]

const sumar = (e) => {
    personas[0].edad++;
    
    render()

    console.log(personas[0].edad)
}

const restar = (e) => {
    personas[0].edad--;

    render()

    console.log(personas[0].edad)
}

const reset = (e) => {
    personas[0].edad = 29;

    render()

    console.log(personas[0].edad)
}

const writeLocation = (ciudad) => {
    if(ciudad){
        return <p>Ciudad: {ciudad}</p>
    }
}

const appRoot = document.querySelector('#appRoot')

const render = () =>{
    const template = (
        <div>
        <p id="nombre">Nombre: { personas[0].nombre ? personas[0].nombre: 'Anónimo' }</p>
        <p id="edad">Edad: { personas[0].edad >= 18 ? personas[0].edad: 'Eso es carcel, nonono' }</p>
        {writeLocation(personas[0].ciudad)}
        <p><button onClick={sumar}>+1</button><button onClick={restar}>-1</button><button onClick={reset}>reset</button></p>
    </div>
    )

    ReactDOM.render(template, appRoot)
}

render()*/