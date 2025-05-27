
import { createContext } from "react";

// Define the shape of your shared state here
export interface AppContextType {
  sharedState: any; // Replace 'any' with a more specific type if possible
  setSharedState: (state: any) => void; // Update type as needed
}

// Provide a default value matching the type (can be null if you handle nulls)
const AppContext = createContext<AppContextType | null>(null);

export default AppContext;
