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
    createInventoryValueChart();
    createSalesTrendChart();
    createInventoryCompositionChart();
    createInventoryValueDistributionChart();
    createMonthlySalesChart();
    createTopSellingModelsChart();
    createCustomerSatisfactionChart();
    createMarketTrendsChart();
    createServiceAppointmentsChart();
    createServiceRevenueChart();
});

function createInventoryValueChart() {
    const ctx = document.getElementById('inventoryValueChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: inventoryData.map(item => item.category),
            datasets: [{
                label: 'Inventory Value',
                data: inventoryData.map(item => item.value),
                backgroundColor: '#36A2EB'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                title: {
                    display: true,
                    text: 'Inventory Value by Category'
                }
            }
        }
    });
}

function createSalesTrendChart() {
    const ctx = document.getElementById('salesTrendChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: salesData.map(item => item.month),
            datasets: [{
                label: 'Sales Amount',
                data: salesData.map(item => item.amount),
                borderColor: '#FF6384',
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Sales Trend'
                }
            }
        }
    });
}

function createInventoryCompositionChart() {
    const ctx = document.getElementById('inventoryCompositionChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: inventoryData.map(item => item.category),
            datasets: [{
                data: inventoryData.map(item => item.count),
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                title: {
                    display: true,
                    text: 'Inventory Composition'
                }
            }
        }
    });
}

function createInventoryValueDistributionChart() {
    const ctx = document.getElementById('inventoryValueDistributionChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: inventoryData.map(item => item.category),
            datasets: [{
                data: inventoryData.map(item => item.value),
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                title: {
                    display: true,
                    text: 'Inventory Value Distribution'
                }
            }
        }
    });
}

function createMonthlySalesChart() {
    const ctx = document.getElementById('monthlySalesChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: salesData.map(item => item.month),
            datasets: [{
                label: 'Sales Amount',
                data: salesData.map(item => item.amount),
                backgroundColor: '#36A2EB'
            }, {
                label: 'Units Sold',
                data: salesData.map(item => item.units),
                backgroundColor: '#FF6384'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Sales Performance'
                }
            }
        }
    });
}

function createTopSellingModelsChart() {
    const ctx = document.getElementById('topSellingModelsChart').getContext('2d');
    new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: topSellingModels.map(item => item.model),
            datasets: [{
                label: 'Units Sold',
                data: topSellingModels.map(item => item.sales),
                backgroundColor: '#4BC0C0'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                title: {
                    display: true,
                    text: 'Top Selling Models'
                }
            }
        }
    });
}

function createCustomerSatisfactionChart() {
    const ctx = document.getElementById('customerSatisfactionChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: customerSatisfactionData.map(item => item.category),
            datasets: [{
                label: 'Satisfaction Rating',
                data: customerSatisfactionData.map(item => item.rating),
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                title: {
                    display: true,
                    text: 'Customer Satisfaction Ratings'
                }
            }
        }
    });
}

function createMarketTrendsChart() {
    const ctx = document.getElementById('marketTrendsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: trendsData.map(item => item.date),
            datasets: [{
                label: 'Demand',
                data: trendsData.map(item => item.demand),
                borderColor: '#FFCE56',
                fill: false
            }, {
                label: 'Supply',
                data: trendsData.map(item => item.supply),
                borderColor: '#FF6384',
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                title: {
                    display: true,
                    text: 'Market Demand and Supply Trends'
                }
            }
        }
    });
}

function createServiceAppointmentsChart() {
    const ctx = document.getElementById('serviceAppointmentsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: serviceData.map(item => item.month),
            datasets: [{
                label: 'Appointments',
                data: serviceData.map(item => item.appointments),
                backgroundColor: '#36A2EB'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                title: {
                    display: true,
                    text: 'Service Appointments per Month'
                }
            }
        }
    });
}

function createServiceRevenueChart() {
    const ctx = document.getElementById('serviceRevenueChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: serviceData.map(item => item.month),
            datasets: [{
                label: 'Revenue',
                data: serviceData.map(item => item.revenue),
                borderColor: '#FF6384',
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Service Revenue'
                }
            }
        }
    });
}
