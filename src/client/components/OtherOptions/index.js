import React from 'react';
import Menu from '../Menu';

class OtherOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  componentDidMount() {
    document.querySelector('html').addEventListener('click', function(event) {
      if (event.target.className !== 'menu-option') {
        this.handleClose();
      }
    }.bind(this), false);
  }

  render() {
    return (
      <div className="other-options">
        <button className="home-button">Home</button>
        <button className="friends-button">Friends</button>
        <button className="mystery-button img-button"></button>
        <div className="menu-block">
          <button className="setting-button img-button" onClick={function() {
            this.handleOpen();
          }.bind(this)}></button>
          {this.state.open === true ? <Menu /> : null}
        </div>
      </div>
    );
  }
}

export default OtherOptions;
