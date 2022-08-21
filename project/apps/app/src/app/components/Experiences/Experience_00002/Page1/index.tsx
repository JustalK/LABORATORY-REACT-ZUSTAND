import { Profiler } from 'react';
import useStore from '../store/useStore';

const onRender = (id: string, phase: string) => {
  console.log(id, phase);
};

const Page1 = () => {
  const foods = useStore((state: any) => state.foods);
  return (
    <Profiler id="Page1" onRender={onRender}>
      <h2>FOODS: {foods}</h2>
    </Profiler>
  );
};

export default Page1;
