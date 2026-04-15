        const lessons = [
          'HTML Basics',
          'CSS Basics',
          'JavaScript Intro',
          'React Components'
        ]

        export default function LessonList() {
          return (
            <section className="card">
              <h2>Lessons</h2>
              <ul>
                {lessons.map((lesson, index) => (
                  <li key={index}>{lesson}</li>
                ))}
              </ul>
            </section>
          )
        }
        