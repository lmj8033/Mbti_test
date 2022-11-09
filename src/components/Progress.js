import React from 'react';
import styled from 'styled-components';

const MyProgress = styled.div`
  margin-top: 3em;
`;
const Fill = styled.div`
  width: 100%;
  height: 10px;
  background-color: #c8c8c8;
  margin-top: 2em;
  text-align: left;
`;
const Gauge = styled.div`
  background-color: #4a4c4e;
  display: inline-block;
  height: inherit;
  position: relative;
  top: -2px;
  width: ${(props) => props.percent}%;
  transition: 0.5s;
`;

export default function Progress({ page, maxPage }) {
  return (
    <>
      <MyProgress>
        <div>
          {page} / {maxPage}
        </div>
        <Fill>
          <Gauge percent={(page / maxPage) * 100}></Gauge>
        </Fill>
      </MyProgress>
    </>
  );
}
