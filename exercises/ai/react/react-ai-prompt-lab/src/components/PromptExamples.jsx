        const prompts = [
          'Write a short welcome message for a website.',
          'Summarize a paragraph in simple language.',
          'Create three blog title ideas about coding.'
        ]

        export default function PromptExamples() {
          return (
            <section className="card">
              <h2>Prompt Examples</h2>
              <ul>
                {prompts.map((prompt, index) => (
                  <li key={index}>{prompt}</li>
                ))}
              </ul>
            </section>
          )
        }
        