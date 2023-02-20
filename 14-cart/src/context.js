import React, { useContext, useReducer, useEffect } from "react"
import cartItems from "./data"
import reducer from "./reducer"
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project"
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const increaseItemAmount = (id) => {
    dispatch({ type: "INCREASE_ITEM", payload: id })
  }

  const decreaseItemAmount = (id) => {
    dispatch({ type: "DECREASE_ITEM", payload: id })
  }

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" })
  }, [state.cart])

  const fetchData = async () => {
    dispatch({ type: "LOAD_DATA" })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: "DISPLAY_ITEMS", payload: cart })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItemAmount,
        decreaseItemAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
