import { Styles } from "./styles";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import WhatsAppBtn from "@/components/ui/Btns/WhatsApp";

const plans = [
  {
    title: "Basic",
    items: [
      {
        label: "2 consultas",
      },
      {
        label: "Acesso ao aplicativo",
      },
      {
        label: "Plano alimentar individualizado",
      },
      {
        label: "Planner",
      },

      {
        label: "Encontro semanais",
        isIncludedOnThePlan: false,
      },
      {
        label: "Lista de compras",
        isIncludedOnThePlan: false,
      },
      {
        label: "Receitas",
        isIncludedOnThePlan: false,
      },
      {
        label:
          "Materiais complementares (ex Higiene do sono, Mindfullness, etc)",
        isIncludedOnThePlan: false,
      },
    ],
  },
  {
    title: "Premium",
    items: [
      {
        label: "4 consultas",
      },
      {
        label: "Acesso ao aplicativo",
      },
      {
        label: "Plano alimentar individualizado",
      },
      {
        label: "Planner",
      },

      {
        label: "Encontro semanais",
      },
      {
        label: "Lista de compras",
      },
      {
        label: "Receitas",
      },
      {
        label:
          "Materiais complementares (ex Higiene do sono, Mindfullness, etc)",
      },
    ],
  },
];

export default function Plans() {
  return (
    <Styles.Wrapper>
      <Styles.Content>
        {plans.map(({ items, title }) => (
          <Styles.Paper key={title}>
            <Typography variant="h3" color="white" fontWeight="bold">
              {title}
            </Typography>
            <>
              {items.map(({ label, isIncludedOnThePlan }) => (
                <Styles.PaperList key={label}>
                  {isIncludedOnThePlan !== undefined ? (
                    <CloseIcon color="error" />
                  ) : (
                    <CheckIcon color="primary" />
                  )}
                  <Typography variant="body1">{label}</Typography>
                </Styles.PaperList>
              ))}
            </>
          </Styles.Paper>
        ))}
      </Styles.Content>
      <WhatsAppBtn id="whats-btn--adds__plans" />
    </Styles.Wrapper>
  );
}
