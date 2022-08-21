import { Profiler } from 'react';
import useBearStore from '../store/useBearStore';

const onRender = (id: string, phase: string) => {
  console.log(id, phase);
};

const Page1 = () => {
  const bears = useBearStore((state: any) => state.bears);
  return (
    <Profiler id="Page1" onRender={onRender}>
      <h2>{bears} around here ...</h2>
    </Profiler>
  );
};

export default Page1;
