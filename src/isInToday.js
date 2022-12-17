import { isToday, parse } from "date-fns";

function isInToday(day) {
  const objDate = parse(day.replaceAll("-", "/"), "yyyy/MM/dd", new Date());

  return isToday(objDate);
}

export default isInToday;
