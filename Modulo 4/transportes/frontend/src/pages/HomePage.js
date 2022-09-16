import React from 'react';
const HomePage=(props)=> {
    return (
        <main className="holder">
            <div>
                <img src="images/home1.jpg" alt="Avion"/>
            </div>
            <div className="columnas">
                <section className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, tempore nostrum? Deleniti suscipit beatae, sint sed ab molestias nisi iste laboriosam magnam temporibus provident dignissimos fugiat expedita dolorum labore perspiciatis.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt hic atque at fugiat odit autem neque, molestias natus libero architecto. Quibusdam soluta tempore numquam illum adipisci natus, consequatur reprehenderit vel?</p>
                </section>
                <section className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Gomez - zapatos.com</span>
                    </div>
                </section>
            </div>
        </main>
    );
}
export default HomePage;