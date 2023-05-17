import { createPortal } from 'react-dom';
import { MODAL_ROOT_ID } from '@megabrain/ui/styles';

import { ModalElement } from './Modal.element';
import { ModalProps } from './types';

export const Modal = (props: ModalProps) => {
  let modalRoot = document.querySelector(`#${MODAL_ROOT_ID}`);

  // 모달 루트가 없는 경우, 루트를 생성하여 넣어준다.
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.id = MODAL_ROOT_ID;
    document.body.appendChild(modalRoot);
  }

  return createPortal(<ModalElement {...props} />, modalRoot);
};
