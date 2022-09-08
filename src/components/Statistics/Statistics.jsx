import PropTypes from 'prop-types';
import { SectionStatistic, Title, StatisticList, StatisticItems, DataList  } from './Statistics.styled';

export const Statistics = ({stats, title}) => {

return <SectionStatistic >
<Title>{title}</Title>
<StatisticList>
{stats.map(({id, label, percentage}) => 
<StatisticItems key={id} className="item">
<DataList>{label}</DataList>
<DataList>{percentage}%</DataList>
</StatisticItems>
)}
</StatisticList>
 </SectionStatistic>  
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
          })
    ),
}



