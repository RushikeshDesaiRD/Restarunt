import styled from 'styled-components'
import DefaultImg from '../images/images/room-1.jpeg'
 const StyleHero = styled.header 
 ` 
  min-height: calc(100vh - 66px);
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center; 
  
 `;
export default StyleHero;
