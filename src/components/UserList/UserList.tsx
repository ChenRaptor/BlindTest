import UserConnected from "../UserConnected/UserConnected"
import styles from './UserList.module.scss'

type userListProps = {
    list : string[];
}

function UserList ({ list } : userListProps) {
    return (
        <section className={styles.connected}>
            <h2>User list</h2>
            <ul>
                {list.map((user,index) => 
                    <UserConnected key={index} index={index} user={user}/>
                )}
            </ul>
        </section>
    )
}

export default UserList