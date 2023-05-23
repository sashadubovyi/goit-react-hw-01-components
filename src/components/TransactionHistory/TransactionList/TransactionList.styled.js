import styled from 'styled-components';

export const TransactionTbody = styled.tbody``;

export const TransactionBody = styled.tr`
  height: 30px;
  font-size: 20px;
  text-align: center;
  text-transform: capitalize;
  &:nth-of-type(even) {
    background-color: #65a2b25c;
  }
  td {
    padding: 5px;
    :not(:last-child) {
      border-right: 1px solid #4248b8;
    }
  }
`;
