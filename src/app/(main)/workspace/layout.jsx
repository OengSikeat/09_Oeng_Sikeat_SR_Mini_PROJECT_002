import { Provider } from "@/context/provider";
import "../../globals.css";
import Sidebar from "@/components/Sidebar";
const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="text-charcoal flex justify-center">
        <div className="flex w-[95%] justify-between">
          <div className="w-[25%]">
            <Sidebar></Sidebar>
          </div>

          <div className="w-[70%]">
            <Provider>{children}</Provider>
          </div>
        </div>
      </body>
    </html>
  );
};

export default layout;
