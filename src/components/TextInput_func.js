import React from 'react';

// import '../Style.css';
var isError = 'App';

const textInput = (props) => {
    // console.log(props.isError);
    if (props.isError == null) {
        isError = 'App'
    } else {
        isError = 'Error'
    }

    // let textFocus = null;

    // const handleClick = () => {
    //     textFocus.focus();
    // }


    return (
        <div>
            <input
                type="text"
                onChange={props.changed}
                value={props.value}
                className={isError}
                // autoFocus="true"
                // ref={(input) => { textFocus = input; }}
                {...props}
                // ref={props.ref}
            />
            {/* <input
                type="button"
                value="Focus the text input"
                onClick={handleClick}
            /> */}
        </div>
    )
};

export default textInput;