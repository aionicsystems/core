import { createContext, useState, ReactNode } from "react";

interface UserTypeContextProps {
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<string>>;
}

export const UserTypeContext = createContext<UserTypeContextProps>({
  userType: "Borrower",
  setUserType: () => {},
});

export const UserTypeProvider = ({ children }: { children: ReactNode }) => {
  const [userType, setUserType] = useState("Borrower");

  return (
    <UserTypeContext.Provider value={{userType, setUserType }}>
      {children}
    </UserTypeContext.Provider>
  );
};

export const userTypes = ["Borrower", "Collector", "Liquidator"];