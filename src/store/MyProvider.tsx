import React, { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = (props: any) => {
  const [transaction, setTransaction] = useState([]);
  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("UserId") || undefined;
    }
    return undefined;
  });
  const [transactions, setTransactions] = useState([]);
  const [totalSalary, setTotalSalary] = useState(0);

  return (
    <MyContext.Provider
      value={{
        transaction,
        setTransaction,
        user,
        setUser,
        transactions,
        setTransactions,
        totalSalary,
        setTotalSalary,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
