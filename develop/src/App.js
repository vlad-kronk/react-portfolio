import Header from './components/Header';
import PageContainer from './components/PageContainer';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <header>
          <Header />
        </header>
        <PageContainer />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;