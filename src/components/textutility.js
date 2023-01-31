import React,{useState} from 'react'
export default function Textarea(props) {
    const handleUpClick=()=>{
        // console.log('Button Clicked');
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","Success")
    }
    const handleLpClick=()=>{
        // console.log('Button Clicked');
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","Success")
    }
    const handleClearClick=()=>{
        // console.log('Button Clicked');
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared","Success")
    }
    const handleToggleClick=()=>{
        let text2=text.split('');
        // console.log('Button Clicked');
        for (let i = 0; i < text2.length; i++) {
            // console.log(text[i])
            
            if(text2[i]>='A' & text2[i]<='Z'){
                text2[i]=text2[i].toLowerCase();
            }
            else if(text2[i]>='a' & text2[i]<='z'){
                text2[i]=text2[i].toUpperCase();
                // setText[i]=String.fromCharCode( parseInt(text[i])-32)
            }
            // console.log(text[i])
        }
        
        setText(text2.join(''));
        props.showAlert("Toggled case function applied","Success")
    }
    // const countwords=()=>{
    //     let value=text.trim().split(" ").length;
    //     return value

    // }
    const handleCopyClick=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard Succesfully","Success")
    }
    // const handleSentanceClick=()=>{
    //     // console.log('Button Clicked');
    //     let array=text.split(' ');
    //     for (let index = 0; index < array.length; index++) {
            
            
            // capital letter of first word and all pronouns in the sentance

    //     }
    //     // let newText='';
    //     setText(text);
    // }
    // const handlewordcapitalClick=()=>{
    //     console.log('Button Clicked');

    //     let newText=text.split(" ");
    //     // newText[0]=newText[.toUpperCase();
    //     for (let index = 0; index < newText.length; index++) {
    //         newText[index][0]=newText[index][0].toUpperCase();
            
    //     }
        
    //     setText(newText);
    // }

    const handleOnChange=(event)=>{
        // console.log("Text Changed");
        setText(event.target.value);

    }

    const [text,setText] = useState('Enter Your Text');
    return (
        < >
        <div style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 >{props.Text}</h1>
            <div className="mb-3 "  >
                <textarea className="form-control" value={text}  onChange={handleOnChange} style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}}  id="mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-danger mx-1'  onClick={handleUpClick}>Convert To UpperCase</button>
            <button className='btn btn-info mx-1'  onClick={handleLpClick}>Convert To LowerCase</button>
            <button className='btn btn-info mx-1'  onClick={handleToggleClick}>Toogle Case</button>
            {/* <button className='btn btn-info mx-1'  onClick={handleSentanceClick}>Sentance Case</button> */}
            {/* <button className='btn btn-info mx-1'  onClick={handlewordcapitalClick}>Each Word Capital Text</button> */}
            <button className='btn btn-info mx-1'  onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-info mx-1'  onClick={handleCopyClick}>Copy Text</button>
            <container>
            <div className='my-3' >
                <h4>Text Summary</h4><br/>
                <h5>{text.length}  Characters and {text.trim().split(" ").length} Words </h5>
                <h5>{0.008*text.split(" ").length} Minutes Read</h5>
            </div>
            </container>
                <h5 >Result:</h5>
                <h6 >{text}</h6>
            </div>
        </>
    )

};