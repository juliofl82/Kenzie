import { ConvertingForm } from "./ConvertingForm"

export const FormSection = () => {
    return (
        <section className="section-orange section-padding">
            <div className="container sm">
                <h2 className="title md white center">Conheça nosso aplicativo</h2>
                <ConvertingForm />    
            </div>            
        </section>
    )
}