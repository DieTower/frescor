import { useContext, createContext, useRef } from 'react'

import * as S from './Style';

import { HomeContext } from '../../Home'

import Brands from './screens/brands/Brands'
import About from './screens/about/About'
import Localization from './screens/localization/Localization'
import Contact from './screens/contact/Contact'

export const MainContext = createContext("");

const Main = () => {

    const homeContext = useContext(HomeContext);

    const pageComponents = {
        brands: useRef(null),
        about: useRef(null),
        localization: useRef(null),
        contact: useRef(null),
    }

    return (
        <S.Main ref={el => homeContext.main = el}>
            <MainContext.Provider value={pageComponents}>
                {/*
                <Brands />
                */}
                <Brands />
                <About />
                <Localization />
                <Contact />
            </MainContext.Provider>
        </S.Main>
    );
}

export default Main;