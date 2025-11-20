
// import Header from "./Header" to tez dziala
import Header from "./Header.jsx"
import Button from "./Button.jsx"




function Button1(){

    return(<button className="button">Klik</button>);
}
//export default Button


function App() {
  
  return (
    // <Header></Header> to tez dziala
    <div>
    <Header/>
    <Button1/>
    <Button/>
    </div>
  )

  // return (
  //   <Button/>
  // )

}

export default App
