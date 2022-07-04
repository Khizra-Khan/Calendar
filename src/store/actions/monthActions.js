import { ActionConstants } from "../../constants/actionContants";

export const previousMonth = (month) => {
  return { type: ActionConstants.PREVIOUS_MONTH, month: month };
};

export function nextMonth(month) {
  return { type: ActionConstants.NEXT_MONTH, month: month };
}
