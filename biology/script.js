// JavaScript for rendering charts

// Main Biology Classroom Chart (Line Chart)
const biologyCtx = document.getElementById('biologyCanvas').getContext('2d');
const biologyChart = new Chart(biologyCtx, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Biology Class Progress',
      data: [65, 70, 85, 90],
      borderColor: '#7f00ff',  // Purple color
      fill: false,
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Adding click event listeners to the 6 tiles, which link to GitHub Pages
document.getElementById('notesTile').addEventListener('click', function() {
  window.location.href = 'https://your-github-link-for-notes';
});

document.getElementById('videosTile').addEventListener('click', function() {
  window.location.href = 'https://your-github-link-for-videos';
});

document.getElementById('assignmentsTile').addEventListener('click', function() {
  window.location.href = 'https://your-github-link-for-assignments';
});

document.getElementById('coveredTopicsTile').addEventListener('click', function() {
  window.location.href = 'https://your-github-link-for-covered-topics';
});

document.getElementById('uncoveredTopicsTile').addEventListener('click', function() {
  window.location.href = 'https://your-github-link-for-uncovered-topics';
});

document.getElementById('syllabusTile').addEventListener('click', function() {
  window.location.href = 'https://your-github-link-for-syllabus';
});
