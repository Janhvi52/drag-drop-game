/* eslint-disable*/
import React, { Component } from "react";
import "./App.css";
import Item from "./components/Item";
import Target from "./components/Target";
import header from "./assets/headerr.png";
import TouchBackend from "react-dnd-touch-backend";
import { DragDropContext } from "react-dnd";

const del = [];

const images = {
  1: "images/image1.png",
  2: "images/image2.png",
  3: "images/image3.png",
  4: "images/image4.png",
  5: "images/image5.png",
  6: "images/image6.png",
  12: "images/image12.png",
  13: "images/image13.png",
  14: "images/image14.png",
  15: "images/image15.png",
  16: "images/image16.png",
  23: "images/image23.png",
  24: "images/image24.png",
  25: "images/image25.png",
  26: "images/image26.png",
  34: "images/image23.png",
  35: "images/image35.png",
  36: "images/image36.png",
  45: "images/image45.png",
  46: "images/image46.png",
  56: "images/image56.png",
  123: "images/image123.png",
  125: "images/image125.png",
  124: "images/image124.png",
  126: "images/image126.png",
  134: "images/image123.png",
 
  135: "images/image135.png",
  136: "images/image136.png",
  145: "images/image146.png",
  146: "images/image145.png",
  156: "images/image156.png",
  234: "images/image234.png",
  235: "images/image235.png",
  236: "images/image236.png",
  245: "images/image245.png",
  246: "images/image246.png",
  256: "images/image256.png",
  345: "images/image235.png",
  346: "images/image236.png",
  356: "images/image356.png",
  456: "images/image456.png",
  1234: "images/image1234.png",
  1235: "images/image1235.png",
  1236: "images/image1236.png",
  1245: "images/image1245.png",
  1246: "images/image1246.png",
  1256: "images/image1256.png",
  1345: "images/image1235.png",
  1346: "images/image1236.png",
  1356: "images/image1356.png",
  1456: "images/image1456.png",
  2345: "images/image2345.png",
  2346: "images/image2346.png",
  2356: "images/image2356.png",
  2456: "images/image2456.png",
  3456: "images/image3456.png",
  12345: "images/image12345.png",
  12346: "images/image12346.png",
  12356: "images/image12356.png",
  12456: "images/image12456.png",
  13456: "images/image12356.png",
     //done till  here
  23456: "images/image23456.png",
  123456: "images/image123456.png",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "images/glass.png",
      items: [
        { id: 1, name: "Ice Cubes", url: "/images/icecube.png" },
        { id: 2, name: "Whisky", url: "/images/bgwhiskey.png" },
        { id: 3, url: "/images/bgcola.png" },
        { id: 4, name: "Mixers", url: "/images/bgsoda.png" },
        { id: 5, url: "images/bgorange.png" },
        { id: 6, name: "Garnishes", url: "/images/lemon.png" },
      ],
    };
  }
  data = [
    { id: 1, name: "Ice Cubes", url: "/images/icecube.png" },
    { id: 2, name: "Whisky", url: "/images/bgwhiskey.png" },
    { id: 4, url: "/images/bgsoda.png" },
    { id: 6, name: "Garnishes", url: "/images/lemon.png" },
  ];

  componentDidMount() {
    if (del.length > 0) {
      const number = parseInt(del.sort().join(""));
      if (images[number]) {
        this.setState({ image: images[number] });
      } else {
        this.setState({ image: "images/image123456.png" });
      }
      if (!localStorage.getItem("isKeySet")) {
        localStorage.setItem("attempts", 3);
        localStorage.setItem("isKeySet", "true");
      }
    } else {
      this.setState({ image: "images/glass.png" });
    }
  }

  check = () => {
    var combo =
      del.includes(this.data[0].id) &&
      del.includes(this.data[1].id) &&
      del.includes(this.data[2].id) &&
      del.includes(this.data[3].id);

    var attemptt = localStorage.getItem("attempts");
    if (del.length === 4 && combo && attemptt > 0) {
      localStorage.setItem("attempts", 0);
      window.location.href = "./win";
    } else {
      var totalAttempts = localStorage.getItem("attempts");
      localStorage.setItem("attempts", totalAttempts - 1);
      var remainingAttempts = localStorage.getItem("attempts");
      if (remainingAttempts > 0) {
        window.location.href = `./try${remainingAttempts}left`;
      } else window.location.href = `./lose`;
    }
  };

  deleteItem = (id) => {
    this.setState((prevState) => {
      del.push(id);
      this.componentDidMount();
      return {
        items: prevState.items.filter((item) => item.id !== id),
        // items: prevState.items.filter((item) => item.id == item.id), add this to show item even after drag end
      };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="head-image">
            <img
              src={header}
              style={{ display: "inline", width: "100vw", height: "100%" }}
            ></img>
          </div>
        </header>
        <div className="first">
          <div className="first-one">
            <Target image={this.state.image} />
            <button onClick={this.check}>SHAKE</button>
          </div>
          <div className="App-intro">
            <div className="app-container">
              <div className="item-container">
                {this.state.items?.map((item, index) => (
                  <Item
                    key={item.id}
                    item={item}
                    handleDrop={(id) => {
                      this.deleteItem(id);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(App);
