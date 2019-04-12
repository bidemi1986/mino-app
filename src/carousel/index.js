import React from "react";
import ReactDOM from "react-dom";
import { Item, AppContainer, ExtraInfo, Code } from "./components";
import Carousel from "./Carousel";
// CREDITS for Carousel:
// https://medium.com/@incubation.ff/build-your-own-css-carousel-in-react-part-one-86f71f6670ca

function App() {
  return (
    <AppContainer>
      <h2>
        <a
          target="_blank"
          href="https://github.com/dogfessional/react-swipeable"
        >
          react-swipeable
        </a>{" "}
        v5.1.0
      </h2>
      <p>
        Carousel impliments <Code>useSwipeable</Code> hook to track touch/swipe
      </p>
      <Carousel title="Carousel">
        <Item img="https://unsplash.it/475/205" />
        <Item img="https://unsplash.it/476/205" />
        <Item img="https://unsplash.it/477/205" />
        <Item img="https://unsplash.it/478/205" />
        <Item img="https://unsplash.it/479/205" />
      </Carousel>
      <ExtraInfo>
        <p>
          View example using the <code>&lt;Swipeable/&gt;</code> component.
        </p>
        <p>
          Go to this{" "}
          <a
            href="https://codesandbox.io/s/4q7n429vl4?module=%2Fsrc%2FCarousel.js"
            target="_blank"
          >
            codesandbox
          </a>
          .
        </p>
      </ExtraInfo>
    </AppContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
