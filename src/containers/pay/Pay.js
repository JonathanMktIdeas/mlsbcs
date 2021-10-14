import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import styled from './Pay.style';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import DirectorCard from "@components/directorCard";
import service from '@utils/service';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { usePaymentInputs } from 'react-payment-inputs';
import { useHistory, useLocation } from 'react-router-dom';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '@modules/counter/actions';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import moment from 'moment';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import { useToasts } from 'react-toast-notifications';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
// const localizer = momentLocalizer(moment);

const calendarStyle = () => {
    return {
        // style: {
        //     backgroundColor: 'red'
        // }
    }
}

const Home = props => {
    const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();
    const { addToast } = useToasts();
    const [data, setData] = React.useState([]);
    const [selected, setSelected] = React.useState([]);
    const [paymentData, setPaymentData] = React.useState(null);
    const [timer, setTimer] = React.useState(null);
    const [form, setForm] = React.useState({});
    const [sessionId, setSessionId] = React.useState(null);
    const [isCheckout, setIsCheckout] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    // const { t } = props.useTranslation('common');
    let slider = React.useRef(null);

    React.useEffect(() => {
        // console.log('props', props);
        const urlParams = new URLSearchParams(window.location.search);
        const charge = urlParams.get('id');
        const intent = urlParams.get('payment_intent');

        if (charge) {
            service('member/confirm', null, {charge}, 'post')
                .then((data) => {
                    const response = data.data;

                    if (response === "completed") {
                        addToast('Transaction completed successfully', {
                            appearance: 'success',
                            autoDismiss: true,
                        });
                    } else {
                        addToast('Transaction not completed: we received ' + response + ' status.', {
                            appearance: 'error',
                            autoDismiss: true,
                        });
                    }

                    props.history.push({
                        pathname: '/pay',
                        search: ""
                    })
                })
                .catch(err => {
                    setIsLoading(false);
                    addToast('We found an application error: ' + err, {
                        appearance: 'error',
                        autoDismiss: true,
                    });
                    props.history.push({
                        pathname: '/pay',
                        search: ""
                    })
                });
        } else if(intent) {
            service('member/pay/confirm', null, {id: intent}, 'post')
                .then((data) => {
                    addToast('Transaction completed: we received ' + data.data.status + ' status.', {
                        appearance: 'success',
                        autoDismiss: true,
                    });
                    props.history.push({
                        pathname: '/',
                        search: ""
                    })
                })
                .catch(err => {
                    setIsLoading(false);
                    addToast('We found an application error: ' + err, {
                        appearance: 'error',
                        autoDismiss: true,
                    });
                    props.history.push({
                        pathname: '/pay',
                        search: ""
                    })
                });
        } else if (props.auth.loguedIn) {
            service('member/payment-info', null, null, 'get')
                .then(({data}) => {
                    setPaymentData(data);
                    window.OpenPay.setId(data.key);
                    window.OpenPay.setApiKey(data.id);
                    window.OpenPay.setSandboxMode(!data.production);

                    var deviceSessionId = window.OpenPay.deviceData.setup();
                    setSessionId(deviceSessionId);
                })
                .catch(err => {
                    setIsLoading(false);
                    addToast('We found an application error: ' + err, {
                        appearance: 'error',
                        autoDismiss: true,
                    });
                });
        }
    }, []);

    const validateForm = () => {
        return form.name && form.name !== '' &&
            form.exp && form.exp !== '' &&
            form.number && form.number !== '' &&
            form.cvv && form.cvv !== ''
    }

    const pay = () => {
        if (!validateForm()) {
            return addToast('Verifica los datos del formulario', {
                appearance: 'info',
                autoDismiss: true,
            });
        }

    //     const exp = form.exp.split('/');
    //     window.OpenPay.token.create({
    //         "card_number": form.number.replace(/\s/g, ''),
    //         "holder_name": form.name,
    //         "expiration_year": exp[1].trim(),
    //         "expiration_month": exp[0].trim(),
    //         "cvv2": form.cvv,
    //     }, (data) => {
    //         // console.log('siccess', data);
    //         const token = data.data.id;
    //
    //         const formData = {
    //             members_an: selected.filter(s => s.anual).map(d => d.id),
    //             members_se: selected.filter(s => !s.anual).map(d => d.id),
    //             session: sessionId,
    //             token,
    //         }
    //         service('member/url', null, formData, 'post')
    //             .then(data => {
    //                 window.open(data.data);
    //             })
    //             .catch(err => {
    //                 setIsLoading(false);
    //                 addToast('We found an application error: ' + err, {
    //                     appearance: 'error',
    //                     autoDismiss: true,
    //                 });
    //             });
    //     }, (error) => {
    //         console.log('err', error);
    //     });
    //
    // return;

        setIsLoading(true);
        const formData = {
            members_an: selected.filter(s => s.anual).map(d => d.id),
            members_se: selected.filter(s => !s.anual).map(d => d.id),
            holder_name: form.name,
            card_number: form.number.split(' ').join(''),
            session: sessionId,
            exp: form.exp.split(' ').join(''),
            cvv: form.cvv
        }

        service('member/pay', null, formData, 'post')
        // service('member/url', null, formData, 'post')
            .then(data => {
                if (data.data.next_action) {
                    setIsLoading(false);
                    addToast('3D Secure transaction, you will redirect to another website to complete the transaction.', {
                        appearance: 'info',
                        autoDismiss: true,
                    });
                    setTimeout(() => {
                        window.open(data.data.next_action.redirect_to_url.url, '_self');
                    }, 5000);
                } else {
                    setIsLoading(false);
                    setForm({});
                    setSelected([]);
                    setIsCheckout(false);
                    addToast('Tu pago fue realizado con exito', {
                        appearance: 'success',
                        autoDismiss: true,
                    });
                }

            })
            .catch(err => {
                setIsLoading(false);
                addToast('We found an application error: ' + err, {
                    appearance: 'error',
                    autoDismiss: true,
                });
            });
    };

    const onChangeSearch = (e) => {
        const value = e.target.value;

        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }

        let t = setTimeout(() => {
            fetchData(value);
        }, 300);
        setTimer(t);
    }

    const fetchData = (search = null) => {
        let params = { search };

        service('member/list', params, null, 'get')
            .then(data => {
                setTimer(null);
                setData(data.data);
            });
    };

    const getTotalPrice = () => {
        const total = selected.reduce((accumulator, current) => {
            const next = current.anual ? paymentData.price_anual : paymentData.price_sem;
            return accumulator + next;
        }, 0);

        return `${numberWithCommas(total)} USD (${numberWithCommas(total * paymentData.changerate)} MXN)`;
    }

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    React.useEffect(() => {
        if (props.auth.loguedIn) {
            fetchData();
        }
    }, []);

    const isSelected = (id) => {
        return selected.findIndex(d => d.id === id) >= 0;
    }

    return (
        <div  style={{ paddingTop: 110 }}>
            {!isCheckout ? (
                <div className="w-full xl:w-3/4 mx-auto p-4 xl:p-24">
                    <div className="grid grid-cols-5 border-2">
                        <styled.White className="col-span-5 xl:col-span-2 p-8">
                            <p className="font-bold text-md">Buscar miembros</p>
                            <styled.Input className="w-full border-2 mb-4" type="text" placeholder="Buscar miembros" value={form.search} onChange={onChangeSearch} />
                            <styled.Scroll style={{ maxHeight: 320 }}>
                                {data && data.map((d, i) => isSelected(d.id) ? null : (
                                    <div key={i} className="flex justify-between items-center p-2 border-b-2">
                                        <div>
                                            <styled.Row>{d.name}</styled.Row>
                                            <p style={{ fontSize: 9 }}>{d.agency.name}</p>
                                        </div>
                                        <styled.ButtonAdd onClick={() => {
                                            setSelected([
                                                ...selected,
                                                ...[{
                                                    ...d,
                                                    anual: true,
                                                }],
                                            ]);
                                        }}>agregar</styled.ButtonAdd>
                                    </div>
                                ))}
                            </styled.Scroll>
                        </styled.White>
                        <div className="col-span-5 xl:col-span-3">
                            <div className="p-8">
                                <p className="font-bold text-2xl mb-4">Carrito</p>
                                <styled.Scroll style={{ maxHeight: 280, height: 280 }}>
                                    {selected.map((d, i) => (
                                        <div key={i} className="flex justify-between items-center p-2 border-b-2">
                                            <div style={{ flex: 1 }}>
                                                <styled.Row>{d.name}</styled.Row>
                                                <p style={{ fontSize: 9 }}>({d.agency.name})</p>
                                                <p className="text-xs">$ {d.anual ? `${numberWithCommas(paymentData.price_anual)} USD (${numberWithCommas(paymentData.price_anual * paymentData.changerate)} MXN)` : `${numberWithCommas(paymentData.price_sem)} USD (${numberWithCommas(paymentData.price_sem * paymentData.changerate)} MXN)`}</p>
                                            </div>
                                            <FormControlLabel
                                                value="bottom"
                                                style={{ flex: 1 }}
                                                control={<Switch color="primary" checked={d.anual} onChange={(e, value) => {
                                                    setSelected([
                                                        ...selected.slice(0, i),
                                                        ...[{
                                                            ...d,
                                                            anual: value,
                                                        }],
                                                        ...selected.slice(i + 1),
                                                    ])
                                                }} />}
                                                label={d.anual ? 'Anual' : "Semestral"}
                                                labelPlacement="bottom"
                                            />
                                            <styled.ButtonRemove style={{ flex: 0.2 }} onClick={() => {
                                                setSelected([
                                                    ...selected.slice(0, i),
                                                    ...selected.slice(i + 1),
                                                ]);
                                            }}>remover</styled.ButtonRemove>
                                        </div>
                                    ))}
                                    {selected.length === 0 && (
                                        <div className="flex justify-center items-center flex-col">
                                            <h2 className="text-lg font-bold">Tu carrito esta vacio</h2>
                                            <p className="text-xs">Agrega algunos usuarios del lado izquierdo para continuar.</p>
                                        </div>
                                    )}
                                </styled.Scroll>
                                {selected.length > 0 && (
                                    <styled.PayButton onClick={() => {
                                        // const formData = {
                                        //     members_an: selected.filter(s => s.anual).map(d => d.id),
                                        //     members_se: selected.filter(s => !s.anual).map(d => d.id),
                                        //     session: sessionId,
                                        // }
                                        // service('member/url', null, formData, 'post')
                                        //     .then(data => {
                                        //         window.open(data.data);
                                        //     })
                                        //     .catch(err => {
                                        //         setIsLoading(false);
                                        //         addToast('We found an application error: ' + err, {
                                        //             appearance: 'error',
                                        //             autoDismiss: true,
                                        //         });
                                        //     });
                                        setIsCheckout(true);
                                    }}>
                                        {isLoading && <CircularProgress color="white" size={20} />}
                                        Checkout
                                    </styled.PayButton>
                                )}
                            </div>
                            <div className="w-full border-t-2 p-4 flex items-center justify-center">
                                <img src="/assets/images/secure.png" alt="debito" width="30" />
                                <p className="ml-4 text-xs font-bold">Tus pagos se realizan de forma segura con encriptación de 256 bits</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full xl:w-3/4 mx-auto p-4 xl:p-24">
                    <div className="grid grid-cols-5 border-2">
                        <styled.Gray className="col-span-5 xl:col-span-2 p-8">
                            <p className="font-bold text-2xl">Solicitud de Pago</p>
                            <p className="mb-8">{paymentData.mode}</p>
                            <p  className="font-bold text-lg">Cliente</p>
                            <p>{props.auth.data.name}</p>
                            <p>{props.auth.data.email}</p>

                            <p  className="font-bold text-lg mt-8">Concepto</p>
                            <p>Cargo por membresia</p>

                            <p  className="font-bold text-lg mt-8">Desglose</p>
                            {selected.map(s => (
                                <div>
                                    <p>{s.name} (<span className="text-xs">{s.anual ? 'Anual' : 'Semestral'}</span>) <span className="text-xs">${s.anual ? numberWithCommas(paymentData.price_anual) : numberWithCommas(paymentData.price_sem)} USD</span></p>
                                </div>
                            ))}

                            <p  className="font-bold text-lg mt-8">Importe:</p>
                            <styled.Price>${getTotalPrice()}</styled.Price>
                        </styled.Gray>
                        <div className="col-span-5 xl:col-span-3">
                            <div className="p-8">
                                <p className="font-bold text-2xl mb-8">Pago con tarjeta</p>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <p className="text-xs xl:text-xl">Tarjetas de Crédito</p>
                                        <img className="w-4/5" src="/assets/images/credito.png" alt="credito" />
                                    </div>
                                    <div>
                                        <p className="text-xs xl:text-xl">Tarjetas de débito</p>
                                        <img className="w-4/5" src="/assets/images/debito.png" alt="debito" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <label className="w-full font-bold my-2">Nombre</label>
                                    <styled.Input value={form.name} onChange={(e) => {
                                        setForm({
                                            ...form,
                                            name: e.target.value,
                                        });
                                    }} className="w-full border-2" type="text" placeholder="Como aparece en la tarjeta" />
                                    <label className="w-full font-bold my-2">Número de tarjeta</label>
                                    <styled.Input
                                        {...getCardNumberProps({
                                            onChange:(e) => {
                                                setForm({
                                                    ...form,
                                                    number: e.target.value,
                                                });
                                            }}
                                        )}
                                        max={16}
                                        value={form.number}
                                        className="w-full border-2"
                                        placeholder="xxxx xxxx xxxx xxxx"
                                    />
                                    <div className="w-full grid grid-cols-7 mt-4">
                                        <div className="col-span-4">
                                            <label className="w-full font-bold my-2">Fecha de expiración</label>
                                            <styled.Input
                                                {...getExpiryDateProps({
                                                    onChange:(e) => {
                                                        setForm({
                                                            ...form,
                                                            exp: e.target.value,
                                                        });
                                                    }}
                                                )}
                                                value={form.exp}
                                                className="w-full border-2"
                                                placeholder="mm/aa"
                                            />
                                        </div>
                                        <img className="w-full col-span-3" src="/assets/images/cvc.png" alt="debito" />
                                    </div>
                                    <div className="grid grid-cols-7">
                                        <div className="col-span-4">
                                            <label className="w-full font-bold my-2">Código de seguridad</label>
                                            <styled.Input
                                                {...getCVCProps({
                                                    onChange:(e) => {
                                                        setForm({
                                                            ...form,
                                                            cvv: e.target.value,
                                                        });
                                                    }}
                                                )}
                                                value={form.cvv}
                                                className="w-full border-2"
                                                placeholder="****"
                                                type="password"
                                            />
                                        </div>
                                    </div>
                                    <styled.PayButton onClick={pay} disabled={isLoading}>
                                        {isLoading && <CircularProgress color="white" size={20} />}
                                        Realizar Pago
                                    </styled.PayButton>
                                </div>
                            </div>
                            <div className="w-full border-t-2 p-4 flex items-center justify-center">
                                <img src="/assets/images/secure.png" alt="debito" width="30" />
                                <p className="ml-4 text-xs font-bold">Tus pagos se realizan de forma segura con encriptación de 256 bits</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = ({ auth }) => ({
    auth,
});

export default connect(mapStateToProps)(Home);
