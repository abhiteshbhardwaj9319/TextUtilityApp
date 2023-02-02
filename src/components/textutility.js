import React, { useState} from 'react';
import './textutility.css'
export default function Textarea(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "Success")
    }
    const handleLpClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "Success")
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "Success")
    }
    const handleToggleClick = () => {
        let text2 = text.split('');
        for (let i = 0; i < text2.length; i++) {
            // console.log(text[i])

            if (text2[i] >= 'A' & text2[i] <= 'Z') {
                text2[i] = text2[i].toLowerCase();
            }
            else if (text2[i] >= 'a' & text2[i] <= 'z') {
                text2[i] = text2[i].toUpperCase();
                // setText[i]=String.fromCharCode( parseInt(text[i])-32)
            }
            // console.log(text[i])
        }

        setText(text2.join(''));
        props.showAlert("Toggled case function applied", "Success")
    }
    const RemoveExtraspace = () => {
        var newText = text.split(" ").filter((element) => { return element.trim() }).join(" ");
        setText(newText);
        props.showAlert("More then one spaces Removed", "Success")
    }
    const handleCopyClick = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard Succesfully", "Success")
    }
    const handleSentanceCase = () => {
        setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
        props.showAlert("Converted to Sentance case Succesfully", "Success")
    }
    const handleCamelCase = () => {
        let words = text.split(" ");
        let camelCase = words[0].toLowerCase();
        
        for (let i = 1; i < words.length; i++) {
            camelCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        }
        
        setText(camelCase);
        props.showAlert("Converted to Camel case Succesfully", "Success")
        
        
    }
    const AlternateCase = () => {
        let alternate = "";
        
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                alternate += text[i].toLowerCase();
            } else {
                alternate += text[i].toUpperCase();
            }
        }
        
        setText(alternate);
        props.showAlert("Converted to Alternate case Succesfully", "Success")
    }
    const SnakeCase = () => {
        setText(text.split(" ").join("_").toLowerCase());
        props.showAlert("Converted to Snake case Succesfully", "Success")
    }
    
    const PascalCase = () => {
        let words = text.split(" ");
        let pascalCase = "";
        
        for (let i = 0; i < words.length; i++) {
            pascalCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        }
        
        setText(pascalCase);
        props.showAlert("Converted to Pascal case Succesfully", "Success")
        // props.showAlert("Converted to Snake case Succesfully", "Success")


}

const [maintext, setmaintext] = useState("Enter Your Text");
const handleOnChange = (event) => {
    setText(event.target.value);
    setmaintext(event.target.value);
}

    const OriginalText = () => {

        setText(maintext);
    }
    
    const [text, setText] = useState('Enter Your Text');
    
    // const Grammercheck = () => {
    //     var temp=text;
    //     // Replace all instances of "your" with "you're"
    //     temp= temp.replace(/\byour\b/gi, "you're");
    //     // Replace all instances of "there" with "their"
    //     temp= temp.replace(/\bthere\b/gi, "their");
    //     // Replace all instances of "they're" with "there"
    //     temp= temp.replace(/\bthey're\b/gi, "there");
    //     // Replace all instances of "its" with "it's"
    //     temp= temp.replace(/\bits\b/gi, "it's");
    //     setText(temp);
        
    //     props.showAlert("Basic Grammer Check Done", "Success")
    // }
    return (
        < >
            <div style={{ color: props.mode === 'dark' ? 'white' : '#454141' }}>
                <h2 >{props.Text}</h2>
                <div className="mb-3 "  >
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'rgb(33 37 41)' : 'white' }} id="mybox" rows="8"></textarea>
                </div>
                <div class='btnsgrp'>

                <button className='btn btn-danger mx-1 my-2' onClick={OriginalText}>Original Text</button>
                <button disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={handleUpClick}>Convert To UpperCase</button>
                <button disabled={text.length===0} className='btn btn-info mx-1 my-2 ' onClick={handleLpClick}>Convert To LowerCase</button>
                <button disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={handleToggleClick}>Toogle Case</button>
                <button disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={handleSentanceCase}>Sentance case</button>
                <button disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={handleCamelCase}>Camel case</button>
                <button disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={SnakeCase}>Snake_Case</button>
                <button disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={PascalCase}>Pascal Case</button>
                <button disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={AlternateCase}>aLtErNaTe CaSe</button>
                <button disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={RemoveExtraspace}>Remove Extra Space</button>
                <button disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={handleCopyClick}>Copy Text</button>
                {/* <button className='btn btn-info mx-1' onClick={Grammercheck} >Grammer check</button> */}
                </div>
                <container>
                    <div className='my-3' >
                        <h4>Text Summary</h4>
                        <h7>{text.length}  Characters and {text.split(" ").filter((element) => { return element.length !== 0 }).length} Words </h7><br></br>
                        {/* <h5>{text.length}  Characters and {text.trim().length ? text.trim().split(/\s+/).length : 0} Words </h5> */}
                        <h7>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read</h7>
                    </div>
                </container>
                <h5 >Preview:</h5>
                <h7 >{text.length>0?text:"Nothing to preview"}</h7>
            </div>
        </>
    )

}