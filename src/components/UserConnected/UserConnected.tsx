function UserConnected ({user,index}:{user:string; index:number}) {
    return (
        <li>Un joueur {user} n°{index}</li>
    )
}

export default UserConnected