import React, { ReactNode } from 'react';
import { models, StoreModel } from './models';
import {
  createStore,
  createTypedHooks,
  StoreProvider as EasyPeasyProvider,
} from 'easy-peasy';

const store = createStore(models);

export const StoreProvider = ({ children }: { children: ReactNode }) => (
  <EasyPeasyProvider store={store}>{children}</EasyPeasyProvider>
);

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
