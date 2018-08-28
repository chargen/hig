import React, { Component } from "react";
import PropTypes from "prop-types";

import ProfileFlyoutPresenter from "./presenters/ProfileFlyoutPresenter";
import ProfileFlyoutBehavior from "./behaviors/ProfileFlyoutBehavior";

export default class ProfileFlyout extends Component {
  static propTypes = {
    /** Signed-in user's email address */
    email: PropTypes.string,
    /** Url pointing to signed in user's avatar image */
    image: PropTypes.string,
    /** Signed-in user's name */
    name: PropTypes.string,
    /** Called when user clicks away from the profile flyout */
    onProfileClickOutside: PropTypes.func,
    /** Called when user clicks the profile image */
    onProfileImageClick: PropTypes.func,
    /** Called when user clicks on the settings button */
    onProfileSettingsClick: PropTypes.func,
    /** Called when the user clicks on the sign out button */
    onSignOutClick: PropTypes.func,
    /** Shows or hides the flyout */
    open: PropTypes.bool,
    /** Label identifying the settings button */
    profileSettingsLabel: PropTypes.string,
    /** URL to navigate to when clicking the settings button */
    profileSettingsLink: PropTypes.string,
    /** Label identifying the sign out button */
    signOutLabel: PropTypes.string,
    /** URL to navigate to when clicking the sign out button */
    signOutLink: PropTypes.string
  };

  render() {
    const {
      email,
      image,
      name,
      onProfileClickOutside,
      onProfileImageClick,
      onProfileSettingsClick,
      onSignOutClick,
      profileSettingsLabel,
      profileSettingsLink,
      signOutLabel,
      signOutLink
    } = this.props;

    return (
      <ProfileFlyoutBehavior
        onProfileClickOutside={onProfileClickOutside}
        onProfileImageClick={onProfileImageClick}
        onProfileSettingsClick={onProfileSettingsClick}
        onSignOutClick={onSignOutClick}
      >
        {({
          handleProfileClickOutside,
          handleProfileImageClick,
          handleProfileSettingsClick,
          handleSignOutClick,
          open
        }) => (
          <ProfileFlyoutPresenter
            email={email}
            image={image}
            name={name}
            onProfileClickOutside={handleProfileClickOutside}
            onProfileImageClick={handleProfileImageClick}
            onProfileSettingsClick={handleProfileSettingsClick}
            onSignOutClick={handleSignOutClick}
            open={open}
            profileSettingsLabel={profileSettingsLabel}
            profileSettingsLink={profileSettingsLink}
            signOutLabel={signOutLabel}
            signOutLink={signOutLink}
          />
        )}
      </ProfileFlyoutBehavior>
    );
  }
}
