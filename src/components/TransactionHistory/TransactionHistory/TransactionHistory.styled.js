import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 0 auto;
  width: 800px;
  border-collapse: collapse;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
`;

export const TransactionThead = styled.thead``;

export const TransactionTitleBox = styled.tr`
  height: 30px;
  font-size: 24px;
  background-color: #4248b8;
  text-align: center;
  color: white;
  th {
    padding: 12px;
    width: 33.3333%;
    :not(:last-child) {
      border-right: 1px solid #cccccc;
    }
  }
`;
