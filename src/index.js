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
var what = document.getElementById("tekstikentta").value ;
var filter = "?filter=" ;
var color = "&color=" + document.querySelector('input[name=color]:checked').value + '"';
var end = ' alt="Cat"></img></div>';

if (document.getElementById("tekstikentta").value.length === 0){

}
else{
document.getElementById("picture").innerHTML = first + what + filter + color + end;
console.log("Hi there! Nice choice! Nurr Nurr!")
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
