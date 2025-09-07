interface ToastPayload {
  id: string;
  type: string;
  message: string;
  position: string;
}

type ToastType = "primary" | "secondary" | "success" | "warning" | "danger";

type ToastPosition = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

export { ToastPayload, ToastType, ToastPosition };
