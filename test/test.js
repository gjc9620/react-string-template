import React from 'react';
import ReactStringTemplate from '../lib';
import renderer from 'react-test-renderer';

test('With React element', () => {
  const component = renderer.create(
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
    </ReactStringTemplate>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Insert React element and click event', () => {
  const component = renderer.create(
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
    </ReactStringTemplate>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('If not match', () => {
  const component = renderer.create(
    <ReactStringTemplate
      str={"I am {name}"}
      renderNoMatch={()=>'not match'} >
      {(children)=><div>{children}</div>}
    </ReactStringTemplate>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
