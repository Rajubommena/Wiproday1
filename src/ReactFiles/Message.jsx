import React from 'react';

const Message = ({ text }) => { //defines a functional component called Message

//it uses object destructuring, instead of writing props.text, you directly get text from props
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
};

export default Message;