import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Container, Box, BoxTitle, BoxText, Box2 } from "./lojsStyle";
import Button from '@material-ui/core/Button';
import "./lojaStyle.css";
import {reduxForm, Field} from 'redux-form'
import { connect } from 'react-redux'
import {submitUserAction} from '../actions/users/userAction';


const Loja = ({cardData}, props ) => {

  const handleSubmit = () => props

  
  

  const submit = (data, submitUserAction, evt) => {
    evt.preventDefault();
    submitUserAction(data);
  }

  return (
    <>
      <div style={{ margin: 20 }}>
        <h2 style={{ marginLeft: "10%", fontSize: 30 }}>Produtos</h2>
        <div
          style={{
            borderTop: "1px solid #D3D3D3",
            width: "80%",
            marginLeft: "10%",
            marginTop: 10,
          }}
        ></div>
        <Container>
          {cardData.map((card) => (
            <Box>
              <Card>
                <Card.Img
                  variant="top"
                  src={card.photo}
                  style={{ width: "13rem" }}
                />
                <Card.Body>
                  <Card.Title>
                    <BoxText>{card.name}</BoxText>
                  </Card.Title>
                  <Card.Text style={{ fontWeight: "bold" }}>
                    <BoxTitle>R$ {card.preco}</BoxTitle>
                  </Card.Text>
                  <Card.Text style={{ color: "#A9A9A9" }}>
                    Em até 12x de R$ {card.preco2} <br />
                    R$ {card.preco3} à vista (10% de desconto)
                    <BoxText></BoxText>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Box>
          ))}
        </Container>
      </div>
      <div style={{ margin: 20 }}>
        <h2 style={{ marginLeft: "10%", fontSize: 30 }}>Dados do Cliente</h2>
        <div
          style={{
            borderTop: "1px solid #D3D3D3",
            width: "80%",
            marginLeft: "10%",
            marginTop: 10,
          }}
        ></div>
        <Box2 style={{ marginLeft: "10%", marginTop: 25}}>
          <form onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}>
            
            <Field
            type="text"
            component="input"
            name="name"
              className="medida"
              style={{
                padding: 15,
                borderRadius: 5,
                border: "1px solid #D3D3D3",
                marginRight: 10,
              }}
              placeholder="Nome do cliente"
            />

            <Field
            type="text"
            email="email"
            component="input"
              className="medida"
              style={{
                padding: 15,
                borderRadius: 5,
                border: "1px solid #D3D3D3",
                marginRight: 10,
                marginTop: 10,
              }}
              placeholder="Last name"
            />

            <Form.Control as="select"
            type="select"
            className="medida2"
            style={{
              padding: 15,
              borderRadius: 5,
              border: "1px solid #D3D3D3",
              marginRight: 10,
              marginTop: 10,
            }}
            >
              <option>Selecione</option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </Form.Control>
            <div style={{float: 'right', marginRight: '10%', marginBottom: 200, marginTop: 50}}>
        <h1 style={{fontSize: 30}}>Total: </h1>
        <Button type="submit" style={{backgroundColor: '#FFA500', padding: 18, marginTop: 10, paddingLeft: 30, paddingRight: 30}}><p style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>FINALIZAR COMPRA</p></Button>
        </div>
          </form>
        </Box2>
        
      </div>
    </>
  );
}

const LojaForm = (reduxForm({
  form: 'my-form'
}))(Loja)

const mapStateToProps = state => ({

})

//export default LojaForm;
export default connect(mapStateToProps,{submitUserAction})(LojaForm);
