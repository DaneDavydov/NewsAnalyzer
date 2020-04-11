export default class Statistics {
  constructor(chart) {
    this._statisticsChart = chart;
  }

  render(date, value) {
    const chartDate = document.createElement('p');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    chartDate.textContent = date;
    svg.setAttributeNS(null, 'width', '100%');
    svg.setAttributeNS(null, 'height', '24');
    rect.setAttributeNS(null, 'width', `${value}%`);
    rect.setAttributeNS(null, 'height', '24');
    text.setAttributeNS(null, 'x', '2');
    text.setAttributeNS(null, 'y', '65%');
    chartDate.classList.add("chart__date");
    rect.classList.add('chart__bar');
    text.classList.add('chart__bar-text');
    text.textContent = value;

    svg.appendChild(rect);
    svg.appendChild(text);

    this._statisticsChart.appendChild(chartDate);
    this._statisticsChart.appendChild(svg);
  }
}