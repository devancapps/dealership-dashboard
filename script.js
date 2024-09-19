document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('nav button');
    const sections = document.querySelectorAll('main section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.id.replace('Btn', 'Section');
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Initialize charts
    createInventoryChart();
    createSalesChart();
    createTrendsChart();
});

function createInventoryChart() {
    const ctx = document.getElementById('inventoryChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: inventoryData.map(item => item.category),
            datasets: [{
                data: inventoryData.map(item => item.count),
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Inventory Composition'
                }
            }
        }
    });
}

function createSalesChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: salesData.map(item => item.month),
            datasets: [{
                label: 'Sales',
                data: salesData.map(item => item.amount),
                backgroundColor: '#36A2EB'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Sales Performance'
                }
            }
        }
    });
}

function createTrendsChart() {
    const ctx = document.getElementById('trendsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: trendsData.map(item => item.date),
            datasets: [{
                label: 'Market Demand',
                data: trendsData.map(item => item.demand),
                borderColor: '#FF6384',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Market Demand Trends'
                }
            }
        }
    });
}