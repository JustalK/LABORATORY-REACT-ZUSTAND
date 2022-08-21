import { Profiler } from 'react';
import useStore from '../store/useStore';

const onRender = (id: string, phase: string) => {
  console.log(id, phase);
};

const Page2 = () => {
  const increaseFoods = useStore((state) => (state as any).increaseFoods);
  const increaseClothes = useStore((state) => (state as any).increaseClothes);
  return (
    <Profiler id="Experience_00002" onRender={onRender}>
      <button onClick={increaseFoods}>one food up</button>
      <button onClick={increaseClothes}>one clothe up</button>
    </Profiler>
  );
};

export default Page2;
