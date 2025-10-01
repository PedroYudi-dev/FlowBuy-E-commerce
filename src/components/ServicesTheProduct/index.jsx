// Import
import "./style.css";

// state
import { useLocation } from "react-router-dom";

// Icons
import { RotateCcw, Shield, Truck } from "lucide-react"

export default function ServicesTheProduct(){

  const location = useLocation();
  const RouterIconsService = location.pathname.startsWith("/Buyer") ? "#074107" : "#0b14c8"

    const addBusinessDays = (date, days) => {
        const newDate = new Date(date)
        let adds = 0
        while(adds < days){
            newDate.setDate(newDate.getDate() + 1)
            const dayWeek = newDate.getDay()
            //aqui se o dia da semana for domingo ou sabado ele soma mais 1 por são dias uteis
            if(dayWeek !== 0 && dayWeek !== 6){
                adds++
            }
        }
        return newDate
    }

    //Estamos seleccionando os dias uteis
    const businessDays = 7
    const today = new Date()
    const nextDate = addBusinessDays(today, businessDays)

    const formatDate = nextDate.toLocaleDateString("pt-BR", {
      weekday: "long",
      day:"numeric",
      month: "numeric",
      year: "2-digit",
    }); 

    return (
      <div id="Service-container">
        <div className="Services-structure">
          <Truck color={RouterIconsService} />
          <div>
            <h5>Frete grátis</h5>
            <p>
              Entrega Prevista <strong>{formatDate}</strong>
            </p>
          </div>
        </div>
        <div className="Services-structure">
          <Shield color={RouterIconsService} />
          <div>
            <h5>Suporte FlowBuy® disponível</h5>
            <p>Ajuda especializada quando você precisar</p>
          </div>
        </div>
        <div className="Services-structure">
          <RotateCcw color={RouterIconsService} />
          <div>
            <h5>Política de devolução de 15 dias</h5>
            <p>Devolução ou troca em até 15 dias</p>
          </div>
        </div>
      </div>
    );
}