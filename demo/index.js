import React from "react";
import { render } from 'react-dom';
import ReactStringTemplate from "../index.jsx";

class App extends React.Component {
  render() {
    return (
      <ReactStringTemplate
        str={"{name} is a series of {foo} novels written by British {{author}} {author} in {yeah}."}
        renderNoMatch={()=>'{}{}{}}{}{{{}}}{AAA}'}
        values={{
          name: <a href="https://www.google.com/search?q=Harry Potter">Harry Potter</a>,
          foo: 'fantasy',
          bar: 'novels',
          author: 'J. K. Rowling',
          yeah: 1997,
        }} >
        {(children)=><div>{children}</div>}
      </ReactStringTemplate>
    );
  }
}

const rootElement = document.getElementById('root');
render(
  <App />,
  rootElement
);



