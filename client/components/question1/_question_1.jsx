import { Counter } from './counter';

export const Question1 = () => {
  return (
    <div>
      <Counter min={-5} max={5} />
      <Counter min={-15} max={-5} />
      <Counter min={5} max={15} />
    </div>
  );
};
