import React from "react";
import Option from "./Option";
const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button onClick={props.handleRemoveall} className="button button--link">
          Remove Options
        </button>
      </div>
      {props.optioned.map((option, index) => (
        <Option
          key={option}
          optiontext={option}
          handleDeleteOption={props.handleDeleteOption}
          count={index + 1}
        />
      ))}

      {props.optioned.length === 0 && (
        <p className="widget__main">Please Add an Option to get Started!</p>
      )}
    </div>
  );
};
// class Options extends React.Component {
//   render() {
// return (
//   <div>
//     {this.props.optioned.map((option) => (
//       <Option key={option} optiontext={option} />
//     ))}
//     <button onClick={this.props.handleRemoveall}>Remove Options</button>
//   </div>
// );
//   }
// }

export default Options;
