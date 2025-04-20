<h1>Brynk Labs Hiring Assignment</h1>

<h2>Project Overview</h2>
<p>This project is a hiring assignment for Brynk Labs, implementing a responsive website for Company ABC with a Content Management System (CMS). The website consists of a pixel-perfect landing page based on a provided Figma design and a CMS page to manage the dynamic heading sentence. The project is deployed on Vercel.</p>

<h2>Features</h2>
<ol>
  <li><strong>Customer-Facing Landing Page</strong>:
    <ul>
      <li>Pixel-perfect implementation of the Figma design for Company ABC.</li>
      <li>Responsive design adaptable to various screen sizes.</li>
      <li>Dynamic heading sentence: "Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI" fetched via a GET API.</li>
      <li>All other text is static and hardcoded as per the Figma design.</li>
    </ul>
  </li>
  <li><strong>CMS Page</strong>:
    <ul>
      <li>Custom-designed CMS page with a text field to update the main heading sentence.</li>
      <li>Updates to the heading sentence are saved to a database via a POST API.</li>
      <li>Changes in the CMS reflect automatically on the customer-facing page.</li>
    </ul>
  </li>
  <li><strong>APIs</strong>:
    <ul>
      <li><strong>POST API</strong>: Saves the heading sentence from the CMS page to a database table.</li>
      <li><strong>GET API</strong>: Retrieves the heading sentence from the database to display on the landing page.</li>
    </ul>
  </li>
</ol>

<h2>Tech Stack</h2>
<ul>
  <li><strong>Frontend</strong>: [Specify framework, e.g., React, Next.js, or vanilla HTML/CSS/JS]</li>
  <li><strong>Backend</strong>: [Specify, e.g., Node.js, Express, or serverless functions on Vercel]</li>
  <li><strong>Database</strong>: [Specify, e.g., PostgreSQL, MongoDB, or Vercel Storage]</li>
  <li><strong>Deployment</strong>: Vercel</li>
  <li><strong>Styling</strong>: [Specify, e.g., Tailwind CSS, CSS Modules, or plain CSS]</li>
  <li><strong>API</strong>: RESTful APIs for CMS and landing page communication</li>
</ul>

<h2>Setup Instructions</h2>
<ol>
  <li><strong>Prerequisites</strong>:
    <ul>
      <li>Node.js (version [specify version, e.g., 18.x])</li>
      <li>npm or yarn</li>
      <li>Vercel CLI (<code>npm install -g vercel</code>)</li>
      <li>[Any other tools, e.g., PostgreSQL if used]</li>
    </ul>
  </li>
  <li><strong>Local Development</strong>:
    <pre><code># Clone the repository
git clone [repository-url]

# Navigate to the project directory
cd [project-directory]

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
</code></pre>
    <p>Update <code>.env.local</code> with the necessary credentials (e.g., database URL, API keys).</p>
    <pre><code># Run the development server
npm run dev
</code></pre>
    <p>The app will be available at <code>http://localhost:3000</code>.</p>
  </li>
  <li><strong>Database Setup</strong>:
    <ul>
      <li>Configure the database connection in <code>.env.local</code>.</li>
      <li>Run migrations (if applicable):
        <pre><code>npm run migrate</code></pre>
      </li>
    </ul>
  </li>
  <li><strong>Deployment</strong>:
    <ul>
      <li>Connect the repository to Vercel.</li>
      <li>Set up environment variables in the Vercel dashboard.</li>
      <li>Deploy using:
        <pre><code>vercel --prod</code></pre>
      </li>
    </ul>
  </li>
</ol>

<h2>Project Structure</h2>
<pre><code>├── /components    # Reusable UI components
├── /pages         # Page components (e.g., landing page, CMS page)
├── /api           # API routes (POST and GET APIs)
├── /public        # Static assets (images, fonts, etc.)
├── /styles        # CSS or styling files
├── /lib           # Utility functions and database logic
├── .env.local     # Environment variables
├── README.md      # Project documentation
</code></pre>

<h2>URLs</h2>
<ul>
  <li><strong>Main User-Facing Page</strong>: [https://brynklabs.vercel.app/]</li>
  <li><strong>CMS Page</strong>: [Insert deployed CMS URL here]</li>
</ul>

<h2>Notes</h2>
<ul>
  <li>The landing page is designed to be pixel-perfect as per the provided Figma design.</li>
  <li>The CMS page design is based on the provided wireframe but includes custom styling for improved usability.</li>
  <li>Ensure environment variables are correctly configured to avoid API or database connection issues.</li>
  <li>The project is optimized for performance and responsiveness across devices.</li>
</ul>

<h2>About Brynk Labs</h2>
<p>Brynk Labs is a stealth-mode startup backed by strong funding, founded by alumni from IIT and ISB with professional experience at Amazon, Livspace, Paytm, and Revolut.</p>

<h2>Contact</h2>
<p>For any queries regarding the project, please reach out to [your name/contact info, if applicable].</p>
