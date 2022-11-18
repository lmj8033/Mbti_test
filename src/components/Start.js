import { useDispatch } from 'react-redux';
import { next, init } from '../store/modules/myq';
import { useState, useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';
import OrangeButton from './OrangeButton';

const Header = styled.p`
  font-size: 3em;
`;

const MainImg = styled.img`
  width: 5em;
  margin-top: 10vw;
`;

const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;
`;

export default function Start() {
  const [counts, setCounts] = useState(0);

  const dispatch = useDispatch();

  function makeData(survey, explanation) {
    const initData = { survey: [], explanation: {} };
    if (initData.survey.length === 0) {
      for (let i = 0; i < survey.length; i = i + 2) {
        initData.survey.push({
          question: survey[i].QUESTION_TEXT,
          answer: [
            {
              text: survey[i].ANSWER_TEXT,
              result: survey[i].RESULT,
            },
            {
              text: survey[i + 1].ANSWER_TEXT,
              result: survey[i + 1].RESULT,
            },
          ],
        });
      }

      for (let i = 0; i < explanation.length; i++) {
        initData.explanation[explanation[i].MBTI_TYPE] = {
          explanation: explanation[i].EXPLAINATION,
          img: explanation[i].IMG_SRC,
        };
      }
    }
    return initData;
  }

  async function mongoFetchData() {
    const resMongoCount = await fetch('http://13.209.69.227:4000/mongo/counts');
    if (resMongoCount.status === 200) {
      const num = await resMongoCount.json();
      console.log(num);
      if (num[0].counts !== 0) setCounts(num[0].counts);
    } else {
      throw new Error('통신 이상');
    }
    const resMongoData = await fetch('http://13.209.69.227:4000/mongo/getdata');
    if (resMongoData.status === 200) {
      const data = await resMongoData.json();
      if (data[0].survey.length !== 0) {
        dispatch(init(data[0]));
      }
    } else {
      throw new Error('통신 이상');
    }
  }

  useEffect(() => {
    mongoFetchData();
  }, []);
  return (
    <>
      <MainImg src="/images/logo.png" alt="로고" />
      <Header>나와 닮은 오버워치 영웅은?</Header>
      <SubHeader>
        {'\n\n'}지금까지 {counts} 명이 참여해 주셨습니다!
      </SubHeader>
      <OrangeButton text="Start" clickEvent={() => dispatch(next())} />
    </>
  );
}
