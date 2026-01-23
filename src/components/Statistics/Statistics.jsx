new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [
      {
        data: [progress, 100 - progress],
      },
    ],
  },
});
