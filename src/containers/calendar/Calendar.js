import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import styled from './Calendar.style';
import { connect } from 'react-redux';
import DirectorCard from "@components/directorCard";
import ScrollAnimation from 'react-animate-on-scroll';
import DialogEvent from './Dialog';
import ContentEvent from './Event';
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
import service from '@utils/service';
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
    const { t } = props.useTranslation('common');
    let slider = React.useRef(null);
    let calendarRef = React.useRef(null);
    const [currentDate, setCurrentDate] = React.useState(moment().format('MMMM YYYY'));
    const [events, setEvents] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(null);
    const [openContent, setOpenContent] = React.useState(false);
    const [eventEdit, setEventEdit] = React.useState(null);
    const { addToast } = useToasts();

    const fetchData = () => {
        service('events', null, null, 'get')
            .then(data => {
                setEvents(data.data.map(d => ({
                    ...d,
                    end: d.end ? d.end : d.start,
                    allDay: d.all_day == 1
                })));
            });
    }

    const onEditEvent = data => {
        setEventEdit(data);
        setOpen(true);
        setOpenContent(false);
    }

    const onDeleteEvent = data => {
        setEventEdit(null);
        setOpen(false);
        setOpenContent(false);
        service(`events/${data.id}`, null, null, 'delete')
            .then(data => {
                addToast('El evento fue eliminado correctamente.', {
                    appearance: 'success',
                    autoDismiss: true,
                });
                fetchData();
            });
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    React.useEffect(() => {
        if (!open) {
            fetchData();
        }
    }, [open]);

    return (
        <div>
            <styled.Banner className="flex justify-center items-center">
                <styled.Shadow className="text-6xl text-white font-bold uppercase">{t('activities_calendar')}</styled.Shadow>
            </styled.Banner>
            <div className="container w-full xl:w-3/4 mx-auto p-0 xl:p-24">
                <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                    <styled.Title className="font-bold">{t('education')}</styled.Title>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__bounceInRight" animateOnce>
                    <styled.Subtitle className="font-bold">{t('calendar')}</styled.Subtitle>
                </ScrollAnimation>
                <div className="flex items-center">
                    <styled.Button onClick={() => {
                        calendarRef.current.handleNavigate('PREV');
                    }}>

                        <img src="/assets/images/left-arrow.png" width="20" />
                    </styled.Button>
                    {props.auth.data && props.auth.data.is_admin === 1 && <styled.Button onClick={() => {
                        setOpen(true);
                    }}>
                        {t('new_event')}
                    </styled.Button>}
                    <styled.Button onClick={() => {
                        calendarRef.current.handleNavigate('NEXT');
                    }}>
                        <img src="/assets/images/right-arrow.png" width="20" />
                    </styled.Button>
                </div>
                <styled.Header>
                    {currentDate}
                </styled.Header>
                <Calendar
                    localizer={localizer}
                    events={events}
                    ref={calendarRef}
                    views={['month']}
                    toolbar={false}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 1200, width: '100%' }}
                    selectable
                    onSelectEvent={(event, ) => {
                        setSelected(event);
                        setOpenContent(true);
                    }}
                    components={{
                        month: {
                            header: (props) => {
                                return <p className="header-day-bc">{props.label}</p>
                            },
                        },
                    }}
                    slotPropGetter={() => ({ background: 'red' })}
                    dayPropGetter={calendarStyle}
                    onNavigate={date => {
                        setCurrentDate(moment(date).format('MMMM YYYY'));
                    }}
                />
            </div>
            <DialogEvent
                open={open}
                setOpen={setOpen}
                eventEdit={eventEdit}
            />
            {selected && (
                <ContentEvent
                    open={openContent}
                    setOpen={setOpenContent}
                    onEditEvent={onEditEvent}
                    onDeleteEvent={onDeleteEvent}
                    data={selected}
                    isAdmin={props.auth.data && props.auth.data.is_admin === 1}
                />
            )}
        </div>
    );
};

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
