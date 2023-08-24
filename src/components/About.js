import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor : props.mode === 'dark' ? '#444444' : 'white',
        border: props.mode === 'dark' ? '1px solid white' : '1px solid black'
    }
    let myAccStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor : props.mode === 'dark' ? '#333333' : 'white',
        border: props.mode === 'dark' ? '1px solid white' : '1px solid black'
    }

  return (
    <>
    <div className="container py-5 my-3 rounded-5" style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myAccStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    Text-Utils
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Text-Utils</strong> is a very simple application that helps you to analyze the text any many different ways.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myAccStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    Features
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <ul>
                        <li><strong>Text-Utils</strong> helps you to count the number of words and characters in your text.</li>
                        <li><strong>Text-Utils</strong> helps to convert the text from lowercase to uppercase and uppercase to lowercase.</li>
                        <li>Using <strong>Text-Utils</strong> you can copy your text to the clipboard</li>
                        <li><strong>Text-Utils</strong> can also format the text by removing any extra spaces.</li>
                        <li><strong>Text-Utils</strong> is responsive and also has light and dark modes for the user's comfort.</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myAccStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    About developer
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    I am Mitesh Sharma a Computer Science student at VIT Bhopal. There are plenty of features yet to come to analyze your text better. 
                </div>
                <div className="accordion-body">
                    Thank you for visiting Text-Utils.
                </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
