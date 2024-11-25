import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <main>
      {/* left of page */}
      {/* right side/content of the page */}
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default BaseLayout;
