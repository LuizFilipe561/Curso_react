import styles from './Frase.module.css'

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>this is component with a pharase</p>
        </div>
    )
}
export default Frase