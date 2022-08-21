import useBearStore from '../../store/useBearStore';

const Page1 = () => {
  const bears = useBearStore((state: any) => state.bears);
  return <h2>{bears} around here ...</h2>;
};

export default Page1;
