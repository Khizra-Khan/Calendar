import { ActionConstants } from "../constants/actionContants";

export default function eventReducer(state = [], action) {
  switch (action.type) {
    case ActionConstants.CREATE_EVENT:
      return [...state, { ...action.event }];
    default:
      return state;
  }
}
