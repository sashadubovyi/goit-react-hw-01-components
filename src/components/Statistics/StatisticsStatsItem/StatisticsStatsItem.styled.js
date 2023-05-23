import styled from 'styled-components';

export const StatisticsItem = styled.li`
  background-color: ${({ color }) => {
    return color;
  }};
  width: 150px;
  height: 110px;
  text-align: center;
`;

export const LabelStyle = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 300;
`;

export const PercentageStyle = styled.span`
  color: #fff;
  font-size: 50px;
`;
