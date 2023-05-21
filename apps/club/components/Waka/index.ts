import Waka from './Waka';
import WakaMemberList from './WakaMemberList';
import { WakaRegisterModal } from './WakaRegisterModal';

export default Object.assign(Waka, {
  MemberList: WakaMemberList,
  RegisterModal: WakaRegisterModal,
});
