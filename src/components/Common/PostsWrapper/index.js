import styled from 'styled-components';

export default styled.section`
  margin: auto;
  padding: 120px 0 0;
  max-width: 1176px;
  font-size: ${({ post }) => (post ? '14px' : '0')};

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }

  h1 {
    margin: .67em 0;
    font-size: 32px;
  }

  time {
    margin: 1em 0;
    font-size: 14px;
  }
`;