import profile from './assets/react.svg'

function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profile} alt="profile pic"></img>
            <h1 className="card-title">I am varun</h1>
            <p>My hobbies are playing outdoor games and listening music</p>
        </div>
    );
}

export default Card