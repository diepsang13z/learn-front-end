import reactImg from '../../assets/react-core-concepts.png';
import { randInt } from '../../utils/random';

import './Header.css';

const reactDescs = ['Core', 'Fundamental', 'Crucial'];

export default function Header() {
  const reactDesc = reactDescs[randInt(reactDescs.length - 1)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDesc} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
