import moment from "moment";
import { ActionConstants } from "../constants/actionContants";

const months = moment.months();
const currentMonthInNum = moment().month();

const initialState = {
  id: currentMonthInNum,
  name: months[currentMonthInNum],
};

export default function monthReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionConstants.NEXT_MONTH:
      if (state.id < months.length - 1) {
        const newstate = {
          id: state.id + 1,
          name: months[state.id + 1],
        };
        return newstate;
      }
      return state;
    case ActionConstants.PREVIOUS_MONTH:
      if (state.id > 0) {
        const newstate = {
          id: state.id - 1,
          name: months[state.id - 1],
        };
        return newstate;
      }
      return state;
    default:
      return state;
  }
}
