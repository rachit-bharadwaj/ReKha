import Link from "next/link";
import { Transaction } from "@/props";

const Transactions = () => {
  return (
    <section className="p-5 my-5">
      <div className="flex justify-between">
        <p className="text-lg font-bold">Transactions</p>
        <Link href="/overview" className="text-gray-500 hover:text-secondary">
          See All
        </Link>
      </div>

      {/* ---------- transactions section --------------- */}
      <div className="flex flex-col gap-3 mt-3 mb-20">
        <Transaction
          title="No Transaction"
          amount={45}
          DateTime={new Date()}
          type="expense"
        />
        <Transaction
          title="No Transaction"
          amount={45}
          DateTime={new Date()}
          type="expense"
        />
        <Transaction
          title="No Transaction"
          amount={45}
          DateTime={new Date()}
          type="income"
        />
        <Transaction
          title="No Transaction"
          amount={45}
          DateTime={new Date()}
          type="income"
        />
        <Transaction
          title="No Transaction"
          amount={45}
          DateTime={new Date()}
          type="expense"
        />
        <Transaction
          title="No Transaction"
          amount={45}
          DateTime={new Date()}
          type="income"
        />
        <Transaction
          title="No Transaction"
          amount={45}
          DateTime={new Date()}
          type="income"
        />
        <Transaction
          title="No Transaction"
          amount={45}
          DateTime={new Date()}
          type="income"
        />
        <Transaction
          title="No Transaction"
          amount={45}
          DateTime={new Date()}
          type="income"
        />
      </div>
    </section>
  );
};

export default Transactions;
