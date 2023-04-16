import { DataLabel, DataRecordWrapper, DataValue } from './SingleDataRecord.style';

interface ISingleDataRecordProps {
  label: string;
  value: string | number;
}

const SingleDataRecord = ({ label, value }: ISingleDataRecordProps) => (
  <DataRecordWrapper>
    <DataLabel>{`${label}:`}</DataLabel>
    <DataValue>{value}</DataValue>
  </DataRecordWrapper>
);

export default SingleDataRecord;
