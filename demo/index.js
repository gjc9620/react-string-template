import React from "react";
import { render } from 'react-dom';
import ReactStringTemplate from "../lib/index.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <ReactStringTemplate
          str={"{name} is a series of {foo} novels written by British {{author}} {author} in {yeah}."}
          renderNoMatch={()=>'not match'}
          values={{
            name: <a href="https://www.google.com/search?q=Harry Potter" key='potter'>Harry Potter</a>,
            foo: 'fantasy',
            bar: 'novels',
            author: 'J. K. Rowling',
            yeah: 1997,
          }} >
          {(children)=><div>{children}</div>}
        </ReactStringTemplate>
  
        <ReactStringTemplate
          str={"{charmName} Charm"}
          values={{
            charmName: (
              <span
                key='patronus'
                onClick={()=>alert('Patronus!')}>
                Patronus
              </span>
            ),
          }} >
          {(children)=><div>{children}</div>}
        </ReactStringTemplate>
  
        <ReactStringTemplate
          str={"I am {name}"}
          renderNoMatch={()=>'not match'} >
          {(children)=><div>{children}</div>}
        </ReactStringTemplate>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
render(
  <App />,
  rootElement
);



