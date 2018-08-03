import React from "react";
import ReactDOM from "react-dom";
import Typography from "./Typography";
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 600px;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Typography variant="headline1">Headline 1</Typography>
        <Typography variant="headline2">Headline 2</Typography>
        <Typography variant="headline3">Headline 3</Typography>
        <Typography variant="headline4">Headline 4</Typography>
        <Typography variant="headline5">Headline 5</Typography>
        <Typography variant="headline6">Headline 6</Typography>
        <Typography variant="subtitle1">Subtitle 1</Typography>
        <Typography variant="subtitle2">Subtitle 2</Typography>
        <Typography variant="body1">
          Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2">
          Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
          possimus nihil molestias sapiente necessitatibus dolor saepe
          inventore, soluta id accusantium voluptas beatae.
        </Typography>

        <div>
          <Typography variant="caption">caption</Typography>
        </div>
        <div>
          <Typography variant="button">button</Typography>
        </div>
        <div>
          <Typography variant="overline">overline</Typography>
        </div>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
