import React from 'react';
import './App.css';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdownLink } from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css';

import Retorno from "./notas/Retorno"
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
              {showingretorno
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingretorno: !showingretorno })}>X</button>
                    </div>
                 
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
                    <Locacao/>
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