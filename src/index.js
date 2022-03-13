import React from "react";
import ReactDOM from "react-dom";

//here we want to add some styling to our project
ReactDOM.render(
  <div>
    {/* this works fine but it has some problems instead of class we have to give className */}
    {/* <h1 class="heading">My Favourite Foods</h1> */}
    {/* by contentEditable it means that we can edit the content of h1 in the browser */}
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    {/* <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul> */}
    <div>
      <img
        className="bat"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTNwxLOxE3RdK2VttHzBxMY24agqkd6FtAA&usqp=CAU"
        alt="the batman"
      />
      <img
        className="bat"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ60uUuMee_B-XmLDbJWkjEzpR9umke1LQyQ&usqp=CAU"
        alt="the batman"
      />
      <img
        className="bat"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrcNG-fg-Hv3bi5ei63qjzHbAOz2SKyxe3g&usqp=CAU"
        alt="the batman"
      />
    </div>
  </div>,
  document.getElementById("root")
);
