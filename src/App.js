import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length} />
        <main className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Counters
                  counters={this.state.counters}
                  onReset={this.handleReset}
                  onIncriment={this.handleIncriment}
                  onDelete={this.handleDelete}
                />
              }
            />
            <Route path="/cum" element={<h1>CUM</h1>} />
            <Route path="/dick" element={<h1>DICK</h1>} />
          </Routes>
        </main>
      </React.Fragment>
    );
}

export default App;
