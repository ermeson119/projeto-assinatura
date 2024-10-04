import styled from 'styled-components'

export const Img = styled.img`
  margin-right: 80vh;
  width: 39vh;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.7)); /* Sombra para destacar a logo */
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20vh;
    text-align: center;
    padding: 1vh;
    background: #044CB8;
    
`

export const P = styled.p`
    margin-top: 17px;
    text-align: center;
    color: white;
`

export const Header = styled.header`
  background: #044CB8 ;
  width: 100%;
  display: flex;
  justify-content: space-around; 
  align-items: center; 
  padding: 25px 20px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px; 
`;

export const A = styled.a`
white-space: nowrap;

  color: #ffffff;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); 
  &:hover {
    color: #f1f1f1;
  }
`;
