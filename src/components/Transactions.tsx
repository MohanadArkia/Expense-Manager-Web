import React from 'react'
import styles from "../styles/transactions.module.css";

const Transactions = (props:any) => {

    const {date, incomeTitle, incomeAmount, expenseTitle, expenseAmount} = props;
     const formattedDate = new Date(date).toISOString().split('T')[0];
  return (
      <div>
        {incomeTitle && (
            <>
                <h5 className={styles.txt}>{`Date: ${formattedDate}`}</h5>
                <h5 className={styles.txt}>{`Income Title: ${incomeTitle}`}</h5>
                <h5 className={styles.txt}>{`Income Amount: ${incomeAmount}`}</h5>
            </>
        )}
        
        {expenseTitle && (
            <>
                <h5 className={styles.txt}>{`Date: ${formattedDate}`}</h5>
                <h5 className={styles.txt}>{`Expense Title: ${expenseTitle}`}</h5>
                <h5 className={styles.txt}>{`Expense Amount: ${expenseAmount}`}</h5>
            </>
        )}
      </div>
  )
}

export default Transactions
