import React from "react";
const Action = (props) => {
  return (
    <div>
      <button
        className="big-button"
        disabled={!props.Hasoptions}
        onClick={props.Handlepick}
      >
        What Should I do?
      </button>
    </div>
  );
};

// class Action extends React.Component {
//   render() {
// return (
//   <div>
//     <button
//       disabled={!this.props.Hasoptions}
//       onClick={this.props.Handlepick}
//     >
//       What Should I do?
//     </button>
//   </div>
// );
//   }
// }
export default Action;
