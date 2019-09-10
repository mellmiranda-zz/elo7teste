import React from 'react';

const Time = () =>(
    <div className="timeContainer">
        <section className="timeCeo">
            <section>
                <img src="../img/placeholder-video.png"></img> 
            </section>
            <section className="textContainer">
                <p className="textCEO cinza">Palavas do CEO</p>
                <p className="textNome amarelo">Carlos Curioni</p>
                <p className="text cinza">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero tempore velit non voluptatum cum nesciunt. Dolor quas, iure eos doloremque ullam quasi aperiam labore neque debitis! Ad, veniam!</p>
            </section>
        </section>
        <section className="timeColaboradores">
            <h2 className="subTitle">Conheça nosso time<br></br>fora de série!</h2>
            <section className="timeImg">
                <img src="../img/camila.png"></img>
                <img className="timeImgMargem" src="../img/guto.png"></img>
                <img className="timeImgMargem" src="../img/david.png"></img>
                <img className="timeImgMargem" src="../img/beatriz.png"></img>
            </section>
        </section>
    </div>
)

export default Time;