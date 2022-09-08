import PropTypes from 'prop-types';
import { TransactionList } from "./TransactionList"

export const TransactionHistory = ({items}) => {

return <table className="transaction-history" >
<thead>
  <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </tr>
</thead>
<tbody>
<TransactionList item = {items}/>
</tbody>
</table> 
}

TransactionHistory.propTypes ={
    items: PropTypes.array.isRequired,
}

