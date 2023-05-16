import BaseHeader from './Header.style';

export const Header: React.FC = () => {
  return (
    <BaseHeader>
      <div>로고자리</div>
      <button>버튼자리</button>
      <button>액션버튼자리</button>
    </BaseHeader>
  );
};

export default Header;
