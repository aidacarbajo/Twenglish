import { OptionButton } from "../Buttons/OptionButton";
import { OptionSelectedButton } from "../Buttons/OptionSelectedButton";
import React from 'react';

export const Checklist = (props) => {

  const list = () => {
    return props.opciones.map((element) => {
        // console.log(element);
        if(element.key === "1") {
            return (
                <OptionSelectedButton key={element.key} title={element.title}></OptionSelectedButton>
              );        
        } else {
            return (
                <OptionButton key={element.key} title={element.title}></OptionButton>
              ); 
        }

    });
  };

  // hacer functionamiento onPress para cambiar de Selected a noSelected

  return (
    list()
  );
};

