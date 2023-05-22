import { Button, Container, Flex, Logo, Modal, Text } from '@megabrain/ui';
import {
  WakaDepartment,
  WakaOrganization,
  postWakaMember,
  updateWakaMemberTime,
} from '@megabrain/core';
import { WakaMemberRegisterState, useWakaMemberRegister } from './hooks/register';
import { registerContainerStyle } from './WakaRegisterModal.style';
import { ChangeEventHandler } from 'react';

interface WakaRegisterModal {
  open: boolean;
  close(): void;
}

export const WakaRegisterModal: React.FC<WakaRegisterModal> = ({ open, close }) => {
  const [state, dispatch] = useWakaMemberRegister();

  const handleConfirm = () => {
    if (!validateWakaRegister(state) || !confirm('정말로 등록하시겠습니까?')) {
      return;
    }
    postWakaMember(state).then(() => {
      alert('등록이 완료되었습니다.');
      updateWakaMemberTime(7);
      close();
    });
  };

  const handleOrganizationChange: ChangeEventHandler<HTMLSelectElement> = ({ target }) =>
    dispatch({ organization: target.value as WakaOrganization });
  const handleNameChange: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    dispatch({ name: target.value });
  const handleGithubNameChange: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    dispatch({ githubName: target.value });
  const handleAPIChange: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    dispatch({ apiKey: target.value });
  const handleDepartmentChange: ChangeEventHandler<HTMLSelectElement> = ({ target }) =>
    dispatch({ department: target.value as WakaDepartment });

  return (
    <Modal
      open={open}
      close={close}
    >
      <Flex
        border
        modal
        background
        css={registerContainerStyle}
        direction="col"
      >
        <Logo size="large" />
        <Text
          tag="h1"
          type="primary"
        >
          Membership
        </Text>

        <input
          value={state.name}
          placeholder="이름..."
          onChange={handleNameChange}
        />
        <input
          value={state.githubName}
          placeholder="Github Name..."
          onChange={handleGithubNameChange}
        />
        <select onChange={handleOrganizationChange}>
          <option value={WakaOrganization.Megabrain}>메가브레인</option>
          <option value={WakaOrganization.Dotgabi}>돗가비</option>
        </select>
        <select onChange={handleDepartmentChange}>
          <option value={WakaDepartment.Frontend}>Frontend</option>
          <option value={WakaDepartment.Backend}>Backend</option>
        </select>
        <input
          value={state.apiKey}
          placeholder="Wakatime API KEY"
          onChange={handleAPIChange}
        />
        <a
          rel="noreferrer"
          href="https://wakatime.com/settings/account"
          target="_blank"
        >
          API Key...
        </a>

        <Flex
          direction={{
            '@mobile': 'col-reverse',
          }}
        >
          <Container flow>
            <Button
              full
              onClick={close}
            >
              <Text
                align="center"
                weight="thin"
                display="block"
                full
              >
                취소
              </Text>
            </Button>
          </Container>
          <Container
            flow
            border
            css={{
              backgroundColor: '#9AE5B7',
            }}
          >
            <Button
              full
              color="primary"
              onClick={handleConfirm}
            >
              <Text
                align="center"
                weight="normal"
                display="block"
                full
              >
                확인
              </Text>
            </Button>
          </Container>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default WakaRegisterModal;

const validateWakaRegister = (value: WakaMemberRegisterState) => {
  return value.apiKey.length > 0 && value.githubName.length > 0 && value.name.length > 0;
};
