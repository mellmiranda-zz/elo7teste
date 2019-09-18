import React, {PureComponent as Component} from 'react';
import axios from 'axios';

const Localizacao = ({local})=>{
    return(<p className="text cinza">{local?`${local.bairro},${local.cidade},${local.pais}`: "Remoto"}</p>)
}

const Vaga = ({link, cargo, localizacao}) => {
    return (
        <section className="vaga text cinza">
            <a className="cargo verde textLinkVagas" href={link}>{cargo}</a>
            <Localizacao local = {localizacao}/>
        </section>
    )
}
class Vagas extends Component{
    constructor(props){
        super(props)
        this.state = {
            vagas: [],
            error: false,
        }
    }
    
    componentWillMount(){
        const data = axios.get('http://www.mocky.io/v2/5d6fb6b1310000f89166087b')
        .then(res=> this.setState({vagas: res.data.vagas}))
        .catch(error=> this.setState({error: true}))
    }

    getVagas(vagas){
        const listaLimpa = vagas.filter(vaga=> vaga.ativa)
        return listaLimpa
    }

    render(){
        const vagas = this.getVagas(this.state.vagas)
        return( 
            <div className="containerVagas" id="vagaLink">
            <h2 className="subTitle">Vagas em Aberto</h2>
            <h3 className="cinza subTitle subTitleVagas">Desenvolvimento</h3>
            {
                this.state.error ? 
                <div className='alert error'>
                    <p>Ops! Algo de errado não está certo ao listar suas vagas!</p>
                </div> : 
                vagas.map(item=>{   
                    return(
                        <Vaga cargo={item.cargo} link={item.link} localizacao={item.localizacao} />
                    )
                })
            }
        </div>
        )
    }
}


export default Vagas;