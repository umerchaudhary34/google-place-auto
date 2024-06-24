import {TARGET_LOCATIONS, TARGET_LOC_DATA} from './types';

const initialState = {
  locations: [],
  api_data: [],
};

export default (
  state = initialState,
  {type, payload}: {type: string; payload: any},
) => {
  switch (type) {
    case TARGET_LOCATIONS:
      return {...state, locations: [...state.locations, payload]};
    case TARGET_LOC_DATA:
      return {...state, api_data: [...state.api_data, payload]};
    default:
      return state;
  }
};
