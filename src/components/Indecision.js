import React from "react";
import Addoption from "./AddOptions";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";
import Modal from "react-modal/lib/components/Modal";
class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  // constructor(props) {
  //   super(props);
  //   this.handleRemoveall = this.handleRemoveall.bind(this);
  //   this.handlepick = this.handlepick.bind(this);
  //   this.handleAddoption = this.handleAddoption.bind(this);
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
  //   this.state = {
  //     options: [],
  //   };
  // }

  handleRemoveall = () => {
    // this.setState(() => {
    //   return {
    //     options: [],
    //   };
    // });
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = (optionText) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return option !== optionText;
      }),
    }));
  };
  handlepick = () => {
    var ind = Math.floor(Math.random() * this.state.options.length);
    // alert(this.state.options[ind]);
    this.setState(() => ({ selectedOption: this.state.options[ind] }));
  };
  handleAddoption = (option) => {
    if (!option) {
      return "Please enter a valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option is already entered";
    }
    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat(option),
    //   };
    // });
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };
  changeModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  componentDidMount() {
    try {
      const jsondata = localStorage.getItem("options");
      const jsonresult = JSON.parse(jsondata);

      if (jsonresult) {
        this.setState(() => ({ options: jsonresult }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const jsondata = JSON.stringify(this.state.options);
      localStorage.setItem("options", jsondata);
    }
  }

  render() {
    let titles = "Indecision App";
    let subtitles = "Put your tasks in the hands of the computer";

    return (
      <div>
        <Header title={titles} subtitle={subtitles} />
        <div className="container">
          <Action
            Hasoptions={this.state.options.length > 0}
            Handlepick={this.handlepick}
          />
          <div className="widget">
            <Options
              optioned={this.state.options}
              handleRemoveall={this.handleRemoveall}
              handleDeleteOption={this.handleDeleteOption}
            />
            <Addoption handleAddoption={this.handleAddoption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          changemodal={this.changeModal}
        />
      </div>
    );
  }
}
export default IndecisionApp;
