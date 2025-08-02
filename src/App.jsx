import Home from './pages/Home';
import Topbar from './layout/Topbar';
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <Home />
        {/* Outras páginas virão aqui com o sistema de rotas */}
      </main>
      <Footer />
    </>
  );
}

export default App;