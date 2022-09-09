import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const SectionStatistic = styled.section`
  width: 400px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 35px;
  background-color: #c4f7f2;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StatisticList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatisticItems = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${getRandomHexColor};
  padding: 10px 0;
`;

export const DataList = styled.span`
  font-size: 20px;
  font-weight: bold;
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
