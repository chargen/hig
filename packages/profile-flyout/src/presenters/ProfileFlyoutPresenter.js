import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@hig/avatar";
import Button from "@hig/button";
import Flyout from "@hig/flyout";
import "@hig/flyout/build/index.css";
import { anchorPoints } from "../../../flyout/src/anchorPoints";
import { availableTypes, availableSizes } from "../../../button/src/constants";
import { AVAILABLE_SIZES } from "../../../avatar/src/sizes";

import "./ProfileFlyoutPresenter.scss";

export default class ProfileFlyoutPresenter extends Component {
  static propTypes = {
    email: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    onProfileClickOutside: PropTypes.func,
    onProfileImageClick: PropTypes.func,
    onProfileSettingsClick: PropTypes.func,
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

  static defaultProps = {};

  flyoutContent() {
    return (
      <div className={"hig__profile__profile-flyout-content"}>
        <div className={"hig__profile__profile-flyout-content__name"}>
          {this.props.name}
        </div>
        <div className={"hig__profile__profile-flyout-content__email"}>
          {this.props.email}
        </div>
        <div className={"hig__profile__profile-flyout-content__links"}>
          <div className={"hig__profile__profile-flyout-content__link"}>
            <Button
              title={"Sign out"} // TODO: replace with props
              type={"secondary"} // TODO: why cant we use availableTypes.SECONDARY successfully here?
              link={""} // TODO: replace with props
              size={"small"} // TODO: why cant we use availableTypes.SMALL here?
              onClick={this.props.onSignOutClick}
            />
          </div>
          <div className={"hig__profile__profile-flyout-content__link"}>
            <Button
              title={"ProfileSettings"} // TODO: replace with props
              type={"secondary"}
              link={""} // TODO: replace with props
              size={"small"}
              onClick={this.props.onProfileSettingsClick}
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { image, name, open } = this.props;

    return (
      <div
        role="button"
        tabIndex="0"
        className="hig__profile"
        onClick={this.props.onProfileImageClick}
      >
        <Flyout
          anchorPoint={anchorPoints.TOP_LEFT}
          open={open}
          panel={({ innerRef }) => (
            <Flyout.Panel innerRef={innerRef}>
              {this.flyoutContent()}
            </Flyout.Panel>
          )}
        >
          <div className="hig__profile__profile-image">
            <Avatar image={image} name={name} size={"medium-32"} />
          </div>
        </Flyout>
      </div>
    );
  }
}
