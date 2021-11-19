import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  onChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    let number = this.props.maxChars - this.state.message.length
    return (
      <div> 
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.onChange} value={this.state.message}/>
        {number}
      </div>
    );
  }
}

export default TwitterMessage;
