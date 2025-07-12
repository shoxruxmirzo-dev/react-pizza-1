import Drawer from "../../components/Drawer";
import Header from "../../components/Header";
import BookmarksContent from "../../components/BookmarksContent";

import "./Bookmarks.scss";
import { useAppContext } from "../../context/AppContext";

export default function BookmarksPage() {
  const { isCartOpened } = useAppContext();
  return (
    <div className="bookmarks">
      {isCartOpened && <Drawer />}
      <Header />
      <main>
        <BookmarksContent />
      </main>
    </div>
  );
}
