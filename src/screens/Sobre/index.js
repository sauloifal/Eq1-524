import React from "react";

import Title, { Subtitle } from "../../components/Title";

import Heart from "../../assets/heart.svg";

import { Container } from "./styles";

const Sobre = () => {
  return (
    <Container>
      <Heart width={"50%"} height={"50%"} />
      <Title style={{ color: "black" }}>Feito com muito amor!</Title>
      <Subtitle>
        Este projeto foi desenvolvido com o entuito de ajudar e encorajar o
        máximo de pessoas possíveis a concientizarem-se e doarem sangue, esse é
        um ato saudoso e que deve fazer parte do costume de todos nós. Doar
        sangue salva vidas!
      </Subtitle>
    </Container>
  );
};

export default Sobre;
