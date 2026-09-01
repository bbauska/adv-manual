<!--~~~~~~~~~~~~~~~ js/app.js for adv-manual.bauska.org ~~~~~~~~~~~~-->
const totalPages = 55;
let currentPage = 1;

// Generate 55 pages dynamically for demonstration
const manualPages = Array.from({ length: totalPages }, (_, index) => ({
    id: index + 1,
    title: `Module ${Math.floor(index / 5) + 1}: Section ${index + 1}`,
    content: `<h1>Advanced Topic ${index + 1}</h1>
              <p class="lead">Detailed operational protocols and system architectures for enterprise compliance.</p>
              <h3>Key Learning Objectives</h3>
              <ul class="list-disc pl-5 space-y-2">
                  <li>Analyze system logs under high-load thresholds.</li>
                  <li>Implement secure failover states during partial outages.</li>
                  <li>Verify compliance metrics against standard benchmarks.</li>
              </ul>
              <div class="my-6 p-4 bg-blue-50 border-l-4 border-blue-600 text-blue-900 rounded">
                  <strong>Pro-Tip:</strong> Always run diagnostics before initiating a hard state reset.
              </div>`
}));

function render() {
    // Render Navigation Sidebar
    const navList = document.getElementById('nav-list');
    navList.innerHTML = manualPages.map(p => `
        <button onclick="goToPage(${p.id})" class="w-full text-left px-3 py-2 rounded truncate ${currentPage === p.id ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'}">
            ${p.title}
        </button>
    `).join('');

    // Render Main Content
    document.getElementById('content-area').innerHTML = manualPages[currentPage - 1].content;
    document.getElementById('page-indicator').innerText = `Page ${currentPage} of ${totalPages}`;
}

function changePage(direction) {
    if (currentPage + direction >= 1 && currentPage + direction <= totalPages) {
        currentPage += direction;
        render();
        document.getElementById('content-area').scrollTop = 0;
    }
}

function goToPage(id) {
    currentPage = id;
    render();
    document.getElementById('content-area').scrollTop = 0;
}

render();
