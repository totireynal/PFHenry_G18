import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  headerBgColor: "#38BDF8",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#38BDF8",
  botFontColor: "#fff",
  userBubbleColor: "#38BDF8",
  userFontColor: "#fff",
};

const chatBot = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={[
          {
            id: "hello-world",
            message: "Hello, welcome! I am a chatbot. What's your name?",
            trigger: "2",
          },
          {
            id: "2",
            user: true,
            validator: (value) => {
              if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                return true;
              } else {
                return "Please enter a valid name.";
              }
            },
            trigger: "3",
          },
          {
            id: "3",
            message: "Hi {previousValue}, nice to meet you!",
            trigger: "4",
          },
          {
            id: "4",
            message: "Do you need anything from me?",
            trigger: "5",
          },
          {
            id: "5",
            options: [
              { value: "y", label: "Yes", trigger: "6A" },
              { value: "n", label: "No", trigger: "6B" },
            ],
          },
          {
            id: "6A",
            message: "Great! Tell me what are you looking for...",
            end: true,
          },
          {
            id: "6B",
            message: "Im sorry if I cannot be of help to you. See you later",
            end: true,
          },
        ]}
      />
    </ThemeProvider>
  );
};

export default chatBot;
