'use client'
import React from 'react';
import Clipboard from 'react-clipboard.js';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Retorno from "./notas/Retorno"

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextUpgr = this.getTextUpgr.bind(this);
        this.state = {            
            ncliente: '',
            ccliente: '',
            volume: '',
            vnota: '',
            nnota: '',
            epagador: '',
            npagador: '',
            cnpjp: '',
            dpagador: '',
            ndestino: '',
            cnpjd: '',
            dendereco: '',
            remessa: '',
            cubagem: '',
            transportadora: '',
            pedidov: '',
        };
    }
    

    getTextUpgr() {
        return `
${this.state.remessa}
Pedido de Venda: ${this.state.pedidov}
${this.state.ccliente} - ${this.state.ncliente}
Volumes: ${this.state.volume} - ${this.state.cubagem}
Objetos: 
${this.state.objeto}

Transportadora: ${this.state.transportadora}

VALOR NF: R$${this.state.vnota} NOTA= ${this.state.nnota}

OBS LOCAL DE COLETA E PAGADOR: ${this.state.npagador} - ${this.state.cnpjp}, Endereço: ${this.state.epagador}

CPNJ DESTINO: ${this.state.cnpjd} - ${this.state.ndestino}, Endereço: ${this.state.dendereco}
`;
    }

    getTextUpgr1() {
        return `
        -Nome
        -Telefone
        -CNPJ ou CPF
        -Horário da Coleta
        -CEP da Coleta
        -Confirmação de Endereço
        -Cidade da Coleta
        -Nome Fantasia(Caso seja empresa)
        -CNPJ ou CPF do Destino
        -Endereço de Entrega
        - Pagador do frete
        - Valor da nota fiscal
        - Peso
        - Quantidade de volumes
        - Medidas dos volumes
        - Qual o tipo de mercadoria?
        - Qual classificação química? (Caso seja químico)
        - Como está embalada?
`;
    }
   
    handleChange9() {
        this.setState({ ncliente: '' });
        this.setState({ ccliente: '' });
        this.setState({ volume: '' });
        this.setState({ objeto: '' });
        this.setState({ vnota: '' });
        this.setState({ nnota: '' });
        this.setState({ epagador: '' });
        this.setState({ npagador: '' });
        this.setState({ cnpjp: '' });
        this.setState({ ndestino: '' });
        this.setState({ cnpjd: '' });
        this.setState({ dendereco: '' });
        this.setState({ remessa: '' })
        this.setState({ cubagem: '' })
        this.setState({ transportadora: '' })
        this.setState({ pedidov: '' })
    }
    render() {
        const { showingretorno } = this.state;
    // const { showingsimples } = this.state;
    const { showinglocacao } = this.state;
        return (
            <div style={{
                padding: '30px', 
                backgroundColor: '#282c34',
                borderColor: 'orange',
                borderStyle: 'solid',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                color: 'white',
                margin: '15px'
            }}>   
            
        <MDBDropdown>
      <MDBDropdownToggle caret color="info">Defina a remessa</MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem link onClick={() => this.setState({ showingretorno: !showingretorno })}>retorno</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => this.setState({ showinglocacao: !showinglocacao })}>locaçao</MDBDropdownItem>
        <MDBDropdownItem link>Something else here</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>

    <div>
              {showingretorno
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingretorno: !showingretorno })}>X</button>
                    </div>
                    <Retorno/>
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showinglocacao
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showinglocacao: !showinglocacao })}>X</button>
                    </div>

                  </div>
                </div>
                : null
              }
            </div>
            </div>
        );
    }
}
