import React from 'react';
// npm install --save styled-components 설치
// v4부터
// injectGlobal 가 createGlobalStyle로 변경
// keyframes를 쓸라면 css 헬퍼를 함께 사용
// ThemeProvider 연결 - React Child component 테마 적용
import styled, { createGlobalStyle, css, keyframes, ThemeProvider } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle `
  body {
    padding:0;
    margin:0;
  }
`;
// mixin
const awesomeCard = css`
box-shadow:0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0,0,0,0.88);

// props.theme 값 설정
background:${props => props.theme.successColor};
border-radius:5px;
padding:20px;
`;

class App extends React.Component {
  render(){
    return(
      // ThemeProvider 추가 후 theme props 넣어줄것
      <ThemeProvider theme={theme}>
      <section>
        <GlobalStyle/>
        <Container01>
          <Button succes>HELLO</Button>
          <Button danger rotationTime={3}>HELLO</Button>
          <Anchor href="https://www.naver.com/" target="_blank">HELLO</Anchor>
        </Container01>
        <Container>
          <Input placeholder="hello"></Input>
        </Container>
      </section>
      </ThemeProvider>
    )
  }
}
const Container01 = styled.div`
width:100%;
height:100px;
padding-top:50px;
background:#dbc3c7;
`;
const Container = styled.div`
width:100%;
height:50px;
background:#dbc3c7;
`;
const Input = styled.input.attrs({
  required : true
})`
border-radius:30px;
// mixin 넣기
${awesomeCard}`;

const Button = styled.button`
border-radius:50px;
padding:5px;
min-width:120px;
color:#fff;
font-weight:600;
-webkit-appearance:none;
cursor:pointer;
&:active,
&:focus {
  outline:none;
}
background:${props => (props.danger ?"#e74c3c":"#2ecc71")};
${props => {
  if(props.danger) {
    // v4 부터는 return 앞에 css 넣어주어야해
    return css `animation: ${rotation} ${props.rotationTime}s linear infinite`;
    }
}}
`;
// const Anchor = Button.withComponent('a').extend`text-decoration:none;`;
const Anchor = styled(Button.withComponent('a'))`
  text-decoration:none;
`;
const rotation = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;
export default App;