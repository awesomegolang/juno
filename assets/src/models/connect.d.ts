import {MenuDataItem, Settings as ProSettings} from '@ant-design/pro-layout';
import {GlobalModelState} from './global';
import {UserModelState} from './user';
import {StateType} from './login';
import {UserGroupModelState} from "@/models/user_group";
import {AppModelState} from "@/models/app";
import {AccessTokenState} from "@/models/access_token";

export {GlobalModelState, UserModelState};

export interface Pagination {
  current: number
  pageSize: number
  total: number
}

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
  };
}

export interface ConnectState {
  global: GlobalModelState;
  loading: Loading;
  _settings: ProSettings;
  user: UserModelState;
  login: StateType;
  userGroup: UserGroupModelState;
  app: AppModelState
  accessToken: AccessTokenState
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}
