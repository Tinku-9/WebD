import Header from './Header.jsx' 
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Greeting from './Greeting.jsx'
import Day from './Day.jsx'
import Para from './para.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import Login from './Login.jsx'
import List from './List.jsx'
import Img from './Img.jsx'
import Details from './Details.jsx'
import Order from './Order.jsx'
import Car from './Car.jsx'
import Fruit from './Fruit.jsx'
import Car2 from './Car2.jsx'
import Task from './Task.jsx'
import Count from './Count.jsx'
import Clock from './Clock.jsx'
import C1 from './C1.jsx'
import Input from './Input.jsx'
import Timer from './Timer.jsx'
import Form from './Form.jsx'




function App() {
  const fruits=[{id:1,name:"Apple",cal:50},
    {id:2,name:"Banana",cal:200},
    {id:2,name:"watermelon",cal:35},
    {id:4,name:"pineapple",cal:100}];
  return(
   <>
   <Header/>
   <Clock/>
   <Timer/>
   <Greeting/>
   <Day/>
   <Food/>
   
   <Para/>
   <Card/>
   <Button/>
   <Student name="Varun" age={19} is={true}/>
   <Student name="Pattrik" age={20} is={false}/>
   <Login name="varun" is={true} />
   <List items={fruits}/>
   <Img/>
   <Details/>
   <Order/>
   <Car/>
   <Fruit/>
   <Car2/>
   <Task/>
   <Count/>
   <C1/>
   <Input/>
   <Form/>
   <Footer/>
   </>
  );
}

export default App
