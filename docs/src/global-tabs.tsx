import React, { useCallback, useEffect, useMemo, useState } from "react";

type TabType = string;

interface ISelectedTabsState {
  "npm/yarn": string;
  "TypeScript/JavaScript": string;
  [key: TabType]: string;
}

interface ITabsContext {
  tabsState: ISelectedTabsState;
  changeTab: (type: string, value: string) => void;
}

export const GlobalTabsContext = React.createContext<ITabsContext>({
  tabsState: {
    "npm/yarn": "npm",
    "TypeScript/JavaScript": "TypeScript",
  },
  changeTab: () => {},
});

export const generateTabsGroupType = (options: string): string => {
  return options.split(",").join("/");
};

export const TabsProvider = ({
  children,
}: React.PropsWithChildren<{}>): JSX.Element => {
  const [tabsState, setTabsState] = useState<ISelectedTabsState>({
    "npm/yarn": "npm",
    "TypeScript/JavaScript": "TypeScript",
  });

  const changeTab = useCallback(
    (type, value) => {
      const newTabsState = {
        ...tabsState,
        [type]: value,
      };
      localStorage.setItem("tabs", JSON.stringify(newTabsState));
      setTabsState(newTabsState);
    },
    [tabsState, setTabsState]
  );

  const initialContext = useMemo(
    () => ({ tabsState, changeTab }),
    [tabsState, changeTab]
  );

  useEffect(() => {
    const savedTabsState = localStorage.getItem("tabs");
    if (savedTabsState === null) return;

    setTabsState(JSON.parse(savedTabsState));
  }, []);

  return (
    <GlobalTabsContext.Provider value={initialContext}>
      {children}
    </GlobalTabsContext.Provider>
  );
};