import { RouteProtection } from "../../app/auth-listener"
import { AuthContextProvider } from "../../app/auth-listener"


const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthContextProvider>
      <RouteProtection>{children}</RouteProtection>
    </AuthContextProvider>
  )
}
export default Provider
