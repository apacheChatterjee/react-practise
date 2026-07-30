function User() {
    return (
        <div>
        <h1>This is user component.Display user name: </h1>
        <UserName/>
        </div>
        )
}

function UserName(){
    return <h2>{getName()}</h2>
    }

function getName(){
    return "Satya Bhusan D";
    }

export default User