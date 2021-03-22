import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import BloodDonation from "../../assets/blood-donation.svg";
import Happiness from "../../assets/happiness.svg";
import World from "../../assets/world.svg";
import Celebration from "../../assets/celebration.svg";

import { Container } from "./styles";
import Box from "../../components/Box";
import Title, { Subtitle } from "../../components/Title";
import Button from "../../components/Button";
import Showcase from "../../components/Showcase";

const Home = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar style="auto" />
      <Celebration width={"70%"} height={"50%"} />
      <Box>
        <Title>DOAR SANGUE SALVA VIDAS!</Title>
        <Subtitle>
          Transfusões de sangue fazem a diferença entre a vida e a morte para
          centenas de pacientes todos os dias.
        </Subtitle>
        <Showcase>
          <BloodDonation width={32} height={32} />
          <Happiness width={32} height={32} />
          <World width={32} height={32} />
        </Showcase>
        <Button
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate("Mais")}
        >
          <Title>Saiba mais!</Title>
        </Button>
        <Button
          style={{ backgroundColor: "transparent", elevation: 0 }}
          onPress={() => navigation.navigate("Sobre")}
        >
          <Title style={{ fontWeight: "300", fontSize: 16 }}>
            Sobre o projeto!
          </Title>
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
