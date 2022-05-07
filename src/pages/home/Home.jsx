import Chart from "../../components/chart/Chart";
import FeatuturedInfo from "../../components/featuredInfo/FeatuturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../dummyData";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
        <FeatuturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
        </div>
  );
}
