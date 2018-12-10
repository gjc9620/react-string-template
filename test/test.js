var format = require("string-template");
var template = require("../index");

console.log(
  format("Hello {{name}, you have {count} {vvv} {{aaa}} unread messages", {
    name: "Robert",
    count: 12
  })
);

template(
  {
    str: "Hello {{name}, you have {count} {vvv} {{aaa}} unread messages",
    values: {
      name: "Robert",
      count: 12
    },
    render: (arr)=>console.log(arr.join('')),
  }
);


///////////////////////////////////////

console.log(
  format("111{name}1111", {
    name: "Robert",
    count: 12
  })
);

template(
  {
    str: "111{name}1111",
    values: {
      name: "Robert",
      count: 12
    },
    render: (arr)=>console.log(arr.join('')),
  }
);


///////////////////////////////////

console.log(
  format("1111111", {
    name: "Robert",
    count: 12
  })
);

template(
  {
    str: "1111111",
    values: {
      name: "Robert",
      count: 12
    },
    render: (arr)=>console.log(arr.join('')),
  }
);


/////////////////////////////////// no match


template(
  {
    str: "111{ggg}1111",
    renderNoMatch: ()=>'AAAA',
    values: {
      name: "Robert",
      count: 12
    },
    render: (arr)=>console.log(arr.join('')),
  }
);

template(
  {
    str: "111{ggg}1111",
    renderNoMatch: ()=>'{}{}{}}{}{{{}}}{AAA}',
    values: {
      name: "Robert",
      count: 12
    },
    render: (arr)=>console.log(arr.join('')),
  }
);


///////////////////////////////////


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
