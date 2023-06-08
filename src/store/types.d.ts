import { StateType, ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./index').default>;

  export type RootState = StateType<typeof import('./root-reducer').default>;

  export type RootAction = ActionType<typeof import('./root-action').default>;

  export type Services = typeof import('../services/index').default;
  interface Types {
    RootAction: RootAction;
  }
}
