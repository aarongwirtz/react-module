import React, {useState} from 'react';
// import FunctionalComponentDemo from './FunctionalComponentDemo'; //auto injected

const PropsDemo = () => {

    const [color, setColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState('purple');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay] = useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] = useState('center');

    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    };

    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    }

    
    const toggleBackgroundColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor('green') : setBackgroundColor('purple');
    }
    
    const toggleBorderRadius = () => {
        borderRadius === '5px' ? setBorderRadius('25px') : setBorderRadius('5px');
    }
    
    const toggleBorderStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('solid') : setBorderStyle('dashed');
    }



    return (
        <div className="main">
            <div className="mainDiv">
                <div style={styles}>
                    <FunctionalComponent string="will this display?" function={toggleColor} selectedStyle={color} />
                    <FunctionalComponent string="test two" function={toggleBackgroundColor} selectedStyle={backgroundColor} />
                    <FunctionalComponent string="test three" function={toggleBorderRadius} selectedStyle={borderRadius} />
                    <FunctionalComponent string="test four" function={toggleBorderStyle} selectedStyle={borderStyle} />
                </div>
            </div>
        </div>
    );
};
//the module suggests an alternate solution from my own, which was essentiialy the reverse of their solution.
const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Toggle Style</button>
            <TinyComponent selectedStyle={props.selectedStyle} />
        </div>
    );
};

const TinyComponent = (props) => {
    return(
      <div>
        <p>The current style is: {props.selectedStyle}</p>
      </div>
    );
  };

export default PropsDemo;