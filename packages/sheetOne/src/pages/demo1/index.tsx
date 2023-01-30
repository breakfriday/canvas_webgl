import Konva from 'konva';
import Circle from './components/circle';

const Home = () => {
  return (
    <>
      <Circle x={150} y={150} radius={50} color="red" />
      <Circle x={100} y={100} radius={25} color="green" />
    </>
  );
};

export default Home;
