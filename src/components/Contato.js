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
                <h2 className={styles.titulo_contato}>FALE <span>COMIGO</span></h2>

                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='nome' placeholder='Seu nome:' required />
                    <input type='email' name='email' placeholder='Seu e-mail:' required />
                    <input type='text' name='celular' placeholder='Seu celular' />
                    <textarea name='mensagem' placeholder='Sua mensagem' required />
                    <div className={styles.btn_enviar}>
                        <input type='submit' value='Enviar' />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contato;
