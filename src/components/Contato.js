import styles from './Contato.module.css'


function Contato(){
    return (
        <div>
            
            <section className={styles.formulario}>
                <div className={styles.interface}>
                    <h2 className={styles.titulo}>FALE <span>COMIGO.</span></h2>

                    <form>
                        <input type='text' name='' id='' placeholder='Seu nome:' required/>
                        <input type='email' name='' id='' placeholder='Seu e-mail:' required/>
                        <input type='text' name='' id='' placeholder='Seu celular' />
                        <textarea name='' id='' placeholder='Sua mensagem' required />
                        <div className={styles.btn_enviar}>
                            <input type='submit' value='Enviar' />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contato;