import React from "react";

class Addoption extends React.Component {
  state = {
    error: undefined,
  };
  // constructor(props) {
  //   super(props);
  //   this.showit = this.showit.bind(this);
  // }
  showit = (e) => {
    e.preventDefault();
    var value = e.target.elements.forum.value.trim();
    e.target.elements.forum.value = "";
    var error = this.props.handleAddoption(value);
    // this.setState(() => {
    //   return {
    //     error,
    //   };
    // });
    this.setState(() => ({ error }));
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="form-option" onSubmit={this.showit}>
          <input
            className="form-option__input"
            type="text"
            name="forum"
          ></input>
          <button className="button">Add One</button>
        </form>
      </div>
    );
  }
}

export default Addoption;
