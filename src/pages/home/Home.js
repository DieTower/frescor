import { createContext, useRef } from 'react'

import { GridTemplate, Grid } from 'components/core/Core'

import './Home.css'

import BackgroundBlur from './components/backgroundBlur/BackgroundBlur'

import Header from './screens/header/Header';
import Main from './screens/main/Main';
import Footer from './screens/footer/Footer';

export const HomeContext = createContext("");

const Home = () => {

    const pageComponents = {
        header: useRef(null),
        main: useRef(null),
        footer: useRef(null)
    }

    return (
        <HomeContext.Provider value={pageComponents}>
            <div className="container">
                <GridTemplate
                    columns="1fr 1fr"
                    rows="minmax(105vh, 1000px) 1fr auto 1fr 200px">
                    
                    <Grid
                        column="1/3"
                        row="1/3"
                        zIndex="-1">
                        <BackgroundBlur position="bottom" start="#0f85e6" end="#ffffff" blur="400" />
                    </Grid>

                    <Grid
                        column="1/3"
                        row="1/2">

                        <Header />
                    </Grid>

                    <Grid
                        column="1/3"
                        row="2/5">
                        
                        <Main />
                    </Grid>

                    <Grid
                        column="1/3"
                        row="5/6" >
                        
                        <Footer />
                    </Grid>

                    <Grid
                        column="1/3"
                        row="4/6"
                        zIndex="-1">
                        <BackgroundBlur position="top" start="#4dbe18" end="#ffffff" blur="400" />
                    </Grid>
                </GridTemplate>
            </div>
        </HomeContext.Provider>
    );
}

export default Home;