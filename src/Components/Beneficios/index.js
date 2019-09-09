import React, {PureComponent as Component} from 'react';

class Beneficios extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beneficios: [{
                title: 'qualidade de Vida',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit corporis suscipit a eius adipisci enim blanditiis labore tempora accusantium voluptatibus debitis voluptate expedita, necessitatibus, eligendi quae asperiores corrupti at?'
            },
            {
                title: 'Ambiente descontraído',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit corporis suscipit a eius adipisci enim blanditiis labore tempora accusantium voluptatibus debitis voluptate expedita, necessitatibus, eligendi quae asperiores corrupti at?'
            },
            {
                title: 'Atividades Extras',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, velit corporis suscipit a eius adipisci enim blanditiis labore tempora accusantium voluptatibus debitis voluptate expedita, necessitatibus, eligendi quae asperiores corrupti at?'
            },
        ]
        }
    }

    getBeneficios(beneficios) {
        return beneficios.map(ben => <Beneficio title={ben.title} description={ben.description} />)
    }

    render() {
        return(
            <section className="beneficios">
                <div className="lista">
                    {this.getBeneficios(this.state.beneficios)}
                </div> 
                <div className="saiba">
                    <p className="linha"></p>
                    <a className="text verde" href="#">Saiba Mais >></a>
                    <img src="../img/foto-bottom.png"></img>
                </div>
            </section>
        )
    }
}


const Beneficio = ({title, description}) => {
    return (
    <section className="beneficiosColuna">
        <img src="../img/qualidade.png"></img>
        <h2 className="subTitleBeneficios">{title}</h2>
        <p className="textBeneficios">{description}</p>
    </section>)
}


export default Beneficios;