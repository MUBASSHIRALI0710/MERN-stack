# MERN-stack
MERN Stack – HTML/CSS ✅ | Git &amp; GitHub setup ✅ | JavaScript | React | Node.js + Express | MongoDB integration | Full MERN project


<a href="JavaScript/Day-12">📄 dataType.js</a>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>📚 JavaScript Revision Master</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: system-ui, 'Segoe UI', 'Roboto', sans-serif;
      background: #f1f5f9;
      padding: 2rem;
      color: #0f172a;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .sub {
      color: #334155;
      margin-bottom: 2rem;
      border-left: 4px solid #3b82f6;
      padding-left: 1rem;
    }
    .topic-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
    }
    .card {
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -2px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1);
      overflow: hidden;
      transition: transform 0.1s ease;
    }
    .card:hover {
      transform: translateY(-3px);
    }
    .card-header {
      background: #2563eb;
      color: white;
      padding: 1rem;
      font-weight: 600;
      font-size: 1.25rem;
    }
    .card-body {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .file-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.75rem;
      background: #f8fafc;
      border-radius: 0.5rem;
      text-decoration: none;
      color: #1e293b;
      font-family: monospace;
      transition: background 0.2s;
      border: 1px solid #e2e8f0;
    }
    .file-link:hover {
      background: #eef2ff;
      border-color: #3b82f6;
    }
    .badge {
      background: #e2e8f0;
      padding: 0.2rem 0.5rem;
      border-radius: 0.375rem;
      font-size: 0.7rem;
      font-weight: 500;
      font-family: monospace;
    }
    footer {
      margin-top: 3rem;
      text-align: center;
      color: #475569;
      font-size: 0.875rem;
      border-top: 1px solid #cbd5e1;
      padding-top: 1.5rem;
    }
    @media (max-width: 640px) {
      body { padding: 1rem; }
      .topic-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
<div class="container">
  <h1>📖 JavaScript Revision Master</h1>
  <div class="sub">
    🔍 Topic-wise list — click karte hi code/file khul jayegi<br>
    ✅ Based on aapke actual code files (dataType, operators, loops, functions, objects, arrays, arrow functions, etc.)
  </div>

  <div class="topic-grid">
    <!-- CARD 1: Data Types -->
    <div class="card">
      <div class="card-header">📦 Data Types</div>
      <div class="card-body">
        <a class="file-link" href="dataType.js" target="_blank">📄 dataType.js (Number, Bigint, String, Boolean, Undefined, Null)</a>
        <a class="file-link" href="String.js" target="_blank">🔤 String.js (methods, template literals)</a>
        <a class="file-link" href="String.md" target="_blank">📘 String.md (notes)</a>
      </div>
    </div>

    <!-- CARD 2: Operators -->
    <div class="card">
      <div class="card-header">⚙️ Operators</div>
      <div class="card-body">
        <a class="file-link" href="operators.js" target="_blank">➕ operators.js (Arithmetic)</a>
        <a class="file-link" href="Comparison_Operator.js" target="_blank">⚖️ Comparison_Operator.js (==, ===, !=, !==)</a>
        <a class="file-link" href="operator_in_JavaScript.md" target="_blank">📘 operator_in_JavaScript.md (All operators)</a>
      </div>
    </div>

    <!-- CARD 3: Conditional Statements -->
    <div class="card">
      <div class="card-header">🎛️ Conditional Statements</div>
      <div class="card-body">
        <a class="file-link" href="Conditional_Statement.md" target="_blank">📘 Conditional_Statement.md (if, else, switch, ternary)</a>
        <a class="file-link" href="script.js" target="_blank">🧪 script.js (live examples: if, switch, truthy/falsy)</a>
      </div>
    </div>

    <!-- CARD 4: Loops (for, while, do-while, forEach) -->
    <div class="card">
      <div class="card-header">🔄 Loops</div>
      <div class="card-body">
        <a class="file-link" href="loop_javaScript.md" target="_blank">📘 loop_javaScript.md (for, nested, while, do-while, forEach)</a>
        <a class="file-link" href="for_in_for_of_loop.md" target="_blank">📘 for...in vs for...of (keys vs values)</a>
        <a class="file-link" href="script.js" target="_blank">📄 script.js (table of 5, loops examples)</a>
      </div>
    </div>

    <!-- CARD 5: Functions & Arrow Functions -->
    <div class="card">
      <div class="card-header">⚡ Functions & Arrow Functions</div>
      <div class="card-body">
        <a class="file-link" href="function.md" target="_blank">📘 function.md (declaration, expression, callbacks, closures)</a>
        <a class="file-link" href="function.js" target="_blank">📄 function.js (basic function with return)</a>
        <a class="file-link" href="Arrow_function.md" target="_blank">🏹 Arrow_function.md (syntax, this, implicit return)</a>
      </div>
    </div>

    <!-- CARD 6: Arrays -->
    <div class="card">
      <div class="card-header">🗂️ Arrays</div>
      <div class="card-body">
        <a class="file-link" href="Array.md" target="_blank">📘 Array.md (object-based, dynamic, mixed types)</a>
        <a class="file-link" href="Stack vs Heap.md" target="_blank">🧠 Stack vs Heap.md (reference concept)</a>
      </div>
    </div>

    <!-- CARD 7: Objects -->
    <div class="card">
      <div class="card-header">🧩 Objects</div>
      <div class="card-body">
        <a class="file-link" href="object.md" target="_blank">📘 object.md (key-value, methods, prototype, shallow/deep copy)</a>
        <a class="file-link" href="Property_Descriptors.md" target="_blank">🔒 Property_Descriptors.md (writable, enumerable, configurable)</a>
      </div>
    </div>

    <!-- CARD 8: Math & Date -->
    <div class="card">
      <div class="card-header">📅 Math & Date</div>
      <div class="card-body">
        <a class="file-link" href="math.md" target="_blank">🧮 math.md (PI, random, round, floor, ceil)</a>
        <a class="file-link" href="Date_object.md" target="_blank">📆 Date_object.md (create, get methods, timestamps)</a>
      </div>
    </div>

    <!-- CARD 9: Extra - Strings, advanced -->
    <div class="card">
      <div class="card-header">✏️ Strings & Extra</div>
      <div class="card-body">
        <a class="file-link" href="String.js" target="_blank">📝 String.js (slice, replace, split, trim)</a>
        <a class="file-link" href="Comparison_Operator.js" target="_blank">🧪 Comparison edge cases (null, undefined, false)</a>
      </div>
    </div>
  </div>

  <footer>
    🚀 Apne GitHub repo mein yeh <code>index.html</code> daalo → Settings → Pages → enable → <br>
    Ab <code>https://your-username.github.io/repo-name/</code> par topic-wise revision milega.
  </footer>
</div>
</body>
</html>