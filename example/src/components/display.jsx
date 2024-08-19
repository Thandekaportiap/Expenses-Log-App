

const DisplayTransaction = (props) =>{
return (
    <>
    <h4>History of your Transaction</h4>
    {props.transactions.map((data,index) =>(    
    <div key={index} className="list-items">
        <div>
        <h6>{data.transactionItem}</h6>
        </div>
        <div>
        <h6>{data.amount}</h6>
        </div>
        <div>
            {data.transactionType == "Expense" ? <div className="expenseIndicator"></div> : <div className="incomeIndicator"></div>}
        <h6>{data.transactionType}</h6>      
        </div>
       
    </div>
))}
    </>
)
}

export default DisplayTransaction