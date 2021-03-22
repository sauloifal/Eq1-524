import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";

import Box from "../../components/Box";
import Title from "../../components/Title";
import Showcase from "../../components/Showcase";
import BloodType from "../../components/BloodType";
import ModalQuote from "../../components/ModalQuote";

import Bloodtype from "../../assets/bloodtype.svg";

import { Container } from "./styles";

const TipoSanguineo = () => {
  const [tipos, setTipos] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState();
  const [carregando, setCarregando] = useState(true);

  async function carregaTipos() {
    await setTipos([
      {
        type: "A",
        title: "Tipo A",
        description:
          "A galera do tipo sanguíneo A tem o antígeno A nas células vermelhas e os anticorpos B no plasma. Essas pessoas podem doar sangue para os tipos A e AB.",
        font: "FONTE: MegaCurioso",
        fontUrl:
          "https://www.megacurioso.com.br/medicina-e-psicologia/57717-tipos-sanguineos-a-relacao-de-cada-um-com-a-saude-e-a-personalidade.htm#:~:text=O%20tipo%20O%20positivo%20%C3%A9,s%C3%A3o%20doadores%20universais%20de%20plasma.",
      },
      {
        type: "B",
        title: "Tipo B",
        description:
          "O tipo sanguíneo B tem somente antígenos do grupo B nas células vermelhas e anticorpos do tipo A no plasma. Essas pessoas podem doar sangue para quem é dos tipos B e AB.",
        font: "FONTE: MegaCurioso",
        fontUrl:
          "https://www.megacurioso.com.br/medicina-e-psicologia/57717-tipos-sanguineos-a-relacao-de-cada-um-com-a-saude-e-a-personalidade.htm#:~:text=O%20tipo%20O%20positivo%20%C3%A9,s%C3%A3o%20doadores%20universais%20de%20plasma.",
      },
      {
        type: "AB",
        title: "Tipo AB",
        description:
          "Esse grupo sanguíneo tem antígenos A e B nas células vermelhas do sangue, mas não tem anticorpos A ou B no plasma, por isso são os receptores universais.",
        font: "FONTE: MegaCurioso",
        fontUrl:
          "https://www.megacurioso.com.br/medicina-e-psicologia/57717-tipos-sanguineos-a-relacao-de-cada-um-com-a-saude-e-a-personalidade.htm#:~:text=O%20tipo%20O%20positivo%20%C3%A9,s%C3%A3o%20doadores%20universais%20de%20plasma.",
      },
      {
        type: "O",
        title: "Tipo O",
        description:
          "Se seu sangue é do tipo O, significa que você não tem nem o antígeno A nem o B em suas células vermelhas, mas tem tanto os anticorpos A quanto os B em seu plasma. O tipo O positivo é o mais comum; mas somente o O negativo é considerado doador universal, o que significa que quem tem esse tipo sanguíneo pode doar suas células vermelhas para qualquer pessoa, diferente de quem é do tipo AB, que são doadores universais de plasma.",
        font: "FONTE: MegaCurioso",
        fontUrl:
          "https://www.megacurioso.com.br/medicina-e-psicologia/57717-tipos-sanguineos-a-relacao-de-cada-um-com-a-saude-e-a-personalidade.htm#:~:text=O%20tipo%20O%20positivo%20%C3%A9,s%C3%A3o%20doadores%20universais%20de%20plasma.",
      },
    ]);
    setCarregando(false);
  }

  useEffect(() => {
    carregaTipos();
  }, []);

  return (
    <Container>
      <Box>
        <Title style={{ textAlign: "center" }}>
          SELECIONE UM TIPO SANGUÍNEO
        </Title>
        <Showcase>
          {tipos.map(({ type, title, description, font, fontUrl }) => (
            <BloodType
              key={type}
              title={type}
              onPress={() => {
                setCarregando(true);
                setTipoSelecionado({ title, description, font, fontUrl });
                setCarregando(false);
              }}
            />
          ))}
        </Showcase>
        <Bloodtype width={"30%"} height={"30%"} />
      </Box>
      <ScrollView>
        {!tipoSelecionado ? (
          <Title
            style={{
              color: "black",
              alignSelf: "center",
              paddingTop: 10,
              textAlign: "center",
            }}
          >
            Selecione um tipo sanguíneos para obter informações
          </Title>
        ) : (
          <ModalQuote
            titleQuote={tipoSelecionado.title}
            bodyQuote={tipoSelecionado.description}
            quoteFont={tipoSelecionado.font}
            fontUrl={tipoSelecionado.fontUrl}
          />
        )}
      </ScrollView>
    </Container>
  );
};

export default TipoSanguineo;
