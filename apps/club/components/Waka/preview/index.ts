import WakaContextWrapper from './Waka';
import WakaMemberList from './WakaMemberList';
import { WakaMemberListView } from './WakaMemberListView';
import { WakaRegisterModal } from './WakaRegisterModal';

export const WakaPreview = Object.assign(WakaContextWrapper, {
  MemberList: WakaMemberList,
  RegisterModal: WakaRegisterModal,
  PureList: WakaMemberListView,
});
