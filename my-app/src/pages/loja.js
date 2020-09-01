import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Container, Box, BoxTitle, BoxText } from "./lojsStyle";
import Input from '@material-ui/core/Input';

function Loja({ cardData }) {
  return (
    <>
    <div style={{ margin: 20 }}>
      <h2>Produtos</h2>
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
                <Card.Text style={{ color: "#ccc" }}>
                  Em até 12x de R$ {card.preco2} <br />
                  R$ {card.preco3} à vista (10% de desconto)<BoxText></BoxText>
                </Card.Text>
              </Card.Body>
            </Card>
          </Box>
        ))}
      </Container>
    </div>
    <div style={{ margin: 20 }}>
    <h2>Dados do Cliente</h2>
      <div style={{margin: 100}}>
      <Input style={{border: '1px solid #ccc'}} placeholder='Nome do Cliente aqui'>Digite aqui
          </Input>
      </div>
      
    </div>
    </>
  );
}

export default Loja;
