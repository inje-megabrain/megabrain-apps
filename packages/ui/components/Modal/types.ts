import { CSS } from '@megabrain/ui/styles';

export interface ModalProps {
  modalCss?: CSS;
  open: boolean;
  close(): void;
  children: JSX.Element; // 반드시 단일 개체가 존재해야함
  animation?: boolean;
  clearBackground?: boolean;
}
