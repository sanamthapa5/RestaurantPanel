import { BarChart } from "lucide-react"
import "./YearlyStats.css"

const YearlyStats = () => {
  // Months of the year for x-axis
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  // Y-axis values
  const yAxisValues = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

  return (
    <div className="statistics-container">
      <div className="statistics-header">
        <div className="statistics-title">
          <BarChart className="statistics-icon" />
          <h2>Yearly Statistics</h2>
        </div>
        <div className="statistics-legend">
          <div className="legend-item">
            <span className="legend-dot commission"></span>
            <span>Commission given : $ 0.00</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot earnings"></span>
            <span>Total earning : $ 0.00</span>
          </div>
        </div>
      </div>

      <div className="chart-container">
        {/* Y-axis labels */}
        <div className="y-axis">
          <div className="y-axis-label">$(Currency)</div>
          {yAxisValues.map((value, index) => (
            <div key={index} className="y-axis-value">
              {value.toFixed(1)}
            </div>
          ))}
        </div>

        {/* Chart grid and lines */}
        <div className="chart-grid">
          {/* Horizontal grid lines */}
          {yAxisValues.map((value, index) => (
            <div key={index} className="grid-line horizontal-line"></div>
          ))}

          {/* X-axis with months */}
          <div className="x-axis">
            {months.map((month, index) => (
              <div key={index} className="x-axis-label">
                {month}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default YearlyStats;

