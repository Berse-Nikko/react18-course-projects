import React, { useState, useContext } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false)
  const [isModal, setIsModal] = useState(false)

  const openSidebar = () => {
    setIsSidebar(true)
  }

  const closeSidebar = () => {
    setIsSidebar(false)
  }

  const openModal = () => {
    setIsModal(true)
  }

  const closeModal = () => {
    setIsModal(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebar,
        isModal,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
