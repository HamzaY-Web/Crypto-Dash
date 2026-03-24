const AboutPage = () => {
    return (
        <div className="about">
            <h1>📊 About Crypto Dash</h1>
            <p>
                <strong>Crypto Dash</strong> is a real-time cryptocurrency dashboard built with React. 
                It provides a clean, intuitive interface for tracking the top cryptocurrencies by 
                market cap, price, and 24-hour performance.
            </p>

            <h2>🔥 Features</h2>
            <ul>
                <li>Live market data powered by the CoinGecko API</li>
                <li>Search & filter coins by name or symbol</li>
                <li>Sort by market cap, price, or 24h change</li>
                <li>Adjustable results limit (10, 25, 50, 100)</li>
                <li>Responsive grid layout for all screen sizes</li>
            </ul>

            <h2>🛠️ Tech Stack</h2>
            <ul>
                <li><strong>React</strong> — UI library</li>
                <li><strong>React Router</strong> — Client-side routing</li>
                <li><strong>Vite</strong> — Fast build tool & dev server</li>
                <li><strong>CoinGecko API</strong> — Market data source</li>
            </ul>

            <p>
                Built as a learning project to practice working with APIs, React hooks, 
                component architecture, and modern front-end tooling.
            </p>
        </div>
    );
}

export default AboutPage;