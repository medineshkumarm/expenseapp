import React from "react";
import { LuArrowRight } from "react-icons/lu";
import moment from "moment";
import TransactionInfoCard from "../cards/TransactionInfoCard";

const RecentTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Recent Transactions</h5>
        <button className="card-btn" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div>
        {transactions?.slice(0, 5)?.map((item, id) => (
          <TransactionInfoCard
            key={id}
            title={item.type == "expense" ? item.category : item.source}
            icon={item.icon}
            date={moment(item.date).format("Do MM YYY")}
            amount={item.amount}
            type={item.type}
            hidhideDeleteBtn={true}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
