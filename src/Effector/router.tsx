import { useRoutes } from "react-router-dom"

export const EffectorRouter = () => {
  const router = useRoutes([{
    path: '/',
    element: <span>Тут будут попытки изучения effector, не стремайте 👉👈</span>
  }])

  return router;
}