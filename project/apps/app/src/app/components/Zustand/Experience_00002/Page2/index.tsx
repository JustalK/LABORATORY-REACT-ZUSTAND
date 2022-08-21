import { Profiler } from 'react';
import useStore from '../store/useStore';

const onRender = (id: string, phase: string) => {
  console.log(id, phase);
};

const Page1 = () => {
  const clothes = useStore((state: any) => state.clothes);
  return (
    <Profiler id="Page2" onRender={onRender}>
      <h2>CLOTHES: {clothes}</h2>
    </Profiler>
  );
};

export default Page1;
