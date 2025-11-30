// TabelaPedidos.jsx
import "./style.css";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const pedidos = [
  { id: 1, cliente: "João Silva", total: "R$ 199,90", status: "Concluído" },
  {
    id: 2,
    cliente: "Maria Souza",
    total: "R$ 89,90",
    status: "Em processamento",
  },
  { id: 3, cliente: "Carlos Lima", total: "R$ 55,50", status: "Cancelado" },
];

export default function TabelaPedidos() {
  return (
    <Card sx={{ borderRadius: 3, marginTop: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Últimos Pedidos
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.id}</TableCell>
                  <TableCell>{p.cliente}</TableCell>
                  <TableCell>{p.total}</TableCell>
                  <TableCell>{p.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
