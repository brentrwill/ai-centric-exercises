        import Header from './components/Header'
        import PromptExamples from './components/PromptExamples'
        import Tips from './components/Tips'
        import Footer from './components/Footer'

        export default function App() {
          return (
            <div className="app-shell">
              <Header />
              <PromptExamples />
              <Tips />
              <section className="card">
                <h2>Lab Notes</h2>
                <p>Edit this section to add your own prompt-writing ideas.</p>
              </section>
              <Footer />
            </div>
          )
        }
        