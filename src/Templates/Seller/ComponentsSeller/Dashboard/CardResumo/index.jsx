// CardResumo.jsx
import "./style.css";
import { Card, CardContent, Typography } from "@mui/material";
import { ShoppingCart, DollarSign, Users } from "lucide-react";

export default function CardResumo() {
  const items = [
    {
      title: "Total de Vendas",
      value: "R$ 32.400",
      icon: <DollarSign size={28} />,
    },
    { title: "Pedidos", value: "152", icon: <ShoppingCart size={28} /> },
    { title: "Clientes", value: "89", icon: <Users size={28} /> },
  ];

  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {items.map((item, index) => (
        <Card key={index} sx={{ width: 250, borderRadius: 3 }}>
          <CardContent
            style={{ display: "flex", gap: 15, alignItems: "center" }}
          >
            {item.icon}
            <div>
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                {item.value}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
