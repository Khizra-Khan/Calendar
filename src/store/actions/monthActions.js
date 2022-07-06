import { ActionConstants } from "../../constants/actionContants";

export const previousMonth = (month) => ({
  type: ActionConstants.PREVIOUS_MONTH,
  month,
});

export function nextMonth(month) {
  return { type: ActionConstants.NEXT_MONTH, month };
}
