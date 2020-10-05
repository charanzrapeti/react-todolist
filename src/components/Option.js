import React from "react";
const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">
        {props.count}. {props.optiontext}
      </p>
      <button
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.optiontext);
        }}
      >
        Delete
      </button>
    </div>
  );
};
// class Option extends React.Component {
//   render() {
// return (
//   <div>
//     <p>{this.props.optiontext}</p>
//   </div>
// );
//   }
// }
export default Option;
