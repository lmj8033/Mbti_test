import Button from './Button';

export default function SkyblueButton({ text, clickEvent }) {
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
