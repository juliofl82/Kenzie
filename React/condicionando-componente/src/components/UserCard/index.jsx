import styles from "./style.module.css";

export const UserCard = ({ name, email, status }) => {
    const cardClass = `${styles.userCard} ${status === 'Active' ? styles.userCardActive : ''}`;
    return (
        <div className={cardClass}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Status: {status}</p>
        </div>
    )
}