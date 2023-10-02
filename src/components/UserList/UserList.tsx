import UserConnected from "../UserConnected/UserConnected"
import styles from './UserList.module.scss'

type userListProps = {
    list : string[];
}

export default function UserList ({ list } : userListProps) {
    return (
        <section className={styles.connected}>
            <h2>User list</h2>
            <ul>
                {list.map((user,index) => 
                    <UserConnected key={index} user={user}/>
                )}
            </ul>
        </section>
    )
}