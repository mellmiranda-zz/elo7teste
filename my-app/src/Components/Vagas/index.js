import React, {PureComponent as Component} from 'react';
import axios from 'axios';

const Localizacao = ({local})=>{
    return(<p>{local?`${local.bairro},${local.cidade},${local.pais}`: "Remoto"}</p>)
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
        <section>
            <h2 className="title__vagas">Vagas em Aberto</h2>
            {
                vagas.map(item=>{   
                    return(<div id="vaga">
                        <a href={item.link}>{item.cargo}</a>
                        <Localizacao local = {item.localizacao}/>
                    </div>)
                })
            }
        </section>
        )
    }
}


export default Vagas;