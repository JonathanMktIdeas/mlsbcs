import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Router from '@containers/router';
import store, { history } from '@modules/store';
import { I18nextProvider } from "react-i18next";
import i18next from '@translations';
import { ToastProvider } from 'react-toast-notifications';
// import style / css
import '@src/index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "animate.css/animate.min.css";

const Container = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <I18nextProvider i18n={i18next}>
                <ToastProvider>
                    <Router />
                </ToastProvider>
            </I18nextProvider>
        </ConnectedRouter>
    </Provider>
)

export default Container;
