import dayjs from "dayjs";

export function getMOnth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year(); 
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day(); 
  let getMonthCount = 0 - firstDayOfMonth; 

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      getMonthCount++;
      return dayjs(new Date(year, month, getMonthCount));
    });
  });


  return daysMatrix;
}