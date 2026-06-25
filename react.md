# Apuntes React

React a comparacion de Vainilla JS es que aqui existe el auto-reload de componentes y vistas de html en React por lo mismo no es necesario hacerlo manualmente.

Las apps de react estan hecho en base a componentes. Un componente es una pieza de UI que tiene su propia logica y apariencia. Un componente puede ser `tan pequenio como un boton o tan grande como una pagina entera`

Componentes de React son realmente funciones de Js que regresa un markup (Siempre mayuculas al inicio):

function MyButton() {
    return(
        <button> Im a button </button>
    );
}

Ahora para agregar un componente en otro componente es simplemente:

function MyApp() {
    return(
        <div>
            <h1>Welcome to my first app on React</h1>
            <MyButton />
        </div>
    );
}

Simplementa para agregar el componente es: <nombreComponente />
Ademaes es facil distinguir un componente ya que tiene Mayuscula

Es necesario exportar al main el componente main, por ejemplo en estos ejemplos se exporta MyApp que tambien contiene MyButton

export default MyApp

Por otro lado la sintaxis que se ve que es HTML, en realidad es JSX, es mas estrico que HTML


# Mostrar datos

Al igual que JS es lo mismo aqui, lo unico que cambia es que se maneja con componentes y las variables que se crean u objetos son pasados a componentes y se desarrollan. Por ejemplo:

const user = {
    name: "Gael Lopez",
    edad: 20,
    imgURL: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
};

function Example() {
    return(
        <h1>{user.name}</h1>
    );
}


otro ejemplo:

function OtherExample() {
    return(
        <img className="user" src={user.imgURL}/>
    );
}

# Renderizado condicional

No hay sintaxis especial en Ract, se utiliza mismo JS. Por ejemplo:

let content;
if (isLoggedIn) {
    content = <AdminPanel />;
} else {
    content = <LoginForm />
}

return (
    <div>
        {content}
    </div>
);

# Lista de renderizado

Cuando se tiene un array de productos por ejemplo:

const products = [
    {title: 'Cabbage', id: 1},
    {title: 'Garlic', id: 2},
    {title: 'Apple', id: 3},
];

Dentro de un componente se usa la funcion map() que permite transformar el array de productos a array de li

const listItems = products.map(p => 
    <li key={product.id}> {product.title} </li>);

return(
    <ul>{listItems}</ul>
);

# Respondiendo eventos

Aqui es diferente, como antes se usaba addEventListener pero era del DOM de vainilla y aqui directamente es JSX NO html y los eventos se ponen dentro del JSX y declarativamente.

Basicamente se usa el mismo concepto de crear funcion donde haces algo cuando se escucha el evento, posteriormente se pone onClick o dependiendo el evento en el elemento de JSX, por ejemplo:

<button onClick={nombreDeFuncion}> Presionar </button>;

Un ejemplo mas completo:

function MyButton() {
    function handleClick() {
        alert("You click on me");
    }

    let button = <button onClick={handleClick}> Click on me</button>;

    return(
        <>
        <h5> Aqui otro boton </h5>
        {button}
        </>
    );
}

# Actualizando el DOM

Antes en Vainilla JS se tenia que manualmente modificar una tabla o un elemento para renderizar cuando cambiaba algo dentro del dom (algun dato) Aqui se utiliza la libreria useState permite hacer una variable y una funcion que cambia esa variable, sintaxis inicial:

const [something, setSomething] = useState(firsStateOfSomething);

Depues se cambia eso con la misma funcion por ejemplo

function handleClick() {
    setSomething(newState);
}

return(
    <button onClick={handleClick}> Press me </button>
);

# Uso de Hooks

Los Hooks son todas las funciones propias de React que empiezan con "use" como lo es useState, existen varios pero por ejemplo esta useContext. Algo a destacar es que estas funciones y declaraciones de useState de variables son restrictivas.
l
Es decir no se pueden usar dentro de *ifs* o *loops*. Si se requiere se necesita extraer un nuevo componente y ponerlo ahi dentro. es decir en un componente haces un hook y ya ese componente lo pones dentro del if o loop

# Compartir datos entre componentes

En el ejemplo anterior del hook para que se actualice un contador cada vez que se presione un boton solamente funciona para un componente, si tenemos dos distintos componentes

Para que dos componentes actualice el mismo hook es necesario pensar en que si dos botones que se quiere tener a misma informacion estan dentro de otro componente que los almacena los dos, pues seria valido que este componente "maestro" sea el que tenga el hook, por ejemplo:

function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return(
        <div>
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count} onClick={handleClick}/>
        <div/>
    );
}

function MyButton({ count, onClick}) {
    return(
        <button onClick{onClick}> Button pressed {count} times </button>
    );
}




