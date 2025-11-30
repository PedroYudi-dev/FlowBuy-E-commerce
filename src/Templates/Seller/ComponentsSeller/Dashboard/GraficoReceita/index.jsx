// GraficoReceita.jsx
import "./style.css";
import { Card, CardContent, Typography } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { mes: "Jan", receita: 2400 },
  { mes: "Fev", receita: 3100 },
  { mes: "Mar", receita: 2800 },
  { mes: "Abr", receita: 3500 },
  { mes: "Mai", receita: 4300 },
  { mes: "Jun", receita: 3900 },
];

export default function GraficoReceita() {
  return (
    <Card sx={{ borderRadius: 3, marginTop: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Receita Mensal
        </Typography>

        <div style={{ width: "100%", height: 280 }}>
          <ResponsiveContainer>
            <AreaChart data={data}>
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="receita"
                fill="#1976d2"
                opacity={0.4}
                stroke="#1976d2"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
