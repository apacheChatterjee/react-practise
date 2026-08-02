function User(data) {
    console.log("User component data from props: ",data)
    return (
        <div>
        <h2>This is user component.Display user name: {data.name} : {data.id} </h2>
        <UserName/>
        </div>
        )
}
export function UserDetails({userObj}){
    console.log("User object from props: ",userObj)
    return (
        <div>
        <h2>This is user details component</h2>
        <h3>User object from props: {userObj.phone} : {userObj.email} : {userObj.name} : {userObj.id}</h3>
        </div>
        )
    }
export function ToggleUser(){
    return <h2>This is from Toggle User</h2>
    }

function UserName(){
    return <h2>{getName()}</h2>
    }

function getName(){
    return "Satya Bhusan D";
    }
export function NamedComponent(){
    return <h3>This is named component export/import</h3>
    }
export const UserKey = "This is variable import/export.";
export default User