import { Provider } from "@/context/provider";
import "../globals.css";
import Logo from "@/components/logo";

export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal vsc-initialized">
        <div className="container mx-auto my-12">
          <Logo />
        </div>
        <Provider>
	          {children}
         </Provider>
      </body>
    </html>
  );
}
