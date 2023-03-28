import Header from './components/Header';
import PageContainer from './components/PageContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <PageContainer />
      <Footer />
    </div>
  );
}

export default App;