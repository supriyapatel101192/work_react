import React, { useState } from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Label, ListGroup, Row,
} from 'reactstrap';
import './login.scss';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from 'typesafe-actions';
import { getLoginToken } from '../../../../store/wenex/actions';
import { APIHeaderCommon, UserType } from '../../../../utils/constants';
import { errorAlert } from '../../../../utils/alert';
import { setTokenToLocalStorage } from '../../../../utils/service/localstorage-service';

export const EHLogin: React.FC = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isOTP, setIsOTP] = useState(false);
  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassKey, setLoginPassKey] = useState('');
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);
  const [isPassKeyError, setIsPassKeyError] = useState(false);
  const loginTokenData = useSelector((state: RootState) => state.wenex.tokenData);
  React.useEffect(() => {
    if (loginTokenData.token !== '' && loginTokenData.errorMessage === '') {
      setTokenToLocalStorage(loginTokenData.token);
      history('/eaze-hire/exclusive');
    }
    if (loginTokenData.errorMessage === 'Token Failed to generate') {
      setIsPassKeyError(!isPassKeyError);
    }
  }, [loginTokenData.token, loginTokenData.errorMessage]);

  const handleSwitchOTP = () => {
    setIsOTP(!isOTP);
  };
  const handleUserNameChange = (e: any) => {
    setLoginUserName(e.target.value);
  };
  const handlePassKeyChange = (e: any) => {
    setLoginPassKey(e.target.value);
  };
  const handleLoginRegister = () => {
    setIsLogin(!isLogin);
  };
  const handleSubmit = () => {
    if (loginUserName !== '' && loginPassKey !== '') {
      dispatch(getLoginToken({
        userName: loginUserName,
        passKey: loginPassKey,
        userType: UserType.EH,
        requestType: APIHeaderCommon.USER_LOGIN,
      }));
    } else {
      setIsFieldEmpty(true);
    }
  };
  return (
    <React.Fragment>
      {isFieldEmpty ? (
        errorAlert('Username/Password are mandatory !!!', isFieldEmpty, setIsFieldEmpty)
      ) : null}
      {isPassKeyError ? (
        errorAlert('Invalid Username/Password !!!', isPassKeyError, setIsPassKeyError)
      ) : null}
      <Row>
        <Col lg={{ size: 7, order: 2 }} md={{ size: 7, order: 1 }} xs={{ order: 1 }} className="eh-login-head-col-bg-form">
          {isLogin
            ? (
              <div>
                <div className="eh-login-card-header">
                  <a href="/eaze-hire"><img style={{ width: '180px' }} src="/images/eazehire/eh-logo-dark.png" alt="eazehireLogo" /></a>
                </div>
                <div className="eh-login-margin-header pt-5">
                  <h4 className="eh-login-text-welcome">Welcome to EazeHire family</h4>
                </div>
                <div className="eh-login-margin-header pt-2">
                  <h6 className="eh-login-text-lite-grey">Login with you email Id / username</h6>
                </div>
                <hr className="eh-login-hr-align" />
                <div className="wx-text-login-row pt-3 mx-5">
                  <div className="wx-text-right-login">
                    <ListGroup horizontal>
                      <ListGroup className="mx-3">
                        {isOTP ? <Label check className="wnx-text-otp-true-wx">Back to Password Login</Label>
                          : <Label check className="wnx-text-otp-false-grey">OTP Login ? - coming soon</Label>}
                      </ListGroup>
                      <ListGroup>
                        <FormGroup switch>
                          <Input
                            type="switch"
                            disabled
                            className="wnx-form-check-input"
                            onClick={handleSwitchOTP}
                          />
                        </FormGroup>
                      </ListGroup>
                    </ListGroup>
                  </div>
                </div>
                <Form>
                  {
                    isOTP
                      ? (
                        <>
                          <div className="pt-4 mx-5">
                            <Input
                              placeholder="Email Id / Username"
                              type="text"
                              required
                              className="eh-login-input-group-det"
                              value={loginUserName}
                              onChange={handleUserNameChange}
                            />
                          </div>
                          <div className="mx-5 pt-5">
                            <Button className="wx-btn-filled-login" onClick={handleSubmit}>Generate OTP</Button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="pt-4 mx-5">
                            <Input
                              placeholder="Email Id / Username"
                              type="text"
                              required
                              className="eh-login-input-group-det"
                              value={loginUserName}
                              onChange={handleUserNameChange}
                            />
                          </div>
                          <div className="pt-4 mx-5">
                            <Input
                              placeholder="Password"
                              type="password"
                              required
                              className="eh-login-input-group-det"
                              value={loginPassKey}
                              onChange={handlePassKeyChange}
                            />
                          </div>
                          <div className="mx-5 pt-5">
                            <Button className="wx-btn-filled-login" onClick={handleSubmit}>Login</Button>
                          </div>
                        </>
                      )
                  }
                  <div className="wx-text-login-row pt-3 mx-4">
                    <div className="wx-text-right-login mx-4">
                      <NavLink className="small text-muted" to="#" onClick={handleLoginRegister}>Forgot password?</NavLink>
                    </div>
                  </div>
                </Form>
              </div>

            ) : (
              <div>
                <div className="card-login-header-eh">
                  <a href="/eaze-hire"><img style={{ width: '180px' }} src="/images/eazehire/eh-logo-dark.png" alt="wenexLogo" /></a>
                </div>
                <div className="eh-login-margin-header pt-5">
                  <h2 className="eh-login-text-welcome">Let&apos;s Reset your password</h2>
                </div>
                <div className="eh-login-margin-header pt-2">
                  <h6 className="eh-login-text-lite-grey">We will send you one time password to your registered email Id
                    <br />
                    Please enter you email Id / username
                  </h6>
                </div>
                <hr className="hr-align" />
                <Form>
                  <div className="pt-4 mx-5">
                    <Input
                      placeholder="Email Id / Username"
                      type="text"
                      required
                      className="eh-login-input-group-det"
                      value={loginUserName}
                      onChange={handleUserNameChange}
                    />
                  </div>
                  <div className="eh-login-text-right mx-5 pt-2">
                    <NavLink className="small text-muted" to="#" onClick={handleLoginRegister}>back to login</NavLink>
                  </div>
                  <div className="mx-5 pt-4">
                    <Button className="eh-login-btn-filled" onClick={handleSubmit}>Reset Password</Button>
                  </div>
                </Form>
              </div>
            )}
        </Col>
        <Col lg={{ size: 5, order: 1 }} md={{ size: 5, order: 2 }} xs={{ order: 2 }} className="eh-login-head-col-bg-img">
          <div className="eh-login-align-center pt-5">
            <img src="/images/common/login.png" alt="login form" className="pt-1 eh-login-img" />
          </div>
          <div className="eh-login-align-center cover-footer">
            <a href="#!" className="small text-muted me-1">Terms of use</a>
            <a href="#!" style={{ marginLeft: '5px' }} className="small text-muted">Privacy policy</a>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default EHLogin;
