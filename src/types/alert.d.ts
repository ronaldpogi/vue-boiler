interface AlertPayload {
  id: string;
  type: string;
  message: string;
}

type AlertType = "primary" | "secondary" | "success" | "warning" | "danger";

export { AlertPayload, AlertType };
