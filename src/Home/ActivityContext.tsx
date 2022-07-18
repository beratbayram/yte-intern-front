import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import Activity from "../api/Activity";

const ActivityContext = createContext<{
    value: Activity[],
    setValue: Dispatch<SetStateAction<Activity[]>>
} | undefined>(undefined)

interface Props {
    children: ReactNode
}

function ActivityProvider({children}: Props) {
    const [value, setValue] = useState<Activity[]>([]);
    return (
        <ActivityContext.Provider value={{value, setValue}}>
            {children}
        </ActivityContext.Provider>
    )
}

function useActivityContext(): {value: Activity[], setValue: Dispatch<SetStateAction<Activity[]>>} {
    const context = useContext(ActivityContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context
}

export {ActivityProvider, useActivityContext}