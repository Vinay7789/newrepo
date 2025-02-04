import React,{useState} from 'react'

export default function Techform(props) {
  //let count = 0;

  const HandleClick=()=>{
    console.log("button is clicked" + text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success")
  }
    const HandleLowClick=()=>{
      console.log("button is clicked" + text);
      let newText=text.toLowerCase();
      props.showAlert("converted to lowercase","success")

      setText(newText);
   // setData(data+1);
    //count=count+1;
    //console.log('zzz', count);
  }
  const HandleClearClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert("clear text","success")

  }
   
    const handleOnChange=(event)=>{
       setText(event.target.value);
    }
    const HandleCopy=()=>{
      var text1=document.getElementById("mybox");
      text1.select();
      navigator.clipboard.writeText(text1.value);

    }
  
  //const  [data, setData] = useState(1); 
  const [text, setText]=useState('enter your text');
  return (
    
    <div  className="container my-5" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading }</h1>
    
<div class="mb-3">
  <label htmlFor="mybox" className="form-label"></label>
  <textarea className="form-control"  value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey':'white'}} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary my-3 mx-3" onClick={HandleClick}>Convert to Uppercase </button>
  <button className="btn btn-primary my-3 mx-3" onClick={HandleLowClick}>Convert to Lowercase </button>
  <button className="btn btn-primary my-3 mx-3" onClick={HandleClearClick}>Clear </button>
  <button className="btn btn-primary my-3 mx-3" onClick={HandleCopy}>Copy </button>
< div className="container my-5">
<h1>Your text Summary</h1>
<p>{text.split(" ").length} words  {text.length}</p>
<p>{0.008*text.split(" ").length }Minutes read</p>
<h2>Preview</h2>
<p>{text}</p>
</div>
</div>
)
}
