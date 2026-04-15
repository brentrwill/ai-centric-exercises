        const supplies = ['Laptop', 'Notebook', 'Internet', 'Code Editor', 'Browser']

        export default function Supplies() {
          return (
            <section className="card">
              <h2>Supplies Needed</h2>
              <ul>
                {supplies.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )
        }
        