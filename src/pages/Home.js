import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #ff4081;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  &:hover {
    background-color: #f50057;
  }
`;

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Meme Space</h1>
      <p>Find your match through memes and music!</p>
      <StyledButton>Get Started</StyledButton>
    </div>
  );
}

export default Home;
