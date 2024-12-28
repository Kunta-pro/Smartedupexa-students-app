// JavaScript for rendering charts

// Create the main chart (Biology Class)
const biologyCtx = document.getElementById('biologyCanvas').getContext('2d');
const biologyChart = new Chart(biologyCtx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Biology Class Progress',
            data: [65, 70, 85, 90],
            borderColor: 'purple',
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

// Create the toggle chart (Teachers and Students)
const toggleCtx = document.getElementById('toggleCanvas').getContext('2d');
const toggleChart = new Chart(toggleCtx, {
    type: 'pie',
    data: {
        labels: ['Teachers', 'Students'],
        datasets: [{
            label: 'Teachers vs Students',
            data: [30, 70], // Example data
            backgroundColor: ['#8a2be2', '#9370db'],
        }]
    },
    options: {
        responsive: true,
    }
});

// Create small charts (Syllabus-related)
const notesCtx = document.getElementById('notesCanvas').getContext('2d');
const notesChart = new Chart(notesCtx, {
    type: 'bar',
    data: {
        labels: ['Notes'],
        datasets: [{
            label: 'Notes Progress',
            data: [80],
            backgroundColor: '#8a2be2',
        }]
    },
    options: {
        responsive: true,
    }
});

const videosCtx = document.getElementById('videosCanvas').getContext('2d');
const videosChart = new Chart(videosCtx, {
    type: 'bar',
    data: {
        labels: ['Videos'],
        datasets: [{
            label: 'Videos Progress',
            data: [60],
            backgroundColor: '#8a2be2',
        }]
    },
    options: {
        responsive: true,
    }
});

const assignmentsCtx = document.getElementById('assignmentsCanvas').getContext('2d');
const assignmentsChart = new Chart(assignmentsCtx, {
    type: 'bar',
    data: {
        labels: ['Assignments'],
        datasets: [{
            label: 'Assignments Progress',
            data: [70],
            backgroundColor: '#8a2be2',
        }]
    },
    options: {
        responsive: true,
    }
});

const coveredTopicsCtx = document.getElementById('coveredTopicsCanvas').getContext('2d');
const coveredTopicsChart = new Chart(coveredTopicsCtx, {
    type: 'bar',
    data: {
        labels: ['Covered Topics'],
        datasets: [{
            label: 'Covered Topics Progress',
            data: [90],
            backgroundColor: '#8a2be2',
        }]
    },
    options: {
        responsive: true,
    }
});

const uncoveredTopicsCtx = document.getElementById('uncoveredTopicsCanvas').getContext('2d');
const uncoveredTopicsChart = new Chart(uncoveredTopicsCtx, {
    type: 'bar',
    data: {
        labels: ['Uncovered Topics'],
        datasets: [{
            label: 'Uncovered Topics Progress',
            data: [50],
            backgroundColor: '#8a2be2',
        }]
    },
    options: {
        responsive: true,
    }
});

const syllabusCtx = document.getElementById('syllabusCanvas').getContext('2d');
const syllabusChart = new Chart(syllabusCtx, {
    type: 'bar',
    data: {
        labels: ['Syllabus'],
        datasets: [{
            label: 'Syllabus Progress',
            data: [75],
            backgroundColor: '#8a2be2',
        }]
    },
    options: {
        responsive: true,
    }
});

