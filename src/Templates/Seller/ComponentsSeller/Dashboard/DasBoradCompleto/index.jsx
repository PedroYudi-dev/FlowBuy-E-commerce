import "./style.css";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Divider,
  Avatar,
  Chip,
} from "@mui/material";
import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import {
  AreaChart,
  Area,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function DashboardCompleto() {
  // ---------------- DADOS EXEMPLO ----------------
  const receitaMensal = [
    { name: "Jan", meta: 40000, vendas: 50000 },
    { name: "Fev", meta: 45000, vendas: 52000 },
    { name: "Mar", meta: 47000, vendas: 48000 },
    { name: "Abr", meta: 50000, vendas: 60000 },
    { name: "Mai", meta: 52000, vendas: 58000 },
    { name: "Jun", meta: 55000, vendas: 65000 },
    { name: "Jul", meta: 58000, vendas: 68000 },
    { name: "Ago", meta: 60000, vendas: 66000 },
    { name: "Set", meta: 63000, vendas: 70000 },
    { name: "Out", meta: 67000, vendas: 75000 },
    { name: "Nov", meta: 70000, vendas: 90000 },
    { name: "Dez", meta: 80000, vendas: 120000 },
  ];

  const pedidosMes = [
    { name: "Jan", pedidos: 300 },
    { name: "Fev", pedidos: 380 },
    { name: "Mar", pedidos: 350 },
    { name: "Abr", pedidos: 420 },
    { name: "Mai", pedidos: 390 },
    { name: "Jun", pedidos: 500 },
    { name: "Jul", pedidos: 530 },
    { name: "Ago", pedidos: 510 },
    { name: "Set", pedidos: 600 },
    { name: "Out", pedidos: 650 },
    { name: "Nov", pedidos: 720 },
    { name: "Dez", pedidos: 820 },
  ];

  const categorias = [
    { name: "Eletrônicos", value: 35 },
    { name: "Smartphones", value: 25 },
    { name: "Informática", value: 20 },
    { name: "Games", value: 12 },
    { name: "Outros", value: 8 },
  ];

  const cores = ["#0035FF", "#4D7BFF", "#0095FF", "#76B3FF", "#BFD7FF"];

  const pedidosRecentes = [
    {
      id: "#12845",
      cliente: "João Silva",
      produto: "iPhone 15 Pro",
      valor: 7499,
      status: "Concluído",
    },
    {
      id: "#12844",
      cliente: "Maria Santos",
      produto: "MacBook M2",
      valor: 9999,
      status: "Processando",
    },
    {
      id: "#12843",
      cliente: "Pedro Costa",
      produto: "AirPods Pro",
      valor: 2399,
      status: "Concluído",
    },
    {
      id: "#12842",
      cliente: "Ana Oliveira",
      produto: 'iPad Pro 12.9"',
      valor: 10499,
      status: "Enviado",
    },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard de Vendas</h1>
      <p className="dashboard-subtitle">
        Visão geral do desempenho em tempo real
      </p>

      {/* ------------ CARDS SUPERIORES ------------- */}
      <div className="cards-top">
        <Card className="dash-card">
          <CardContent className="card-content">
            <Avatar className="card-icon">
              <DollarSign />
            </Avatar>
            <div>
              <p className="card-label">Receita Total</p>
              <h2 className="card-value">R$ 832,45</h2>
              <span className="card-positive">
                <TrendingUp size={14} /> +12.5%
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="dash-card">
          <CardContent className="card-content">
            <Avatar className="card-icon">
              <ShoppingCart />
            </Avatar>
            <div>
              <p className="card-label">Total de Pedidos</p>
              <h2 className="card-value">6</h2>
              <span className="card-positive">
                <TrendingUp size={14} /> +8.2%
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="dash-card">
          <CardContent className="card-content">
            <Avatar className="card-icon">
              <Users />
            </Avatar>
            <div>
              <p className="card-label">Novos Clientes</p>
              <h2 className="card-value">1</h2>
              <span className="card-positive">
                <TrendingUp size={14} /> +15.3%
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="dash-card">
          <CardContent className="card-content">
            <Avatar className="card-icon">
              <Package />
            </Avatar>
            <div>
              <p className="card-label">Produtos Vendidos</p>
              <h2 className="card-value">13</h2>
              <span className="card-negative">
                <TrendingDown size={14} /> -2.4%
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ------------ GRÁFICOS 2 COLUNAS ------------- */}
      <div className="charts-row">
        <Card className="chart-card">
          <CardHeader title="Receita Mensal" />
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={receitaMensal}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="vendas"
                  stroke="#0035FF"
                  fill="#0035FF20"
                />
                <Area
                  type="monotone"
                  dataKey="meta"
                  stroke="#00B56A"
                  fill="#00B56A20"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="chart-card">
          <CardHeader title="Pedidos por Mês" />
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={pedidosMes}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pedidos" fill="#0035FF" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* ------------ GRÁFICO + LISTA ------------- */}
      <div className="charts-row">
        <Card className="chart-card">
          <CardHeader title="Vendas por Categoria" />
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  dataKey="value"
                  nameKey="name"
                  data={categorias}
                  outerRadius={100}
                >
                  {categorias.map((_, i) => (
                    <Cell key={i} fill={cores[i]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Produtos mais vendidos */}
        <Card className="chart-card">
          <CardHeader title="Pedidos Recentes" />
          <CardContent>
            <table className="table-orders">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cliente</th>
                  <th>Produto</th>
                  <th>Valor</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {pedidosRecentes.map((p, i) => (
                  <tr key={i}>
                    <td>{p.id}</td>
                    <td>{p.cliente}</td>
                    <td>{p.produto}</td>
                    <td>R$ {p.valor.toLocaleString("pt-BR")}</td>
                    <td>
                      <Chip
                        label={p.status}
                        size="small"
                        className={`status-${p.status.toLowerCase()}`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
