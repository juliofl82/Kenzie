import { useState } from "react"

export const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submit = (e) => {
        e.preventDefault();
        console.log({name, email, message });
        setName("");
        setEmail("");
        setMessage("");    
    }
    return(
        <form onSubmit={submit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} cols="30" rows="10"></textarea>
            <button type="submit">Enviar mensagem</button>
        </form>
    )
}