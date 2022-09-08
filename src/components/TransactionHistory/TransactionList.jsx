import PropTypes from 'prop-types';


export const TransactionList = ({item}) => {
    return  item.map(({id, type, amount, currency}) => 
    <tr  key = {id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )
}

TransactionList.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
          })
    ),
}