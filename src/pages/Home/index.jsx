import Drawer from "../../components/Drawer";
import Header from "../../components/Header";
import MainContent from "../../components/MainContent";

import "./Home.scss";
import { useAppContext } from "../../context/AppContext";

export default function HomePage() {
  const { isCartOpen } = useAppContext();
  return (
    <div className="home">
      {isCartOpen && <Drawer />}
      <Header />
      <main>
        <MainContent />
      </main>
    </div>
  );
}
