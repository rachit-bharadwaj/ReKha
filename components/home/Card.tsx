// icons
import { HiDotsHorizontal } from "react-icons/hi";
import {
  TbSquareRoundedArrowDownFilled,
  TbSquareRoundedArrowUpFilled,
} from "react-icons/tb";

const Card = () => {
  return (
    <div className="bg-card-container text-white-light rounded-3xl w-80 mx-auto">
      <div className="bg-card p-3 rounded-3xl">
        <div className="flex justify-between w-full">
          <div>
            <p>Total Balance</p>
            <p className="text-lg font-bold">&#8377;0</p>
          </div>

          <HiDotsHorizontal />
        </div>

        <div className="flex justify-between mt-10">
          <div>
            <div className="flex items-center gap-1">
              <TbSquareRoundedArrowDownFilled /> <p>Income</p>
            </div>

            <p>&#8377;0</p>
          </div>

          <div>
            <div className="flex items-center gap-1">
              <TbSquareRoundedArrowUpFilled /> <p>Expenses</p>
            </div>

            <p>&#8377;0</p>
          </div>
        </div>

        {/* ............................................. */}
      </div>
    </div>
  );
};

export default Card;
