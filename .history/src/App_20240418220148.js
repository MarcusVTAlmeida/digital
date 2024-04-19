import React from 'react';
import './App.css';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdownLink } from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css';

import Retorno from "./notas/LocacaoRetorno"
import Locacao from "./notas/Locacao"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const { showingretorno } = this.state;
    // const { showingsimples } = this.state;
    const { showinglocacao } = this.state;

    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#282c34' }}>
        <header>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-evenly' }}>
           
        <MDBDropdown>
      <MDBDropdownToggle caret color="info">Defina a remessa</MDBDropdownToggle>
      <MDBDropdownMenu basic>
      <MDBDropdownItem onClick={() => this.setState({ showingCanc: !showingCanc })}>
            </MDBDropdownItem>
        <MDBDropdownItem link onClick={() => this.setState({ showingretorno: !showingretorno })}>retorno</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => this.setState({ showinglocacao: !showinglocacao })}>locaçao</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    <MDBDropdown group>
    <MDBDropdownToggle caret color="info">Defina a remessa</MDBDropdownToggle>
        <MDBDropdownMenu>
        <MDBDropdownItem link onClick={() => this.setState({ showingretorno: !showingretorno })}>retorno</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => this.setState({ showinglocacao: !showinglocacao })}>locaçao</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      
          </div>

          <div style={{ flexDirection: 'column', margin: '5px' }}>
            <div>
              {showingSina
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingSina: !showingSina })}>X</button>
                    </div>
                    <SinalAtenuado />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingLequ
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingLequ: !showingLequ })}>X</button>
                    </div>
                    <LentidaoQuedas />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingDeco
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingDeco: !showingDeco })}>X</button>
                    </div>
                    <DescontoSLARompido />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingSute
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingSute: !showingSute })}>X</button>
                    </div>
                    <SuspencaoTemporaria />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingMugr
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingMugr: !showingMugr })}>X</button>
                    </div>
                    <MudancaEnderecoGrupo />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingUpgr
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingUpgr: !showingUpgr })}>X</button>
                    </div>
                    <Upgrade />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingReco
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingReco: !showingReco })}>X</button>
                    </div>
                    <ReativacaoContrato />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingDesc
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingDesc: !showingDesc })}>X</button>
                    </div>
                    <Desconexao />
                  </div>
                </div>
                : null
              }
            </div>


            <div>
              {showingLent
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingLent: !showingLent })}>X</button>
                    </div>
                    <Lentidao />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingMovel
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingMovel: !showingMovel })}>X</button>
                    </div>
                    <TelefoniaMovel />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingFixo
                ? <div>
                    <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingFixo: !showingFixo })}>X</button>
                    </div>
                    <TelefoniaFixo />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingQued
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingQued: !showingQued })}>X</button>
                    </div>
                    <Quedas />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingProb
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingProb: !showingProb })}>X</button>
                    </div>
                    <ProblemasSites />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingRote
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingRote: !showingRote })}>X</button>
                    </div>
                    <RoteadorDesconfig />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingSenh
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingSenh: !showingSenh })}>X</button>
                    </div>
                    <AlteracaoSenha />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingRedi
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingRedi: !showingRedi })}>X</button>
                    </div>
                    <RedirecionamentoPortas />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingLoss
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingLoss: !showingLoss })}>X</button>
                    </div>
                    <LinkLoss />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingAten
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingAten: !showingAten })}>X</button>
                    </div>
                    <SinalAtenuado />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingDesb
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingDesb: !showingDesb })}>X</button>
                    </div>
                    <Desbloqueio />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingAlte
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingAlte: !showingAlte })}>X</button>
                    </div>
                    <AlterarVencimento />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingNego
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingNego: !showingNego })}>X</button>
                    </div>
                    <NegociacaoDivida />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingFina
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingFina: !showingFina })}>X</button>
                    </div>
                    <ContestacaoFinanceira />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingCanc
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingCanc: !showingCanc })}>X</button>
                    </div>
                    <Cancelamento />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingTran
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingTran: !showingTran })}>X</button>
                    </div>
                    <TransferenciaEndereco />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingEnde
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingEnde: !showingEnde })}>X</button>
                    </div>
                    <AlteracaoEndereco />
                  </div>
                </div>
                : null
              }
            </div>
          </div>
        </header>
      </div>
    );
  }
}


export default App;