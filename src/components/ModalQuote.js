import React from "react";
import { Linking } from "react-native";
import styled from "styled-components/native";

import Article, { ArticleBody, ArticleFont, ArticleTitle } from "./Article";

const Quote = styled.View`
  padding: 5px 10px;
  border-radius: 15px;
  margin: 10px;

  background-color: darkgray;
`;

const ModalQuote = ({ titleQuote, bodyQuote, quoteFont, fontUrl }) => {
  const OpenURL = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Não conseguimos abrir esta URL: ${url}`);
    }
  };

  return (
    <Quote>
      <Article>
        <ArticleTitle>{titleQuote}</ArticleTitle>
        <ArticleBody>{bodyQuote}</ArticleBody>
        <ArticleFont onPress={() => OpenURL(fontUrl)}>{quoteFont}</ArticleFont>
      </Article>
    </Quote>
  );
};

export default ModalQuote;
