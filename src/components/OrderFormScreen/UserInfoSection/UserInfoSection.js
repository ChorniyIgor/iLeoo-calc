import React from "react";
import classes from "./UserInfoSection.css";
import { connect } from "react-redux";
import { updateUserInfo } from "../../../redux/actions/userInfo";
import { sendOrderMessage, showOrderSuccessfulScreen } from "../../../redux/actions/app";
import Input from "../../../hoc/Input/Input";
import Textarea from "../../../hoc/Textarea/Textarea";
import is from "is_js";

class UserInfoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formRef: React.createRef(),
      emailInput: {
        isInCorrect: true,
        isTouched: false
      },
      lastNameInput: {
        isInCorrect: true,
        isTouched: false
      },
      nameInput: {
        isInCorrect: true,
        isTouched: false
      },
      isValidationError: false
    };
  }
  onSubmitBtnClick = evt => {
    evt.preventDefault();
    this.setState({
      emailInput: {
        isTouched: true,
        isInCorrect: this.state.emailInput.isInCorrect
      },
      lastNameInput: {
        isTouched: true,
        isInCorrect: this.state.lastNameInput.isInCorrect
      },
      nameInput: {
        isTouched: true,
        isInCorrect: this.state.nameInput.isInCorrect
      }
    });
    if (
      !this.state.emailInput.isInCorrect &&
      !this.state.lastNameInput.isInCorrect &&
      !this.state.nameInput.isInCorrect
    ) {
      const formData = new FormData(this.state.formRef.current);
      const userInfo = {
        email: formData.get("email"),
        name: formData.get("name"),
        lastName: formData.get("lastName"),
        message: formData.get("message")
      };
      this.props.updateUserInfo(userInfo);
      this.props.sendOrderMessage();
      this.props.showOrderSuccessfulScreen();
    } else {
      this.setState({
        isValidationError: true
      });
    }
  };

  checkEmailInput = evt => {
    this.setState({
      emailInput: {
        isInCorrect: !is.email(evt.target.value),
        isTouched: true
      },
      isValidationError: false
    });
  };

  checkLastNameInput = evt => {
    const isEmpty = evt.target.value.length < 1;
    this.setState({
      lastNameInput: {
        isInCorrect: isEmpty,
        isTouched: true
      },
      isValidationError: false
    });
  };

  checkNameInput = evt => {
    const isEmpty = evt.target.value.length < 1;
    this.setState({
      nameInput: {
        isInCorrect: isEmpty,
        isTouched: true
      },
      isValidationError: false
    });
  };

  render() {
    return (
      <div className={classes.UserInfoSection}>
        <h2 className={classes.UserInfoSectionHeader}>
          Der letzte Schritt zum persönlichen Preisangebot..
        </h2>
        <form ref={this.state.formRef}>
          <div className={classes.FormInputContainer}>
            <div>
              <label className={classes.InputLabel}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={this.checkEmailInput}
                  inputinfo={this.state.emailInput}
                />
              </label>
              <label className={classes.InputLabel}>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Nachname"
                  onChange={this.checkLastNameInput}
                  inputinfo={this.state.lastNameInput}
                />
              </label>
              <label className={classes.InputLabel}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Vorname"
                  onChange={this.checkNameInput}
                  inputinfo={this.state.nameInput}
                />
              </label>
            </div>
            <label className={classes.TextareaLabel}>
              <Textarea
                className={classes.Textarea}
                name="message"
                placeholder="Anmerkungen"
                onChange={this.checkTextInput}
              />
            </label>
          </div>
          <span className={classes.ValidationError}>
            {this.state.isValidationError ? "Виділені поля обов'язкові до заповнення" : null}
          </span>
          <button onClick={this.onSubmitBtnClick} className={classes.sendBtn} disabled={false}>
            Absenden
            <br />
            <span>(Wartezeit von max. 10 Min.)</span>
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUserInfo: userInfo => {
      dispatch(updateUserInfo(userInfo));
    },
    sendOrderMessage: () => {
      dispatch(sendOrderMessage());
    },
    showOrderSuccessfulScreen: () => {
      dispatch(showOrderSuccessfulScreen());
    }
  };
}
export default connect(
  null,
  mapDispatchToProps
)(UserInfoSection);
