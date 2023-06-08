import React, { useState } from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, InputGroup, InputGroupText, Label, ListGroup, Row,
} from 'reactstrap';
import './login.scss';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from 'typesafe-actions';
// import WnxNavBar from '../../wenex/navbar/wenex.navbar';
// import WnxFooter from '../../../scenes/wenex/wenex.footer';
import OtpInput from 'react-otp-input';
import { ColorRing } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye, faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { getForgotPassword, getLoginToken, getProfile } from '../../../store/wenex/actions';
import { APIHeaderCommon, UserType, APIHeaderWX } from '../../../utils/constants';
import { errorAlert, successAlert } from '../../../utils/alert';
import { setTokenToLocalStorage } from '../../../utils/service/localstorage-service';

export const WewireLogin: React.FC = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isOTP, setIsOTP] = useState(false);
  const [loginOTPUserName, setLoginOTPUserName] = useState('');
  const [loginUserName, setLoginUserName] = useState('');
  const [forgotUserName, setForgotUserName] = useState('');
  const [loginPassKey, setLoginPassKey] = useState('');
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);
  const [isOTPInput, setIsOTPInput] = useState(false);
  const [isOTPAll, setIsOTPAll] = useState(true);
  const [isLoader, setIsLoader] = useState(false);
  const [inputOTP, setInputOTP] = useState('');
  const [isPassKeyError, setIsPassKeyError] = useState(false);
  const [isNoUser, setIsNoUser] = useState(false);
  const [isPWDFailed, setIsPWDFailed] = useState(false);
  const [isPWDSuccess, setIsPWDSuccess] = useState(false);
  const loginTokenData = useSelector((state: RootState) => state.wenex.tokenData);
  const forgotPasswordData = useSelector((state: RootState) => state.wenex.forgotPassKeyData);
  const loginProfileData = useSelector((state: RootState) => state.wenex.profileData);
  const [passwordShown, setPasswordShown] = useState(false);

  React.useEffect(() => {
    if (loginTokenData.token !== '' && loginTokenData.errorMessage === '' && loginProfileData.profileData.emailId !== '') {
      if (loginProfileData.profileData.loginTp.id === 'CC') {
        history('/campus-connect/exclusive');
      } else if (loginProfileData.profileData.loginTp.id === 'WW') {
        history('/we-wire/dashboard');
      }
    }
  }, [loginTokenData.token, loginTokenData.errorMessage, loginProfileData.profileData.emailId]);

  React.useEffect(() => {
    if (forgotPasswordData.forgotPasswordData === 'Password Mail sent successfully') {
      setIsLoader(false);
      setIsPWDSuccess(true);
    } else if (loginTokenData.errorMessage === 'Mail Sent unsuccessful') {
      setIsLoader(false);
      setIsPWDFailed(!isPWDFailed);
    } else if (forgotPasswordData.forgotPasswordData === 'No record found') {
      setIsLoader(!isLoader);
      setIsNoUser(!isNoUser);
    }
  }, [forgotPasswordData.forgotPasswordData, forgotPasswordData.errorMessage]);

  React.useEffect(() => {
    if (loginTokenData.token !== '' && loginTokenData.errorMessage === '') {
      setIsLoader(!isLoader);
      if (loginTokenData.token === 'OTP Mail sent successfully') {
        setIsOTPInput(!isOTPInput);
      } else if (loginTokenData.token === 'No record found') {
        setIsLoader(!isLoader);
        setIsNoUser(!isNoUser);
      } else {
        setTokenToLocalStorage(loginTokenData.token);
        dispatch(getProfile({
          userType: UserType.CND,
          requestType: APIHeaderCommon.REQ_USER_PROFILE_INFO,
          token: loginTokenData.token,
        }));
        setIsLoader(!isLoader);
      }
    } else if (loginTokenData.errorMessage === 'Token Failed to generate') {
      setIsLoader(!isLoader);
      setIsPassKeyError(!isPassKeyError);
    }
  }, [loginTokenData.token, loginTokenData.errorMessage]);
  const handleClickShowPassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleOTPUserNameChange = (e: any) => {
    setLoginOTPUserName(e.target.value);
  };
  const handleUserNameChange = (e: any) => {
    setLoginUserName(e.target.value);
  };
  const handleForgotUserNameChange = (e: any) => {
    setForgotUserName(e.target.value);
  };
  const handlePassKeyChange = (e: any) => {
    setLoginPassKey(e.target.value);
  };
  const handleOTPChange = (e: any) => {
    setInputOTP(e);
    if (e.toString().length === 4 && e.toString().match(/^\d{4}$/) !== null) {
      setIsOTPAll(false);
    } else {
      setIsOTPAll(true);
    }
  };
  const handleLoginRegister = () => {
    setIsLogin(!isLogin);
  };
  const handleSwitchOTP = () => {
    setIsOTP(!isOTP);
  };

  const handleLoginByOTP = () => {
    if (!isLoader) {
      setIsLoader(!isLoader);
    }
    dispatch(getLoginToken({
      userName: loginOTPUserName,
      userType: UserType.CND,
      requestType: APIHeaderCommon.REQ_VERIFY_OTP,
      passKey: inputOTP,
    }));
  };

  const handleForgotPasskeySubmit = () => {
    if (forgotUserName !== '') {
      if (!isLoader) {
        setIsLoader(!isLoader);
      }
      dispatch(getForgotPassword({
        userName: forgotUserName,
        userType: UserType.CND,
        requestType: APIHeaderWX.REQ_FORGOT_PASSWORD,
      }));
    }
  };

  const handleSubmitOTP = async () => {
    if (loginOTPUserName !== '') {
      if (!isLoader) {
        setIsLoader(!isLoader);
      }
      dispatch(getLoginToken({
        userName: loginOTPUserName,
        userType: UserType.CND,
        requestType: APIHeaderCommon.REQ_GENERATE_OTP,
        passKey: '',
      }));
    }
  };

  const handleSubmit = async () => {
    if (loginUserName !== '' && loginPassKey !== '') {
      if (!isLoader) {
        setIsLoader(!isLoader);
      }
      dispatch(getLoginToken({
        userName: loginUserName,
        passKey: loginPassKey,
        userType: UserType.CND,
        requestType: APIHeaderCommon.USER_LOGIN,
      }));
    } else {
      setIsFieldEmpty(true);
    }
  };
  return (
    <React.Fragment>
      {/* <WnxNavBar /> */}
      {isFieldEmpty ? (
        errorAlert('Username/Password are mandatory !!!', isFieldEmpty, setIsFieldEmpty)
      ) : null}
      {isPassKeyError ? (
        errorAlert('Invalid Username/Password !!!', isPassKeyError, setIsPassKeyError)
      ) : null}
      {isNoUser ? (
        errorAlert('Either username is incorrect or you have not registered with us. Kindly Register !!!', isNoUser, setIsNoUser)
      ) : null}
      {isPWDFailed ? (
        errorAlert('Something went wrong. Kindly reset password again !!!', isPWDFailed, setIsPWDFailed)
      ) : null}
      {isPWDSuccess ? (
        successAlert('One Time Password has been sent on your registered mobile. Kindly Login !!!', isPWDSuccess, setIsPWDSuccess)
      ) : null}
      <Row>
        <Col lg={{ size: 7, order: 2 }} md={{ size: 7, order: 1 }} xs={{ order: 1 }} className="head-col-bg-form">
          {isLogin
            ? (
              <div>
                <div className="card-login-header-wnx">
                  <Row>
                    <Col lg="12" md="12" className="pt-0">
                      <a href="/campus-connect"><img style={{ width: '120px' }} src="/images/campusconnect/cc-logo-dark.png" alt="ccLogo" /></a>
                    </Col>
                    <Col lg="12" md="12">
                      <h6 className="text-lite-grey pt-2">OR</h6>
                    </Col>
                    <Col lg="12" md="12">
                      <a href="/"><img style={{ width: '110px' }} src="/images/wewire/we-wire-logo-dark.png" alt="wwLogo" /></a>
                    </Col>
                  </Row>
                </div>
                <hr className=" hr-align" />
                <div className="margin-login-header pt-1">
                  <h4 className="text-welcome">Welcome to WeNex family</h4>
                </div>
                <div className="margin-login-header pt-1">
                  <h6 className="text-lite-grey">Login with you email Id / username</h6>
                </div>
                {/* <hr className="hr-align" /> */}
                <div className="wx-text-login-row pt-3 mx-5">
                  <div className="wx-text-right-login">
                    <ListGroup horizontal>
                      <ListGroup className="mx-3">
                        {isOTP ? <Label check className="wnx-text-otp-true-wx">Back to Password Login</Label>
                          : <Label check className="wnx-text-otp-false-grey">OTP Login ?</Label>}
                      </ListGroup>
                      <ListGroup>
                        <FormGroup switch>
                          <Input
                            type="switch"
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
                              disabled={isOTPInput}
                              className="input-group-login-det-wx"
                              value={loginOTPUserName}
                              onChange={handleOTPUserNameChange}
                            />
                          </div>
                          {isOTPInput ? (
                            <>
                              <div className="pt-3 mx-5 align-center-login-otp-wnx">
                                <h6 className="wnx-text-otp-send-email-wx">Enter verification code sent on your Email</h6>
                              </div>
                              <div className="pt-2 mx-5 align-center-login-otp-wnx">
                                <OtpInput
                                  value={inputOTP}
                                  onChange={handleOTPChange}
                                  numInputs={4}
                                  separator={(
                                    <span> </span>
                              )}
                                  inputStyle={{
                                    width: '3.5rem',
                                    height: '3.5rem',
                                    margin: '0.5rem',
                                    fontSize: '1.5rem',
                                    borderRadius: 4,
                                    border: '1px solid rgba(0,0,0,0.3)',
                                  }}
                                />
                              </div>
                              {/* <div className="pt-2 mx-5 align-center-login-otp-wnx">
                                <NavLink className="small text-otp-no-email-wx" to="#" onClick={handleSubmitOTP}>Didn&apos;t recieved yet? Click to generate New</NavLink>
                              </div> Handle with Timer Logic */}
                            </>
                          ) : null }
                          <div className="mx-5 pt-4">
                            {isOTPInput ? (
                              <Button disabled={isOTPAll} className="wx-btn-filled-login" onClick={handleLoginByOTP}>
                                {isLoader ? (
                                  <>
                                    Login
                                    <ColorRing
                                      visible
                                      height="30"
                                      width="35"
                                      ariaLabel="blocks-loading"
                                      wrapperStyle={{}}
                                      wrapperClass="blocks-wrapper"
                                      colors={['#02302B', '#C13B06', '#02302B', '#02302B', '#C13B06']}
                                    />
                                  </>
                                ) : 'Login'}
                              </Button>
                            )
                              : (
                                <Button disabled={loginOTPUserName === ''} className="wx-btn-filled-login" onClick={handleSubmitOTP}>
                                  {isLoader ? (
                                    <>
                                      Generate OTP
                                      <ColorRing
                                        visible
                                        height="30"
                                        width="35"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="blocks-wrapper"
                                        colors={['#02302B', '#C13B06', '#02302B', '#02302B', '#C13B06']}
                                      />
                                    </>
                                  ) : 'Generate OTP'}
                                </Button>
                              )}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="pt-4 mx-5">
                            <Input
                              placeholder="Email Id / Username"
                              type="text"
                              required
                              className="input-group-login-det-wx"
                              value={loginUserName}
                              onChange={handleUserNameChange}
                            />
                          </div>
                          <div className="pt-4 mx-5">
                            <InputGroup>
                              <Input
                                placeholder="Password"
                                type={passwordShown ? 'text' : 'password'}
                                required
                                className="input-group-pass-det-wx"
                                value={loginPassKey}
                                onChange={handlePassKeyChange}
                              />
                              <InputGroupText className="wx-show-hide-icon">
                                {passwordShown
                                  ? (<FontAwesomeIcon icon={faEye} onClick={handleClickShowPassword} />)
                                  : (<FontAwesomeIcon icon={faEyeSlash} onClick={handleClickShowPassword} />
                                  )}
                              </InputGroupText>
                            </InputGroup>
                          </div>
                          <div className="mx-5 pt-5">
                            <Button className="wx-btn-filled-login" onClick={handleSubmit}>
                              {isLoader ? (
                                <>
                                  Login
                                  <ColorRing
                                    visible
                                    height="30"
                                    width="35"
                                    ariaLabel="blocks-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="blocks-wrapper"
                                    colors={['#02302B', '#C13B06', '#02302B', '#02302B', '#C13B06']}
                                  />
                                </>
                              ) : 'Login'}
                            </Button>
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
                <div className="align-center-login-wnx">
                  <p className="text-lite-grey">Dont have an account ?
                    <a href="/register" style={{ marginLeft: '2px', textDecoration: 'underline' }} className="text-login-blue">Register here</a>
                  </p>
                </div>
              </div>

            ) : (
              <div>
                <div className="card-login-header-wnx">
                  <a href="/"><img style={{ width: '180px' }} src="/wenex-dark.png" alt="wenexLogo" /></a>
                </div>
                <div className="margin-login-header pt-4">
                  <h2 className="text-welcome">Let&apos;s Reset your password</h2>
                </div>
                <div className="margin-login-header pt-2">
                  <h6 className="text-lite-grey">We will send you one time password to your registered email Id
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
                      className="input-group-login-det-wx"
                      value={forgotUserName}
                      onChange={handleForgotUserNameChange}
                    />
                  </div>
                  <div className="text-right-login mx-5 pt-2">
                    <NavLink className="small text-muted" to="#" onClick={handleLoginRegister}>back to login</NavLink>
                  </div>
                  <div className="mx-5 pt-4">
                    <Button className="wx-btn-filled-login" onClick={handleForgotPasskeySubmit}>
                      {isLoader ? (
                        <>
                          Reset Password
                          <ColorRing
                            visible
                            height="30"
                            width="35"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#02302B', '#C13B06', '#02302B', '#02302B', '#C13B06']}
                          />
                        </>
                      ) : 'Reset Password'}
                    </Button>
                  </div>
                </Form>
                <div className="align-center-login-wnx">
                  <p className="text-lite-grey">Dont have an account ?
                    <a href="/register" style={{ marginLeft: '2px', textDecoration: 'underline' }} className="text-login-blue">Register here</a>
                  </p>
                </div>
              </div>
            )}
        </Col>
        <Col lg={{ size: 5, order: 1 }} md={{ size: 5, order: 2 }} xs={{ order: 2 }} className="head-col-bg-img">
          <div className="align-center-login-wnx pt-5">
            <a href="/"><img style={{ width: '180px' }} src="/wenex-dark.png" alt="wenexLogo" /></a>
          </div>
          <div className="align-center-login-wnx pt-0">
            <img src="/images/common/login.png" alt="login form" className="pt-1 wnx-login-img" />
          </div>
          <div className="align-center-login-wnx cover-footer">
            <a href="#!" className="small text-muted me-1">Terms of use</a>
            <a href="#!" style={{ marginLeft: '5px' }} className="small text-muted">Privacy policy</a>
          </div>
        </Col>
      </Row>
      {/* <div className="footer">
        <WnxFooter />
      </div> */}
    </React.Fragment>
  );
};

export default WewireLogin;
