import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/shared/Hero";
import Navbar from "../components/shared/Navbar";
import "../styles/globals.css";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  const isHomePage = () => Component.name === "Home";
  return (
    <div className="portfolio-app">
      <Navbar />
      {isHomePage() && <Hero />}
      <div className="container">
        <Component {...pageProps} />
      </div>
      {isHomePage() && (
        <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
          <div className="container text-center">
            <small>Copyright &copy; Your Website</small>
          </div>
        </footer>
      )}
    </div>
  );
}

// この引数は別のinitialpropの返り値も取ってくるのだろうか
// MyApp.getInitialProps = async (context) => {
//   debugger;
//   const initialProps =
//     App.getInitialProps && (await App.getInitialProps(context));
//   console.log(context);
//   return {
//     pageProps: { appData: "hello app data", ...initialProps.pageProps },
//   };
// };

export default MyApp;
