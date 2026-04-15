        import Header from './components/Header'
        import ToolGrid from './components/ToolGrid'
        import StatsPanel from './components/StatsPanel'
        import Footer from './components/Footer'

        export default function App() {
          return (
            <div className="app-shell">
              <Header />
              <ToolGrid />
              <StatsPanel />
              <Footer />
            </div>
          )
        }
        