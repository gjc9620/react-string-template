# react-string-template

``` js
template(
  {
    str: "111{name}11{count}11{bad}ddddddd{sym}",
    renderNoMatch: ()=>'{}{}{}}{}{{{}}}{AAA}',
    values: {
      name: function () {},
      count: { type: 1},
      bad: undefined,
      sym: Symbol("A"),
    },
    render: (arr)=>console.log(arr),
  }
);

```
