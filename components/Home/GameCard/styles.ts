import styled from '@emotion/styled';

const Game = styled.div`
  & + & {
    margin-top: 16px;
  }
`;

const exportStyles = {
  Game,
};

export default exportStyles;
