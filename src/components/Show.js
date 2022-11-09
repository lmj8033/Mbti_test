import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import OrangeButton from './OrangeButton';
import { reset } from '../store/modules/myq';

const Header = styled.p`
  font-size: 2em;
`;
const Explaination = styled.p`
  font-size: 1.2em;
  color: #777;
`;
const Result = styled.p`
  font-size: 3em;
  color: black;
`;
const Additional = styled.p`
  font-size: 2em;
  color: #5170b5;
  font-style: italic;
`;
const AdditionalImg = styled.img`
  width: 270px;
  border-radius: 10px;
`;

export default function Show() {
  const result = useSelector((state) => state.myq.myqResult);
  const explaination = useSelector((state) => state.myq.explaination[result]);
  const dispatch = useDispatch();

  return (
    <>
      <Header>나와 닮은 오버워치 영웅은?</Header>
      <AdditionalImg src={explaination.img} alt="영웅 사진" />
      <Explaination>{explaination.text}</Explaination>
      <Result>{explaination.name}</Result>
      <Additional>"{explaination.voice}"</Additional>
      <OrangeButton
        text="Restart"
        clickEvent={() => {
          dispatch(reset());
        }}
      />
    </>
  );
}
