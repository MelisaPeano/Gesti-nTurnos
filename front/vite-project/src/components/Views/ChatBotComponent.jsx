import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial, sans-serif",
  headerBgColor: "#0d6efd",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#0d6efd",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const steps = [
  {
    id: "1",
    message: "¡Hola! Bienvenido a GestiónTurnos. ¿En qué puedo ayudarte?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: "turno", label: "Reservar un turno", trigger: "3" },
      { value: "consulta", label: "Consultar un turno", trigger: "4" },
      { value: "otro", label: "Otra consulta", trigger: "5" },
    ],
  },
  {
    id: "3",
    message: "Para reservar un turno, ve a la sección 'Agendar Turno'.",
    end: true,
  },
  {
    id: "4",
    message: "Para consultar tu turno, ve a 'Mis Turnos'.",
    end: true,
  },
  {
    id: "5",
    message: "Puedes escribirnos a soporte@gestionturnos.com",
    end: true,
  },
];

const ChatBotComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        floating={true} // para que aparezca como burbuja flotante
        headerTitle="Asistente Virtual"
      />
    </ThemeProvider>
  );
};

export default ChatBotComponent;
