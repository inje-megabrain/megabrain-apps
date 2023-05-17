import { BaseModal, BaseModalBackface } from './Modal.style';
import { ModalProps } from './types';

export const ModalElement: React.FC<ModalProps> = ({
  modalCss,
  open,
  close,
  children,
  animation,
}) => {
  return (
    <BaseModal
      css={modalCss}
      open={open}
    >
      <BaseModalBackface
        aria-hidden="true"
        animation={animation}
        onClick={close}
      />
      {children}
    </BaseModal>
  );
};

export default ModalElement;
