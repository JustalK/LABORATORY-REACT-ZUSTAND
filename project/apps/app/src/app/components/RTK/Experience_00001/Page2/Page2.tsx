import { useDispatch } from 'react-redux';
import { increasePopulation } from '../store/Slices/Slice1';

const Page2 = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(increasePopulation())}>one up</button>;
};

export default Page2;
