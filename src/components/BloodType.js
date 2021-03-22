import React from "react";

import Button from "./Button";
import Title from "./Title";

const BloodType = ({ title, onPress }) => {
  return (
    <Button
      style={{
        borderRadius: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginHorizontal: 5,
      }}
      onPress={onPress}
    >
      <Title>{title}</Title>
    </Button>
  );
};

export default BloodType;
