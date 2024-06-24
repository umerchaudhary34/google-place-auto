import {getTargetData} from '../services/api';
import {TARGET_LOCATIONS, TARGET_LOC_DATA} from './types';

interface iTarget {
  latlng: {
    latitude: number;
    longitude: number;
  };
  title: string;
  description: string;
}

export const targetAction = (data: iTarget) => {
  return {
    type: TARGET_LOCATIONS,
    payload: data,
  };
};

export const targetDataGet = () => async dispatch => {
  try {
    const res = await getTargetData();
    if (res?.data) {
      dispatch({
        type: TARGET_LOC_DATA,
        payload: res?.data,
      });
    }
    return res;
  } catch (err) {
    return err;
  }
};
