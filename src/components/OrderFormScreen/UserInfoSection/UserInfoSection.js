import React from "react";
import classes from "./UserInfoSection.css";
import { connect } from "react-redux";
import { updateUserInfo } from "../../../redux/actions/userInfo";

const UserInfoSection = props => {
  const formRef = React.createRef();
  function onSubmitBtnClick(evt) {
    evt.preventDefault();
    const formData = new FormData(formRef.current);
    const userInfo = {
      email: formData.get("email"),
      name: formData.get("name"),
      lastName: formData.get("lastName"),
      message: formData.get("message")
    };
    props.updateUserInfo(userInfo);
  }

  return (
    <div className={classes.UserInfoSection}>
      <form ref={formRef}>
        <label>
          Email <input type="text" name="email" />
        </label>
        <hr />
        <label>
          Vorname <input type="text" name="name" />
        </label>
        <hr />
        <label>
          Nachname <input type="text" name="lastName" />
        </label>
        <hr />
        <label>
          Anmerkungen <textarea cols={50} rows={7} name="message" />
        </label>
        <hr />
        <input type="submit" value="Absenden" onClick={onSubmitBtnClick} />
      </form>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    updateUserInfo: userInfo => {
      dispatch(updateUserInfo(userInfo));
    }
  };
}
export default connect(
  null,
  mapDispatchToProps
)(UserInfoSection);
