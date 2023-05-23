import styled from 'styled-components';

export const FriendsItemStyle = styled.li`
  border-radius: 60px;
  background: #ffffff;
  box-shadow: inset 8px 8px 16px #808080, inset -8px -8px 16px #ffffff;
  display: flex;
  align-items: center;
  width: 300px;
  padding: 10px 30px;
  gap: 20px;

  & span {
    background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
    border-radius: 50%;
    box-shadow: 8px 8px 16px #808080, -8px -8px 16px #ffffff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
`;

export const FriendsName = styled.p`
  margin: 0 auto;
  font-weight: 200;
`;
