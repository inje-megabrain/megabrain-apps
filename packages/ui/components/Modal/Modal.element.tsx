import { BaseModal, BaseModalBackface } from './Modal.style';
import { ModalProps } from './types';

export const ModalElement: React.FC<ModalProps> = ({
  modalCss,
  open,
  close,
  children,
  animation,
  clearBackground,
}) => {
  return (
    <BaseModal
      css={modalCss}
      open={open}
    >
      <BaseModalBackface
        clearBackground={clearBackground}
        aria-hidden="true"
        animation={animation}
        onClick={close}
      />
      {children}
    </BaseModal>
  );
};

export default ModalElement;
