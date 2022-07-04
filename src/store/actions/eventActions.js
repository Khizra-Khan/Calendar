import { ActionConstants } from "../../constants/actionContants";

export function createEvent(event) {
  return { type: ActionConstants.CREATE_EVENT, event: event };
}
