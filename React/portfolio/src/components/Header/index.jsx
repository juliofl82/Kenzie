export const Header = () => {
    return (
        <header>
            <div className="container header">
                <div>
                    <h1>Portfólio</h1>
                </div>
                <div>
                    <ul className="menuStyle">
                        <li>Sobre</li>
                        <li>Stack</li>
                        <li>Projetos</li>
                    </ul>
                </div>
                <div>
                    <button type="button" className="btn">Contato</button>                    
                </div>
            </div>
        </header>
    );
};