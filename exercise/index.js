import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const books = [
  {
    id: 1,
    title: "Robinson Crusoe",
    author: "Daniel Defoe"
  },
  {
    id: 2,
    title: "Lord of the Flies",
    author: "William Golding"
  },
  {
    id: 3,
    title: "Catch-22",
    author: "Joseph Heller"
  }
];

const authors = [
  {
    name: "Daniel Defoe",
    bio:
      "Daniel Defoe, born Daniel Foe, was an English trader, writer, journalist, pamphleteer and spy. He is most famous for his novel Robinson Crusoe, which is second only to the Bible in its number of translations.",
    born: 1660,
    died: 1731,
    books: [1]
  },
  {
    name: "William Golding",
    bio:
      "Sir William Gerald Golding, CBE was a British novelist, playwright, and poet. Best known for his debut novel Lord of the Flies, he would go on to write over a dozen novels in his lifetime.",
    born: 1911,
    died: 1993,
    books: [2]
  },
  {
    name: "Joseph Heller",
    bio:
      "Joseph Heller was an American author of novels, short stories, plays, and screenplays. His best-known work is the novel Catch-22, a satire on war and bureaucracy, whose title has become a synonym for an absurd or contradictory choice.",
    born: 1923,
    died: 1999,
    books: [3]
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App app-wrapper app-container-big">
        <List data={[authors, books]} />
      </div>
    );
  }
}

// SUPER BAD CODE

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataAuth: null };
    console.log("this.props", this.props.data[0]);
    console.log("Constructor called");
  }
  showValuesOnScreen() {
    return (
      <li className="ValuesSection">
        {this.state.dataAuth.map((a, i) => (
          <section key={i}>{a.name}</section>
        ))}
      </li>
    );
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        dataAuth: this.props.data[0],
        books: this.props.data[1]
      });
    }, 500);
  }

  renderData() {
    if (
      this.state &&
      this.state.books &&
      this.state.books.length &&
      this.state.dataAuth &&
      this.state.dataAuth.length
    ) {
      return (
        <div className="my-list-wrapper list-wrapper-not-empty active disabled">
          {this.state.dataAuth &&
            this.state.dataAuth.length &&
            this.showValuesOnScreen()}
        </div>
      );
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="App app-wrapper app-container-big">
        {this.renderData()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);