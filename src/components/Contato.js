import styles from './Contato.module.css'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

function Contato() {
    const form = useRef()

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm(
            'service_q0b3mqg',    // exemplo: service_gmail
            'template_gv8pu0l',   // exemplo: template_abcd1234
            form.current,
            'HUM0clmLESDAdco3O'        // seu Public Key
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
                <h2 className={styles.titulo}>FALE <span>COMIGO.</span></h2>

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
