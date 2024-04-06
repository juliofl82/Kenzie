import styles from "./style.module.css"

export const Header = () => {
    return (
        <header>
            <div className={styles.containerHeader}>
                <div>
                    <h1 className="title">Portfólio</h1>
                </div>
                <div>
                    <ul className={styles.menuStyle}>
                        <li>Sobre</li>
                        <li>Stack</li>
                        <li>Projetos</li>
                    </ul>
                </div>
                <div>
                    <button type="button" className="btn btn_font">Contato</button>                    
                </div>
            </div>
        </header>
    );
};