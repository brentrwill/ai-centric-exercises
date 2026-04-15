        import Header from './components/Header'
        import LessonList from './components/LessonList'
        import Supplies from './components/Supplies'
        import Footer from './components/Footer'

        export default function App() {
          return (
            <div className="app-shell">
              <Header />
              <section className="card">
                <h2>Course Overview</h2>
                <p>Edit this paragraph to describe the class and what students will learn.</p>
              </section>
              <LessonList />
              <Supplies />
              <Footer />
            </div>
          )
        }
        