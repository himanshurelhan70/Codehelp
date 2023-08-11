import './User.css';

function UserData(props){
    console.log(props);
    // props is an object containing all the received properties
    return(
        <div className="item">
            <h1>{props.name}</h1>

            <p>{props.day} - {props.month} - {props.year}</p>
            {props.children}
        </div>
    );
}

export default UserData;