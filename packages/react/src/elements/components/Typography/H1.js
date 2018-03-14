import React from "react";
import PropTypes from "prop-types";
import Typography, { validColors, validSizes } from "./Typography";

export default class H1 extends React.PureComponent {
  render() {
    const { children, ...remainingProps } = this.props;
    return <Typography type="h1" text={children} {...remainingProps} />;
  }
}
H1.propTypes = {
  /**
   * Whether to render bold text
   */
  bold: PropTypes.bool,
  /**
   * Text to show inside the typography
   */
  children: PropTypes.string.isRequired,
  /**
   * Colors the text with one of the supported HIG colors
   */
  color: PropTypes.oneOf(validColors),
  /**
   * Whether to show text as disabled
   */
  disabled: PropTypes.bool,
  /**
   * An opacity value to modify the color, between 0.0 and 1.0
   */
  opacity: PropTypes.number,
  /**
   * Sizes the text with one of the supported modifiers
   */
  size: PropTypes.oneOf(validSizes)
};
