import React from 'react';
import Button from './Button';
import styled from 'styled-components';

export default function OrangeButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="#fa9c1d"
      // subColor="fa9f1a"
      hoverColor="#ffa62e"
    />
  );
}
