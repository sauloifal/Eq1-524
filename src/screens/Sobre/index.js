/*/ import React from "react";

import Title, { Subtitle } from "../../components/Title";

import Heart from "../../assets/heart.svg";

import { Container } from "./styles";

const Sobre = () => {
  return (
    <Container>
      <Heart width={"50%"} height={"50%"} />
      <Title style={{ color: "black" }}>Feito com muito amor!</Title>
      <Subtitle>
        Este projeto foi desenvolvido com o intuito de ajudar e encorajar o
        máximo de pessoas possíveis a concientizarem-se e doarem sangue, esse é
        um ato saudoso e que deve fazer parte da rotina de todos nós. Doar
        sangue salva vidas!
      </Subtitle>
    </Container>
  );
};

export default Sobre;
/*/

import React from "react";
import { ScrollView, Linking, Alert, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Article, {
  ArticleBody,
  ArticleBody2,
  ArticleBody3,
  ArticleFont,
  ArticleTitle,
} from "../../components/Article";
import Box from "../../components/Box";
import Title, { Subtitle } from "../../components/Title";

import Donation from "../../assets/donation.svg";
import Heart from "../../assets/heart.svg";

import { Container} from "./styles";

const OpenURL = async (url) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Não conseguimos abrir esta URL: ${url}`);
  }
};

const Sobre = () => {
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
          MITOS & VERDADES {"\n"} SOBRE A DOAÇÃO
        </Title>
        <Donation
          width="20%"
          height="20%"
          style={{ position: "absolute", top: 20, right: 10 }}
        />

        <Article>
          <ArticleBody2>
            MITO: Quem tem piercing e tatuagem não pode doar;{"\n"}
            VERDADE: Pessoas com menos de 50 kg não podem doar;{"\n"}
            MITO: Mulheres não pode doar sangue durante a menstruação;{"\n"}
            VERDADE: É preciso não ingerir alcoólicos antes de doar sangue.{"\n"}
          </ArticleBody2>
        </Article>
        
      </Box>
      <ScrollView showsVerticalScrollIndicator>
      

      <Container>
      <Heart
          width={70}
          height={70}
          style={{ top: 20, }} />
          
      <Title style={{ color: "black", fontSize: 22, margintop: 10}}>{"\n"}Feito com muito amor!</Title>
      
      <ArticleBody3>
      Este projeto foi desenvolvido com o intuito de ajudar e encorajar o
        máximo de pessoas possíveis a se concientizarem e doarem sangue, esse é
        um ato saudoso e que deve fazer parte da rotina de todos nós. Doar
        sangue salva vidas! {"\n"} {"\n"}
        Desenvolvido por:
        Antônio Vitor, 
        Karolinny Oliveira,
        Maria Vitória e
        Saulo Teixeira. 
        {"\n"}
        {"\n"}
        </ArticleBody3>

        </Container>
        
        
      
    

      </ScrollView>
    </Container>
  );
};

export default Sobre;
