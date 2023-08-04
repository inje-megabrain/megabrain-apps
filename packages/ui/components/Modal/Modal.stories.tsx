import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Modal } from './Modal';
import { Container } from '../Container';
import { Button } from '../Button';

const ExampleModal: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => setOpen(false);

  const toggle = () => setOpen((p) => !p);

  return (
    <>
      <Button onClick={toggle}>{open ? '닫기' : '열기'}</Button>
      <Modal
        open={open}
        close={handleClose}
      >
        <Container>Hello</Container>
      </Modal>
    </>
  );
};

const meta: Meta<typeof ExampleModal> = {
  title: 'Modal',
  component: ExampleModal,
};

export default meta;

type Story = StoryObj<typeof ExampleModal>;

export const Primary: Story = {
  render: () => <ExampleModal />,
};
