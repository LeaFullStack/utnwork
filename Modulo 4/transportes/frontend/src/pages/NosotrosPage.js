import React from 'react';
import '../styles/pages/NosotrosPage.css';
const NosotrosPage=(props)=> {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quam dolores repellendus nostrum, possimus aut nisi a non corrupti illo velit adipisci fuga ut libero maiores veniam aliquid quae quia?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis fugiat possimus sunt totam facilis sequi nemo aperiam esse culpa nam rerum, ad consectetur sit repellat eaque recusandae ipsum autem doloremque.</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="images/nosotros1.jpg" alt="Juan Gomez"/>
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, obcaecati. Nisi omnis non vel, saepe impedit reprehenderit autem nemo earum quidem ullam soluta aspernatur obcaecati distinctio, voluptate dolore laudantium maiores?</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros2.jpg" alt="Diana Reyes"/>
                        <h5>Diana Reyes</h5>
                        <h6>Gerente Comercial</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, obcaecati. Nisi omnis non vel, saepe impedit reprehenderit autem nemo earum quidem ullam soluta aspernatur obcaecati distinctio, voluptate dolore laudantium maiores?</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros3.jpg" alt="Roberto Zaptos"/>
                        <h5>Roberto Zaptos</h5>
                        <h6>Gerente de Sistemas</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, obcaecati. Nisi omnis non vel, saepe impedit reprehenderit autem nemo earum quidem ullam soluta aspernatur obcaecati distinctio, voluptate dolore laudantium maiores?</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros4.jpg" alt="Sandra Mastropiero"/>
                        <h5>Sandra Mastropiero</h5>
                        <h6>Gerente de Marketing</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, obcaecati. Nisi omnis non vel, saepe impedit reprehenderit autem nemo earum quidem ullam soluta aspernatur obcaecati distinctio, voluptate dolore laudantium maiores?</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros5.jpg" alt="Luciano Figuero"/>
                        <h5>Luciano Figuero</h5>
                        <h6>Gerente Logistica</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, obcaecati. Nisi omnis non vel, saepe impedit reprehenderit autem nemo earum quidem ullam soluta aspernatur obcaecati distinctio, voluptate dolore laudantium maiores?</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default NosotrosPage;