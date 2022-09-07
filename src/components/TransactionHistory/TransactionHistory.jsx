// import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
const data = items.map(({id, type, amount, currency}) => 
<tbody key = {id}>
<tr>
  <td>{type}</td>
  <td>{amount}</td>
  <td>{currency}</td>
</tr>
</tbody>
)
return <table className="transaction-history" >
<thead>
  <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </tr>
</thead>
{data}
</table> 
}