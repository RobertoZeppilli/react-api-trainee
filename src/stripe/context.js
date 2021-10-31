import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isProductsOpen, setIsProductsOpen] = useState(false)
    const [isDevelopersOpen, setIsDevelopersOpen] = useState(false)
    const [isCompanyOpen, setIsCompanyOpen] = useState(false)
    const [links, setLinks] = useState(sublinks)
    const [page, setPage] = useState({ page: '', links: [] })
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const openProducts = (text) => {
        const page = sublinks.find(link => link.page === text)
        setPage(page)
        setIsProductsOpen(!isProductsOpen)
        setIsCompanyOpen(false)
        setIsDevelopersOpen(false)
    }
    const openDevelopers = (text) => {
        const page = sublinks.find(link => link.page === text)
        setPage(page)
        setIsDevelopersOpen(!isDevelopersOpen)
        setIsCompanyOpen(false)
        setIsProductsOpen(false)
    }
    const openCompany = (text) => {
        const page = sublinks.find(link => link.page === text)
        setPage(page)
        setIsCompanyOpen(!isCompanyOpen)
        setIsDevelopersOpen(false)
        setIsProductsOpen(false)
    }

    const openSidebar = () => {
        setSidebarOpen(true)
    }

    const closeSidebar = () => {
        setSidebarOpen(false)
    }


    return (
        <AppContext.Provider value={{
            isProductsOpen,
            isDevelopersOpen,
            isCompanyOpen,
            openProducts,
            openDevelopers,
            openCompany,
            sidebarOpen,
            closeSidebar,
            openSidebar,
            page
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext }