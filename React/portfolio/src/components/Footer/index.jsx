import SocialIcons from '../../assets/SocialIcons.svg'

export const Footer = () => {
    return (
        <footer >
            <div className="container footer">
                <div>
                    <h2 className='title2'>Contato</h2> 
                    <img src={SocialIcons} alt="Redes sociais" />
                </div>
                <div>
                    <p className='paragraph'>Todos os direitos reservados - Júlio Figueiredo</p>
                </div>
               
            </div>
        </footer>        
    );
};