import { Component } from "react";

class ClassBasedComponent extends Component {
  //state
  state = {
    showText: false,
    changeColor: false,
  };

  //Both are acceptable but above is simpler so widely used
  //   constructor(props){
  //     super(props);

  //     this.state = {
  //         showText : false,
  //     };
  //   }

  handleClick = () => {
    console.log("button clicked");
    // this is not recommended
    //this.state.showText = !this.state.showText;

    const { showText, changeColor } = this.state;

    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };

  //componentDidMount
  //componentDidUpdate
  //componentUnmount

  componentDidMount() {
    console.log("this is called first time on page load");
    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor,
    });
  }

  render() {
    console.log(this.state);

    const { showText, changeColor } = this.state;

    return (
      <div>
        {showText ? (
          <h3 style={{ color: changeColor ? "red" : "black" }}>
            Class based component
          </h3>
        ) : null}

        <button onClick={this.handleClick}>Toggle Text</button>
      </div>
    );
  }
}

export default ClassBasedComponent;
