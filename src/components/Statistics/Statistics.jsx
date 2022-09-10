import PropTypes from 'prop-types';
import { StatisticTitle } from './Title';
import {
  SectionStatistic,
  StatisticList,
  StatisticItems,
  DataList,
} from './StatisticsStyled';

export const Statistics = ({ stats, title }) => {
  return (
    <SectionStatistic>
      <StatisticTitle title={title} />
      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItems key={id}>
            <DataList>{label}</DataList>
            <DataList>{percentage}%</DataList>
          </StatisticItems>
        ))}
      </StatisticList>
    </SectionStatistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
