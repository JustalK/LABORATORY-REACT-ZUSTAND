import useBearStore from '../store/useBearStore';

const Page2 = () => {
  const increasePopulation = useBearStore(
    (state) => (state as any).increasePopulation
  );
  return <button onClick={increasePopulation}>one up</button>;
};

export default Page2;
