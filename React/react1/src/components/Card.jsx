import './Card.css';

function Card(props){
    console.log("ping me " , props.className);
    return (
        <div className="card">
            {props.children}
        </div>
    );
}

export default Card;