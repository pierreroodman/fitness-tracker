import PropTypes from 'prop-types';
import Button from './Button';

function Modal({ isOpen, onClose, children }) {
  // Early return: if closed, render nothing at all
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', padding: 24, borderRadius: 10, minWidth: 300 }}>
        {children}
        <Button text="Close" variant="secondary" onClick={onClose} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;