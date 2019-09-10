import React from 'react';
const Beneficios = () =>(
    <div>
        <section className="lista">
            <section className="beneficiosColuna textBeneficios">
                <img src="../img/qualidade.png"></img>
                <h2 className="subTitleBeneficios">qualidade de Vida</h2>
                <p className="textBeneficios">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit corporis suscipit a eius adipisci enim blanditiis labore tempora accusantium voluptatibus debitis voluptate expedita, necessitatibus, eligendi quae asperiores corrupti at?</p>
            </section>
            <section className="beneficiosColuna textBeneficios">
                <img src="../img/descontracao.png"></img>
                <h2 className="subTitleBeneficios">Ambiente descontraído</h2>
                <p className="textBeneficios">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit corporis suscipit a eius adipisci enim blanditiis labore tempora accusantium voluptatibus debitis voluptate expedita, necessitatibus, eligendi quae asperiores corrupti at?</p>
            </section>
            <section className="beneficiosColuna textBeneficios">
                <img src="../img/atividades.png"></img>
                <h2 className="subTitleBeneficios">Atividades Extras</h2>
                <p className="textBeneficios">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit corporis suscipit a eius adipisci enim blanditiis labore tempora accusantium voluptatibus debitis voluptate expedita, necessitatibus, eligendi quae asperiores corrupti at?</p>
            </section>
        </section>
        <section className="saibaColuna" >
            <p className="cinza">_____________________________</p>
            <a className="text verde textLink" href="#">Saiba Mais >></a>
            <img className="imagemFesta"src="../img/foto-bottom.png"></img>
        </section>
    </div>
)

export default Beneficios;