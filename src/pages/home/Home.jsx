import Chart from "../../components/chart/Chart";
import FeatuturedInfo from "../../components/featuredInfo/FeatuturedInfo"
import "./home.css";

export default function Home() {
  return (
    <div className="home">
        <FeatuturedInfo />
        <Chart/>
        </div>
  );
}
