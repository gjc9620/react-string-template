# react-string-template
react-string-template is simple string template with react


``` jsx
  <ReactStringTemplate
    str={"{name} is a series of {foo} novels written by British author {author} in {yeah}."}
    renderNoMatch={()=>'not match'}
    values={{
      name: <a href="https://www.google.com/search?q=Harry Potter">Harry Potter</a>,
      foo: 'fantasy',
      bar: 'novels',
      author: 'J. K. Rowling',
      yeah: 1997,
    }} >
    {(children)=><div>{children}</div>}
  </ReactStringTemplate>

  //Harry Potter is a series of fantasy novels written by British {author} J. K. Rowling in 1997.

```


```
  // add click event
  <ReactStringTemplate
    str={"{charmName} Charm"}
    values={{
      charmName: (
        <span
          onClick={()=>alert('Patronus!')}>
          Patronus
        </span>
      ),
    }} >
    {(children)=><div>{children}</div>}
  </ReactStringTemplate>

```


```
 <ReactStringTemplate
    str={"I am {name}"}
    renderNoMatch={()=>'not match'} >
    {(children)=><div>{children}</div>}
  </ReactStringTemplate>

  //I am not match

```

If you don't need escape use `{{escape}}`

