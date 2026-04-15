        const tools = [
          { name: 'Tool 1', purpose: 'Replace this text with a real AI tool use case.' },
          { name: 'Tool 2', purpose: 'Replace this text with a second example.' },
          { name: 'Tool 3', purpose: 'Replace this text with a third example.' },
        ]

        export default function ToolGrid() {
          return (
            <section className="card">
              <h2>AI Tools</h2>
              <div className="grid">
                {tools.map((tool, index) => (
                  <div className="card" key={index}>
                    <h3>{tool.name}</h3>
                    <p>{tool.purpose}</p>
                  </div>
                ))}
              </div>
            </section>
          )
        }
        