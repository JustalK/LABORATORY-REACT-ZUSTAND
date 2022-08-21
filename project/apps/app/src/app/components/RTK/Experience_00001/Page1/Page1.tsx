import { Profiler } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const onRender = (id: string, phase: string) => {
  console.log(id, phase);
};

const Page1 = () => {
  const bears = useSelector((state: any) => state.bear.value);
  return (
    <Profiler id="Page1" onRender={onRender}>
      <h2>{bears} around here ...</h2>
    </Profiler>
  );
};

export default Page1;
