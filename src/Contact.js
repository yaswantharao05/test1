import { useEffect, useState } from "react";
import Axios from "axios";

function Contact(){

    const [name, setName] = useState("Yaswantha") // function component
    // this.state ={name: "Yaswantha"} //class component
    //cont [x, setx] = useState("defaultValue");

    const [data,setData] = useState([]);

    // const handleClick = () => {setName("Bhargava");}

    //useEffect() is used as we are using function components we require lifecycles
    //to avoid re-rendering we are passing a empty list []
    // ()=>{} --> callback function 
    // as it is promise, if promise is resolved .then() is executed, if promise is rejected .catch() is executed
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status == 200) // 200 indicates that it is a success , 200 = OK
            {
                console.log(res.data);
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err)) // or .catch((error)=>{comsole.log("Error Occured")})
    },[])


    const ContactDetails = () =>{
        return data.map((val)=>{
            return <p>{val.name} - {val.phone}</p>
        })
    }
    return(
        <div>
            <h1>My name is {name}</h1>
            <button onClick={() => {setName(name+"Bhargava");}}>Change name</button>
            {ContactDetails()}
        </div>
    )
    // Hooks enables the function component to also ahve its own state
}

export default Contact;

/*
class C1 extends Component{
    ComponentDidMount(){
        Axios.get()
    }
}

const p = new Promise((res,rej)=>{
    res("Hello");
})

p
.then((msg)=>{cosole.log("Success"+msg)})

Promise:
resolved -> then()
rejected -> catch()

Object ->
config


*/