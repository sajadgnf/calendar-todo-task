import { Box } from "@mui/material";
import moment from "moment/moment";
import Calendar from "../containers/Calendar";

export default function Home() {
  // const months = moment.months();
  // const year = new Date().getFullYear();

  // const isExtraDays = (week, date) => {
  //   if (week === 0 && date > 10) {
  //     return true;
  //   } else if (week === 5 && date < 10) {
  //     return true;
  //   } else if (week === 4 && date < 10) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  // const getDate = (month) => {
  //   let calendar = [];
  //   const startDate = moment([year, month])
  //     .clone()
  //     .startOf("month")
  //     .startOf("week");

  //   const endDate = moment([year, month]).clone().endOf("month");
  //   const day = startDate.clone().subtract(1, "day");

  //   while (day.isBefore(endDate, "day")) {
  //     calendar.push(
  //       Array(7)
  //         .fill(0)
  //         .map(() => day.add(1, "day").clone().format("DD"))
  //     );
  //   }

  //   if (calendar.length > 0) {
  //     return calendar.map((week, index) => (
  //       <tr className="calender-row">
  //         {week.map((day) => (
  //           <td className="calender-col">
  //             <span className="day-value">
  //               {isExtraDays(index, day) ? (
  //                 <span className="isDates-grey">{day}</span>
  //               ) : (
  //                 day
  //               )}
  //             </span>
  //           </td>
  //         ))}
  //       </tr>
  //     ));
  //   }
  // };

  return (
    <Box borderRadius={10} overflow='hidden'>
      <Calendar />
      {/* <h2>{year}</h2>
      <div>
        {months.map((month, index) => (
          <div>
            <table>
              <tr>
                <th>
                  <h2>{month}</h2>
                </th>
              </tr>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
              {getDate(index)}
            </table>
          </div>
        ))}
      </div> */}
    </Box>
    
  );
}
