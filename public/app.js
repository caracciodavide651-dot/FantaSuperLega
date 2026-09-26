* {
  box-sizing: border-box;
}

:root {
  --bg: #101820;
  --panel: #18242f;
  --panel-soft: #1f2d3a;
  --card: #233949;
  --primary: #72e2a3;
  --secondary: #7ec8ff;
  --accent: #ffd166;
  --text: #edf6ff;
  --muted: #9cb3c8;
  --danger: #ff7b7b;
  --border: rgba(255, 255, 255, 0.06);
}

body {
  margin: 0;
  font-family: Inter, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #0f1720 0%, #101820 100%);
  color: var(--text);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 20px 60px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.eyebrow {
  margin: 0;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 12px;
}

h1 {
  margin: 8px 0 0;
  font-size: clamp(2rem, 4vw, 3rem);
}

.topbar-meta {
  display: flex;
  align-items: center;
  gap: 16px;
}

.primary-btn {
  background: var(--primary);
  color: #0e1a1f;
  border: none;
  border-radius: 10px;
  padding: 10px 16px;
  font-weight: 700;
  cursor: pointer;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px 18px 14px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.stat-card .label {
  font-size: 12px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.stat-card .value {
  display: block;
  margin-top: 8px;
  font-size: 1.8rem;
  font-weight: 700;
}

.main-grid,
.bottom-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.bottom-grid {
  grid-template-columns: 1.2fr 1fr;
}

.panel {
  background: rgba(17, 24, 32, 0.8);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 18px;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.18);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.panel-header h2 {
  margin: 0;
  font-size: 1.2rem;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 12px 8px;
  text-align: left;
  border-bottom: 1px solid var(--border);
}

th {
  color: var(--muted);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.fixture-list,
.market-list,
.teams-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.fixture-item,
.market-item,
.team-card {
  background: var(--panel-soft);
  border-radius: 14px;
  border: 1px solid var(--border);
  padding: 14px 16px;
}

.fixture-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.fixture-item strong {
  display: block;
  margin-bottom: 5px;
}

.fixture-item span {
  color: var(--muted);
  font-size: 0.85rem;
}

.teams-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
}

.team-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.team-card h3 {
  margin: 0;
  font-size: 1rem;
}

.meta-line {
  color: var(--muted);
  font-size: 0.9rem;
}

.market-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.player-name {
  font-weight: 700;
}

.player-role {
  color: var(--muted);
  font-size: 0.85rem;
}

.price-tag {
  background: rgba(114, 226, 163, 0.12);
  color: var(--primary);
  border-radius: 999px;
  padding: 5px 8px;
  font-size: 0.8rem;
  font-weight: 700;
}

@media (max-width: 900px) {
  .main-grid,
  .bottom-grid,
  .summary-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}
