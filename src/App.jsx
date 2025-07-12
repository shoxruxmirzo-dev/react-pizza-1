import { Route, Routes } from "react-router";

import HomePage from "./pages/Home";
import BookmarksPage from "./pages/Bookmarks";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/favorites" element={<BookmarksPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
