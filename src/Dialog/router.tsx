import { useRoutes } from "react-router-dom"
import DialogView from "./DialogView";

export const DialogRouter = () => {
  const router = useRoutes([{
    path: '/',
    element: <DialogView />
  }])

  return router;
}