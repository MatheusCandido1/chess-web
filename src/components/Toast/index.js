/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Overlay } from './styles';

const Color = {
  success: 'is-success',
  error: 'is-danger',
  info: 'is-info',
};

export default function Toast({
  color = Color.info, message, show, DismissToast,
}) {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <div className={`notification ${Color[color]}`}>
        <button onClick={DismissToast} type="button" className="delete" />
        {message}
      </div>
    </Overlay>,
    document.getElementById('toast-root'),
  );
}

Toast.propTypes = {
  color: PropTypes.string.isRequired,
  show: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

Toast.defaultProps = {
  show: false,
};
/*
const hideToast = () => {
  setToast({
    message: '',
    color: '',
    show: false,
  });
};

const showToast = async (message, color) => {
  setToast({
    message,
    color,
    show: true,
  });
  await delay(5000);
  hideToast();
};

      <Toast
        color={toast.color}
        message={toast.message}
        show={toast.show}
        DismissToast={hideToast}
      />
*/
