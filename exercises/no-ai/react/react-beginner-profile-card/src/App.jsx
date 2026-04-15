        import Header from './components/Header'
        import ProfileCard from './components/ProfileCard'
        import HobbyList from './components/HobbyList'
        import Footer from './components/Footer'

        export default function App() {
          return (
            <div className="app-shell">
              <Header />
              <ProfileCard />
              <HobbyList />
              <Footer />
            </div>
          )
        }
        