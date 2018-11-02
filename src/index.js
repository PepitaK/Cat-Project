import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function printimage() {
  class CatPicture extends React.Component {
    render() {
      return <div><img src="https://cataas.com/cat/says/Write!" alt="Cat"></img></div>
      //return first + what + end;
    }
  }
  ReactDOM.render(<CatPicture/>, document.getElementById("picture"));
}

function printimagewtext() {

var first = '<div><img src="https://cataas.com/cat/says/';
var what = document.getElementById("tekstikentta").value;
var color = "?color=" + document.querySelector('input[name=color]:checked').value + '"' ;
var end = ' alt="Cat"/></div>';

if (document.getElementById("tekstikentta").value.length === 0 || ! /^[a-zA-Z0-9.! ?-_()"]+$/.test(what)){

}
else{
document.getElementById("picture").innerHTML = first + what  + color + end;

console.log("Hi there! Nice choice! Nurr Nurr!")
console.log(first + what + color + end)
}

}

class NewCat extends React.Component {
  render() {

    return <div>

    <button onClick={printimagewtext}>New cat with your text</button>
    </div>;
  }
}

function printbutton(props) {
  ReactDOM.render(<NewCat/>, document.getElementById("button"));
}




printbutton();
printimage();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
