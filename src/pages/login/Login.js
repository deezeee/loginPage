import React, { useState, useCallback } from "react";
import "./Login.css";

import showPasswordIcon from "../../assets/icons/eye.svg";
import checkboxBlank from "../../assets/icons/checkbox-blank.svg";
import checkboxChecked from "../../assets/icons/checkbox-checked.svg";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [isRememberAccount, setIsRememberAccount] = useState(false);
  const [isShowPassword, setIsShowPassoword] = useState(false);

  const handleRememberAccount = () => {
    setIsRememberAccount(!isRememberAccount);
  };

  const handleToggleShowPassword = () => {
    setIsShowPassoword(!isShowPassword);
  };

  const handleLogin = () => {
    if (
      userEmail === "" ||
      userPassword === "" ||
      isInputBothEmailAndPassword() === false
    ) {
      return;
    }
    console.log({ email: userEmail, password: userPassword });
  };

  const handleEmailChanged = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChanged = (event) => {
    setUserPassword(event.target.value);
  };

  const isInputBothEmailAndPassword = () => {
    return userEmail.trim() !== "" && userPassword.trim() !== "";
  };

  return (
    <div className="overlay">
      <div className="login-form-container">
        <div className="login-form-title">Đăng Nhập</div>
        <div className="login-register">
          <span>Chưa có tài khoản?</span>
          <a href="blank" className="link green">
            Đăng kí tại đây
          </a>
        </div>
        <div>
          <div className="login-form-body">
            <div className="login-email">
              <div>Email</div>
              <input
                type="text"
                placeholder="Nhập email"
                onChange={(e) => handleEmailChanged(e)}
              />
            </div>
            <div className="login-password">
              <div>Mật khẩu</div>
              <div className="password-field">
                <input
                  type={isShowPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  onChange={(e) => handlePasswordChanged(e)}
                ></input>
                <div
                  className="show-password"
                  onClick={handleToggleShowPassword}
                >
                  <img
                    className={`show-password-icon icon ${
                      isShowPassword ? "checked" : ""
                    }`}
                    src={showPasswordIcon}
                    alt="eye-icon"
                  />
                </div>
              </div>
            </div>
            <div className="login-more">
              <div className="login-remember">
                <div onClick={handleRememberAccount}>
                  <img
                    className={`remember-me icon ${
                      isRememberAccount ? "checked" : ""
                    }`}
                    src={isRememberAccount ? checkboxChecked : checkboxBlank}
                    alt="check-box"
                  />
                </div>
                <span>Ghi nhớ tài khoản của tôi</span>
              </div>
              <div className="forgot-password">
                <a className="link green" href="blank">
                  Quên mật khẩu?
                </a>
              </div>
            </div>
            <div
              className={`login-submit ${
                isInputBothEmailAndPassword() ? "active" : "disabled"
              }`}
              onClick={handleLogin}
            >
              ĐĂNG NHẬP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
