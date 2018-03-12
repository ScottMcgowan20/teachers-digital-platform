import React from "react";

import C from "../../constants";
import BaseDistinctive from "./BaseDistinctiveComponent";

export default class QualityDistinctive extends React.Component {
  handleOnClick(e) {
    this.props.distinctiveClicked(C.QUALITY_DISTINCTIVE);
  }

  render() {
    return (
      <button key={this.props.title} onClick={this.handleOnClick.bind(this)}>
        <BaseDistinctive className="Distinctive" title={this.props.title} criteria={this.props.criteria} estimatedtime={this.props.estimatedtime} description={this.props.description} />
      </button>
    );
  }
}
