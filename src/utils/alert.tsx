import { UncontrolledAlert } from 'reactstrap';
import './alert.scss';

export const errorAlert = (errorMessage: any, closeAlert: Boolean, setIsFieldEmpty: any) => {
  const clearAlert = () => {
    setIsFieldEmpty(!closeAlert);
    window.location.reload();
  };
  return (
    <UncontrolledAlert
      onClick={() => {
        clearAlert();
      }}
      className="alert-all"
      isOpen={closeAlert}
      color="danger"
      fade={false}
    >
      {errorMessage}
    </UncontrolledAlert>
  );
};

export const errorAlertNoRefresh = (errorMessage: any, closeAlert: Boolean, setIsFieldEmpty: any) => {
  const clearAlert = () => {
    setIsFieldEmpty(!closeAlert);
  };
  return (
    <UncontrolledAlert
      onClick={() => {
        clearAlert();
      }}
      className="alert-all"
      isOpen={closeAlert}
      color="danger"
      fade={false}
    >
      {errorMessage}
    </UncontrolledAlert>
  );
};

export const successAlert = (message: any, closeAlert: Boolean, setIsFieldEmpty: any) => {
  const clearAlert = () => {
    setIsFieldEmpty(!closeAlert);
    window.location.reload();
  };
  return (
    <UncontrolledAlert
      onClick={() => {
        clearAlert();
      }}
      className="alert-all"
      isOpen={closeAlert}
      color="success"
      fade={false}
    >
      {message}
    </UncontrolledAlert>
  );
};
