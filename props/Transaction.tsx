import { Transaction } from "@/types";

const Transaction = ({ title, amount, DateTime, type }: Transaction) => {
  const timeInString = DateTime.toLocaleTimeString(undefined, {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0); // set time to 00:00:00.000

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1); // get the date of yesterday

  const dateTimeDate = new Date(DateTime);
  dateTimeDate.setHours(0, 0, 0, 0); // set time to 00:00:00.000

  let day: string;

  if (+dateTimeDate === +today) {
    day = "Today";
  } else if (+dateTimeDate === +yesterday) {
    day = "Yesterday";
  } else {
    day = dateTimeDate.getDate().toString();
  }

  const dateInString = DateTime.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const finalDate =
    day === "Today" || day === "Yesterday"
      ? day
      : dateInString.replace(/\d+$/, day);

  return (
    <div className="bg-white-light p-2 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div>
            <p className="font-bold">{title}</p>
            <div className="flex gap-3">
              <p className="text-gray-500">{finalDate}</p>
              <p className="text-gray-500">{timeInString}</p>
            </div>
          </div>
        </div>

        <p className={type === "expense" ? "text-secondary" : "text-green-500"}>
          {type === "expense" ? `-₹${amount}` : `+₹${amount}`}
        </p>
      </div>
    </div>
  );
};

export default Transaction;
