import React from "react";
import { ScrollView, Linking, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Article, {
  ArticleBody,
  ArticleFont,
  ArticleTitle,
} from "../../components/Article";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Title, { Subtitle } from "../../components/Title";

import Donation from "../../assets/donation.svg";

import { Container } from "./styles";

const OpenURL = async (url) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Não conseguimos abrir esta URL: ${url}`);
  }
};

const Mais = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Box
        styles={{
          alignItems: "flex-start",
          justifyContent: "center",
          paddingLeft: 20,
          position: "relative",
        }}
      >
        <Title>
          Doe {"\n"}SANGUE {"\n"}Doe {"\n"}VIDA
        </Title>
        <Subtitle
          style={{
            textAlign: "left",
            paddingLeft: 0,
            fontSize: 14,
            color: "#343434",
          }}
        >
          Fazer alguém feliz está em suas mãos. Transfusões de sangue fazem a
          diferença entre a vida e a morte para centenas de pacientes todos os
          dias
        </Subtitle>
        <Donation
          width="30%"
          height="30%"
          style={{ position: "absolute", top: 20, right: 10 }}
        />
        <Button
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 15,
            paddingLeft: 15,
            marginTop: 10,
          }}
          onPress={() => navigation.navigate("TipoSanguineo")}
        >
          <Title style={{ fontSize: 14 }}>MEU TIPO SANGUÍNEO</Title>
        </Button>
      </Box>
      <ScrollView showsVerticalScrollIndicator>
        <Article>
          <ArticleTitle>
            DOE SANGUE ANTES DE RECEBER A VACINA CONTRA O COVID-19
          </ArticleTitle>
          <ArticleBody>
            Após a vacina é necessário aguardar: Sinovac/Butantan - 48 horas ||
            AstraZeneca/Fiocruz - 7 dias {"\n"}
            {"\n"}
            Ajude-nos a divulgar esta informação e, se possível, traga sua
            carteira de vacinação.
          </ArticleBody>
          <ArticleFont
            onPress={() => OpenURL("https://www.colsan.org.br/site/")}
          >
            Fonte: COLSAN
          </ArticleFont>
        </Article>
      </ScrollView>
    </Container>
  );
};

export default Mais;
