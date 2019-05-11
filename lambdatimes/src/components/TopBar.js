import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const TopBarDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;`

const ContainerDiv = styled.div`
width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 130px;`

  const LeftContainerDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;`


  const CenterContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;`

  const RightContainerDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;`

 const Span = styled.span`
 cursor: pointer;

 ${props => (props.type === 'left' ? `margin-right: 25%; font-weight: bold;` : null)}
 ${props => (props.type === 'center' ? `margin-right: 5%;` : null)}
 ${props => (props.type === 'right' ? `background: #f44336;` : null)}

`;

const LastChildSpan = styled.span`
cursor: pointer;
margin-right: 0;`

const TopBar = () => {
  return (
    <TopBarDiv>
      <ContainerDiv>
        <LeftContainerDiv>
          <Span type = 'left'>TOPICS</Span><Span type = 'left'>SEARCH</Span>
        </LeftContainerDiv>
        <CenterContainerDiv>
          <Span type = 'center'>GENERAL</Span><Span type = 'center'>BROWNBAG</Span><Span type = 'center'>RANDOM</Span><Span type = 'center'>MUSIC</Span><LastChildSpan>ANNOUNCEMENTS</LastChildSpan>
        </CenterContainerDiv>
        <RightContainerDiv>
          <Span>LOG IN</Span>
        </RightContainerDiv>
      </ContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;