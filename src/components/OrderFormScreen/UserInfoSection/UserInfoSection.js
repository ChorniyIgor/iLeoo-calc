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
      <h2 className={classes.UserInfoSectionHeader}>
        Der letzte Schritt zum persönlichen Preisangebot..
      </h2>
      <form ref={formRef}>
        <div className={classes.FormInputContainer}>
          <div>
            <label className={classes.InputLabel}>
              <Input type="text" name="email" placeholder="Email" />
            </label>
            <label className={classes.InputLabel}>
              <Input type="text" name="lastName" placeholder="Nachname" />
            </label>
            <label className={classes.InputLabel}>
              <Input type="text" name="name" placeholder="Vorname" />
            </label>
          </div>
          <label className={classes.TextareaLabel}>
            <Textarea className={classes.Textarea} name="message" placeholder="Anmerkungen" />
          </label>
        </div>
        <button onClick={onSubmitBtnClick} className={classes.sendBtn}>
          Absenden<br />
          <span>(Wartezeit von max. 10 Min.)</span>
        </button>
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
