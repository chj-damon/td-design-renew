import { usePrevious, useSafeState } from '@td-design/rn-hooks';
import React, { ReactText } from 'react';

export const SwipeRowContext = React.createContext<{
  id?: ReactText;
  changeState: (id: ReactText) => void;
}>({
  id: undefined,
  changeState: () => {},
});

export const SwipeRowContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentId, setCurrentId] = useSafeState<ReactText>('');
  const previous = usePrevious(currentId);

  const changeState = (id: ReactText) => {
    setCurrentId(id);
  };

  return (
    <SwipeRowContext.Provider value={{ changeState, id: previous }}>
      <>{children}</>
    </SwipeRowContext.Provider>
  );
};
