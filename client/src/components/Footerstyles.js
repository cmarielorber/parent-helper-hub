import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 50px 30px;
  font-family: 'Crushed', sans-serif;
  background: #264653;
  position: relative;
  bottom: 0;
  width: 100%; 
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const FooterContainer = styled.div`
    display: flex;
    font-family: 'Crushed', sans-serif;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    font-size: 2rem;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  font-family: 'Crushed', sans-serif;
  flex-direction: column;
  text-align: center;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  font-family: 'Crushed', sans-serif;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 30px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #e9c46a;
  font-family: 'Crushed', sans-serif;
  margin-bottom: 5px;
  font-size: 12px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 10px;
  font-family: 'Crushed', sans-serif;
  color: #e9c46a;
  margin-bottom: 15px;
  font-weight: bold;
`;