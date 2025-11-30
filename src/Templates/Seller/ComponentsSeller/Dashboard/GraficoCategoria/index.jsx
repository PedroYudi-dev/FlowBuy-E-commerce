import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "./style.css";

const data = [
  { name: "Eletrônicos", value: 450 },
  { name: "Roupas", value: 320 },
  { name: "Acessórios", value: 180 },
  { name: "Casa e Jardim", value: 260 },
];

const COLORS = ["#4F46E5", "#06B6D4", "#10B981", "#F59E0B"];

export default function GraficoCategorias() {
  return (
    <div className="grafico-categorias-container">
      <h3 className="grafico-categorias-title">Vendas por Categoria</h3>

      <div className="grafico-categorias-chart">
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={90}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
