import styles from './Contato.module.css'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

function Contato() { 
    const form = useRef()

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,    // Service ID via variável de ambiente
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,   // Template ID via variável de ambiente
            form.current,
            process.env.REACT_APP_EMAILJS_USER_ID       // User ID via variável de ambiente
        )
        .then(() => {
            alert('Mensagem enviada com sucesso!')
        }, (error) => {
            console.error('Erro:', error.text)
            alert('Ocorreu um erro ao enviar. Tente novamente.')
        })
        e.target.reset() 
    }
    
    return (
        <section className={styles.formulario}>
            <div className={styles.interface}>
                <h2 className={styles.titulo_contato}>Vamos trabalhar juntos?<br/> Entre em contato</h2>

                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='nome' placeholder='Nome:' required />
                    <input type='email' name='email' placeholder='E-mail:' required />
                    <input type='text' name='celular' placeholder='Telefone:' />
                    <textarea name='mensagem' placeholder='Mensagem' required />
                    <div className={styles.btn_enviar}>
                        <input type='submit' value='Enviar' />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contato;
