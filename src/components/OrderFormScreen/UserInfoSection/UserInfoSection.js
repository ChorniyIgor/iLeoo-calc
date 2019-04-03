import React from "react";
import classes from "./UserInfoSection.css";
import { connect } from "react-redux";
import { updateUserInfo } from "../../../redux/actions/userInfo";
import { sendOrderMessage } from "../../../redux/actions/app";
import Input from "../../../hoc/Input/Input";
import Textarea from "../../../hoc/Textarea/Textarea";

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
    props.sendOrderMessage();
  }

  return (
    <div className={classes.UserInfoSection}>
      <h2 className={classes.UserInfoSectionHeader}>Для завершення замовлення заповніть форму</h2>
      <form ref={formRef}>
        <div className={classes.FormInputContainer}>
          <div>
            <label className={classes.InputLabel}>
              <span>Vorname</span>
              <Input type="text" name="name" />
            </label>
            <label className={classes.InputLabel}>
              <span>Nachname</span>
              <Input type="text" name="lastName" />
            </label>
            <label className={classes.InputLabel}>
              <span>Email</span>
              <Input type="text" name="email" />
            </label>
          </div>
          <label className={classes.TextareaLabel}>
            <span>Anmerkungen</span>
            <Textarea className={classes.Textarea} name="message" />
          </label>
        </div>
        <input
          type="submit"
          value="Absenden"
          onClick={onSubmitBtnClick}
          className={classes.sendBtn}
        />
      </form>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    updateUserInfo: userInfo => {
      dispatch(updateUserInfo(userInfo));
    },
    sendOrderMessage: () => {
      dispatch(sendOrderMessage());
    }
  };
}
export default connect(
  null,
  mapDispatchToProps
)(UserInfoSection);
