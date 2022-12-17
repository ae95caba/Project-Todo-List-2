import { isWithinInterval, addDays, parse } from "date-fns";

function isInTheNextSevenDays(day) {
  const end = Date.now();
  const start = addDays(end, 7);
  const objDate = parse(day.replaceAll("-", "/"), "yyyy/MM/dd", new Date());

  const isInTheNextSevenDays = isWithinInterval(objDate, {
    start: end,
    end: start,
  });

  return isInTheNextSevenDays;
}

export default isInTheNextSevenDays;
