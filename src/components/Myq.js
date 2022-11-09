import { useDispatch, useSelector } from 'react-redux';
import { next, check } from '../store/modules/myq';
import styled from 'styled-components';
import SelectButton from './SelectButton';
import React from 'react';
import Progress from './Progress';

const SurveyQuestion = styled.p`
  font-size: 2em;
  color: black;
  padding-top: 3em;
`;

export default function Myq() {
  const survey = useSelector((state) => state.myq.survey);
  const page = useSelector((state) => state.myq.page);
  const dispatch = useDispatch();
  return (
    <>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              <SelectButton
                text={el.text}
                clickEvent={() => {
                  dispatch(check(el.result));
                  dispatch(next());
                }}
              />
            </li>
          );
        })}
      </ul>
      <Progress page={page} maxPage={survey.length} />
    </>
  );
}
