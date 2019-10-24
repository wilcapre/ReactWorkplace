// define players array & create a variable players array
//const players = [
//  {
//    name: "Will",
//    score: "50",
//    //provide a key to each player
//    id: 1
//  },
//   {
//    name: "Mark",
//    score: "70",
//     id: 2
//  },
//   {
//    name: "Angel",
//    score: "85",
//     id: 3
//  },
//   {
//    name: "Wiliam",
//    score: "80",
//     id: 4
//  }

//];



// Header doesn;t get reused, etract to unit only reponsible for header content 
//it our component easier to read
// how to create a component 
// enable the use of props
const Header = (props) => {
  return (
    <header> //html tag
    //1add title
    //2add static text
    // insread of Scoreboard use props
      <h1> { props.title } </h1> 
    //display score board static
    //Total player counts
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  
  );
}
//Player only display player
// new function Player
// give the parameters
const Player = (props) => {
// return key work
return (
  //player  will be div with className player
  <div className="player">
  //span with className player-name
   <span className="player-name">
  // change name with {} with props
  {props.name} 
   </span>
  // how to do we display a score in . A child counter component a props of score
//  <Counter score={props.score} />
 
  // counter remain it's own score
   <Counter />
  </div>
);
}
//Counter is to display a score
// pass counter function the parameter
// now we are using class, convert component to class
class Counter extends React.Component {
  
  //2nd way to do state
  state = {
      score: 0
  // how to create a state
//  constructor () {
//    super()
//      this.state = {
//        score: 0
//      };
  
  };

// handling event 
// create a new component incrementScore.
//incrementScore() {
//another way for function
incrementScore = () => {
  // let react know that state has change and should render n make changes to the component.
  // setState will update the value of the score state n tell react this component needs to be rerende.
 this.setState({ 
  // current score + 1 with this.state.score
  score: this.state.score + 1
 });  
}
//for decrease score
decrementScore = () => {
 this.setState({ 
   score: this.state.score - 1
 });
  
}
  render() {
    return (
   <div className="counter">
      //add onclick event 
      <button className="counter-action decrement" onClick={this.decrementScore}> - </button> 
      <span className="counter-score">{ this.state.score }</span>
      // add and eventListener and passing a refrence to methods {}.
//      <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
    //another way for onClick
    <button className="counter-action increment" onClick={this.incrementScore}> + </button>
   </div>
  
  );
}
}
//const Counter = (props) => {
//  return (
    // add counter, with score display and decrement button
//   <div className="counter">
  // button tag for decrement button
//    <button className="counter-action decrement"> - </button> 
  // to show or display score and a score holder
    // replace static score with {}
//  <span className="counter-score">{ props.score }</span>
  //button tag for increment button
//    <button className="counter-action increment"> + </button>
//   </div>
//  
//  );
//}

// create an App
// add props
//Convert app component from a function to a class
//const App = (props) => {
class App extends React.Component {
  //initialized a players state
  state = {
  //copy and paste the array from cost players, now it is our initial state.
    players: [
       {
    name: "Will",
    //score: "50",
    //provide a key to each player
    id: 1
  },
   {
    name: "Mark",
    //score: "70",
     id: 2
  },
   {
    name: "Angel",
    //score: "85",
     id: 3
  },
   {
    name: "Wiliam",
    //score: "80",
     id: 4
  }
  ]
};
  render() {
  return (
  <div className="scoreboard">
   <Header 
    title="Scoreboard"
   // totalPlayers={props.initialPlayers.length} 
    // replace props with this.state
    totalPlayers={this.state.players.length}
    />
    
    {/* Players list */}
    // {props.initialPlayers.map( player =>  
    //replace state wih initial player
    {this.state.players.map( player => 
    <Player 
     name={player.name}
     key={player.id.toString()}
    />
  )}
   </div>
   );
 }
}
// this component will return a div className scoreboard
//  return(
//  <div className="scoreboard">
    //add an attribute name title
    //render our header component using the selfclosing Header tag
//    <Header 
//    title="Scoreboard"
    //using lenght property on props.initial
//    totalPlayers={props.initialPlayers.length} 
//    />
    // to display list of player
   // {/* Players list */}
    //using the map inaration methods on the array.
//    {props.initialPlayers.map( player =>  
//    <Player 
    //adjust props been pass in to player, that is passing static value
    // change name to props value.
      //name="Wil" //change to name=player
    // name and score property from each player item we are getting from map.
//    name={player.name}
//    score={player.score}
//    key={player.id.toString()}
//    />
    // map each player objects to a player components
  //)}
    // render player component using palyer tag
    // player is parent for counter. pass 2 props to player component name & score
//    <Player name="Wil" score={50} />
//    <Player name="Mark" score={70} />
//    <Player name="Angel" score={85} />
//    <Player name="Wiliam" score={80} />
//  </div>
//  
// );

ReactDOM.render(
  //Capital letter is nessecary to differenciacet custome component from naitive DOM component.
  // add a prsp name initialPlayer to App tag and pass the player array
  //<App initialPlayers={players} />, 
  <App />,
  document.getElementById('root')
);