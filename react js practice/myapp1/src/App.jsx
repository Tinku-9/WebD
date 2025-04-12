import Pic from './assets/download.jpeg';
import Student from './Student.jsx';
import List from './List.jsx';
import Button from './Button.jsx';
import MyComp from './Mycomp.jsx';
import Naveen from './Naveen.jsx';
import Background from './background.jsx';

function App() {
  const styles={
    color: "Blue"
  }
 return(
  <>
  <h1 style={styles}>Hello girphyy</h1>
  <img src={Pic} alt="oops giraffe gone somewhere" id="img1" />
  <Student variable="Tinku" age={18}></Student>
  <Student></Student>
  <List></List>
  <Button></Button>
  <MyComp></MyComp>
  <Naveen></Naveen>
  <Background color="blue"></Background>
  </>
 );
}

export default App
