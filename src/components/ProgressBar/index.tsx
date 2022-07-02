import { Bar } from './styles';

export const ProgressBar = (props: { loadCount: number; limit: number }) => {
  const { loadCount, limit } = props;
  const progress = Math.floor((loadCount / limit) * 100);
  return (
    <Bar progress={progress}>
      <span> {progress}% </span>
    </Bar>
  );
};
