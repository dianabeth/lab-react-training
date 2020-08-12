import React from 'react';
import './ClickablePicture.css';
export class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClickablePictureClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <div className="clickable-picture">
        <img
          src={this.state.clicked ? this.props.imgClicked : this.props.img}
          alt="ClickableImg"
          onClick={this.handleClickablePictureClick}
        />
      </div>
    );
  }
}

export default ClickablePicture;
