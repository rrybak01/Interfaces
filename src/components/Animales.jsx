import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import {
  TitulosTablaAnimales,
  DatosTablaAnimales,
} from '../data/DatosAnimales';

class Animales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: 0,
    };
  }

  cambiaTarjeta(pulsado) {
    for (let i = 0; i < DatosTablaAnimales.length; i++) {
      if (pulsado == DatosTablaAnimales[i].Nombre) {
        this.setState({ animal: i });
        break;
      }
    }
  }
  render() {
    return (
      <div className="main-site">
        <h1>Animales</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>{TitulosTablaAnimales.Nombre}</th>
                    <th>{TitulosTablaAnimales.Cabezas}</th>
                    <th>{TitulosTablaAnimales.Prevision2025}</th>
                    <th>{TitulosTablaAnimales.Prevision2030}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaAnimales.map((item) => {
                    return (
                      <tr onClick={() => this.cambiaTarjeta(item.Nombre)}>
                        <td>{item.Nombre}</td>
                        <td>{item.Cabezas}</td>
                        <td>{item.Prevision2025}</td>
                        <td>{item.Prevision2030}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={DatosTablaAnimales[this.state.animal].imagen}
                />
                <Card.Body>
                  <Card.Title>
                    {DatosTablaAnimales[this.state.animal].Nombre}
                  </Card.Title>
                  <Card.Text>
                    Cabezas: {DatosTablaAnimales[this.state.animal].Cabezas}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Animales;
