
function About() {
  return (
     <div style={{ padding: "2rem" }}>
        <div>
         <nav style={{ marginBottom: "2rem" }}>
        <a href="/" style={{ marginRight: "1rem" }}>Home</a>
        <a href="/about">About</a>
      </nav>
      <h1>About React and Vite</h1>
      <p>
        <strong>React</strong> is a popular JavaScript library for building user interfaces, especially single-page applications. It enables developers to create reusable UI components and efficiently update the user interface when data changes.
      </p>
      <p>
        <strong>Vite</strong> is a modern build tool that provides a fast and optimized development experience for web projects. It leverages native ES modules and offers instant server start, lightning-fast hot module replacement (HMR), and optimized production builds.
      </p>
      <p>
        Using React with Vite allows developers to build scalable and high-performance web applications with a smooth development workflow.
      </p>
    </div>
    </div>
  )
}

export default About