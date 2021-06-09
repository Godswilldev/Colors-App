import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ColorBox extends Component {
  state = {
    copied: false,
  };

  handleCopy = () =>
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 1500)
    );

  render() {
    const { name, background } = this.props;
    return (
      <div style={{ background: background }} className="colorBox">
        <div
          style={{ background: background }}
          className={`copy__overlay ${this.state.copied && "show"}`}
        />
        <div className={`copy__message ${this.state.copied && "show"}`}>
          <h1>copied!</h1>
          <p>{this.props.background}</p>
        </div>
        <div className="copy__container">
          <div className="box__content">
            <span>{name}</span>
          </div>
          <CopyToClipboard text={background} onCopy={this.handleCopy}>
            <button className="copy__button">Copy</button>
          </CopyToClipboard>
        </div>
        <span className="see__more">More</span>
      </div>
    );
  }
}

export default ColorBox;
