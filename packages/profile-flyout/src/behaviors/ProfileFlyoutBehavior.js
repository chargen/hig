import { Component } from "react";
import { PropTypes } from "prop-types";

export default class ProfileFlyoutBehavior extends Component {
  static propTypes = {
    /** Render prop */
    children: PropTypes.func,
    /** Called when user clicks away from the profile flyout */
    onProfileClickOutside: PropTypes.func,
    /** Called when user clicks the profile image */
    onProfileImageClick: PropTypes.func,
    /** Called when user clicks on the settings button */
    onProfileSettingsClick: PropTypes.func,
    /** Called when the user clicks on the sign out button */
    onSignOutClick: PropTypes.func,
    /** Shows or hides the flyout */
    open: PropTypes.bool
  };

  static defaultProps = {
    open: false
  };

  state = {
    open: this.props.open
  };

  handleProfileClickOutside = event => {
    const { onProfileClickOutside } = this.props;
    if (onProfileClickOutside) {
      onProfileClickOutside(event);
    }
    if (this.state.open === true) {
      this.setState({
        open: false
      });
    }
  };

  handleProfileImageClick = event => {
    const { onProfileImageClick } = this.props;
    if (onProfileImageClick) {
      onProfileImageClick(event);
    }
    this.setState({
      open: !this.state.open
    });
  };

  handleProfileSettingsClick = event => {
    const { onProfileSettingsClick } = this.props;
    if (onProfileSettingsClick) {
      onProfileSettingsClick(event);
    }
  };

  handleSignOutClick = event => {
    const { onSignOutClick } = this.props;
    if (onSignOutClick) {
      onSignOutClick(event);
    }
  };

  render() {
    return this.props.children({
      handleProfileClickOutside: this.handleProfileClickOutside,
      handleProfileImageClick: this.handleProfileImageClick,
      handleProfileSettingsClick: this.handleProfileSettingsClick,
      handleSignOutClick: this.handleSignOutClick,
      open: this.state.open
    });
  }
}
