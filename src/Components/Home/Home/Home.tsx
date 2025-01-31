import Discount from '../Discount/Discount';
import Specials from '../Specials/Specials';
import Desserts from '../Desserts/Desserts';
import Sales from '../Sales/Sales';
import Recommand from '../Recommand/Recommand';
import './Home.css';

export function Home(): JSX.Element {
  return (
    <div className="home-page">
      {/* Interpolation: */}
      <Discount />

      {/* Conditional Rendering */}
      <Specials />

      {/* Displaying List */}
      <Desserts />

      {/* Props */}
      <Sales percent={30} />
      <Sales percent={50} category="Shoes" />

      {/* Events */}
      <Recommand />
    </div>
  )
}