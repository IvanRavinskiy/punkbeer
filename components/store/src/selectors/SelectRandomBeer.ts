import { AppRootStateType } from '../store';

export const SelectRandomBeer = (state: AppRootStateType) =>
  state.app.beerRandom;
