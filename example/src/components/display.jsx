

const DisplayTransaction = (props) =>{
return (
    <>
    <h4>History of your Transaction</h4>
    {props.transactions.map((data) =>(    
    <div>
        <h6>{data.transactionItem}</h6>
        <h6>{data.amount}</h6>
        <h6>{data.transactionType}</h6>
        
    </div>
))}
    </>
)
}

export default DisplayTransaction