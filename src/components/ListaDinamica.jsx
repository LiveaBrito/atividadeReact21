

function ListaDinamica(){

    const Frutas = (props) =>{
        return <li>This fruit is: {props.itemLista }</li>;
    };

    const nomesFrutas = ["Banana", "Blueberry", "Strawberry"];
    return(
        <>
        <h1>Fruits</h1>
        <ul>
            {nomesFrutas.map((frutas) => <Frutas itemLista={frutas} />)}
        </ul>
        </>
    );
};



export default ListaDinamica;