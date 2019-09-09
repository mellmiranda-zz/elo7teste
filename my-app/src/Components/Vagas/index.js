import React, {PureComponent as Component} from 'react';
import axios from 'axios';

const Localizacao = ({local})=>{
    return(<p className="textCinza">{local?`${local.bairro},${local.cidade},${local.pais}`: "Remoto"}</p>)
}
class Vagas extends Component{
    constructor(props){
        super(props)
        this.state = {
            vagas:[],
            error:false,
        }
    }
    componentWillMount(){
        const data = axios.get('http://www.mocky.io/v2/5d6fb6b1310000f89166087b')
        .then(res=> this.setState({vagas:res.data.vagas}))
        .catch(error=>this.setState({error:true}))
    }
    getVagas(vagas){
        const listaLimpa = vagas.filter(vaga=> vaga.ativa)
        return listaLimpa
    }
    render(){
        const props = this.props
        const vagas = this.getVagas(this.state.vagas)
        return( 
        <div className="containerVagas">
            <h2 className="subTitle titleVagas">Vagas em Aberto</h2>
            <h2 className="subTitle subTitleVagas">Desenvolvimento</h2>
            {
                vagas.map(item=>{   
                    return(
                    <section id="vaga" >
                        <section className="vagas">
                            <a className="textNomeVaga" href={item.link}>{item.cargo}</a>
                            <Localizacao local = {item.localizacao}/>
                        </section>
                    </section>
                    )
                })
            }
        </div>
        )
    }
}


export default Vagas;