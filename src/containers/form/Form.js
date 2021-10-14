import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import styled from './Form.style';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import DirectorCard from "@components/directorCard";
import service from '@utils/service';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { usePaymentInputs } from 'react-payment-inputs';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import html2canvas from 'html2canvas';

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

    const [value, setValue] = React.useState({
        value1: 'yes',
        value2: 'yes',
        value3: 'yes',
        value4: 'yes',
        value5: 'yes',
        value6: 'yes',
        value7: 'yes',
        value8: 'yes',
        card: 'visa',
    });
    const node = React.useRef();

    const handleChange = (v, event) => {
        setValue({
            ...value,
            [v]: event.target.value,
        });
    };

    const day = moment().format('Do');
    const month = moment().format('MMMM');

    return (
        <div className="py-40 w-full xl:w-3/4 mx-auto">
            <div className="p-0 xs:p-16 xl:p-0 xl:container mx-auto" ref={node}>
                <styled.Header>
                    <p>License / Certification Information:</p>
                </styled.Header>
                <div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 col-span-2 p-2">
                            <p>Full Name: (as shown on certification)</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-5">
                        <div className="border-2 col-span-2 p-2">
                            <p>Real Estate License #</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-3">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-5">
                        <div className="border-2 col-span-2 p-2">
                            <p>Date of License:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-3">
                            <FormControl component="fieldset" className="w-full">
                                <RadioGroup className="flex w-full flex-row" value={value.value1} style={{ flexDirection: 'row' }} aria-label="value1" name="value1" onChange={handleChange.bind(this, 'value1')}>
                                    <FormControlLabel value="yes" control={<Radio color="default" />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio color="default" />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 col-span-4 p-2">
                            <p>Is this license in good standing with the state?</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-2">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 col-span-2 p-2">
                            <p>Primary Field of Business:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 col-span-2 p-2">
                            <p>Specialty Fields:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 col-span-2 p-2">
                            <p>Years in the Business:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 col-span-4 p-2">
                            <p>MLS BCS Ethics Update Course Completed (2.5 hours minimum)</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-2">
                            <FormControl component="fieldset" className="w-full">
                                <RadioGroup className="flex w-full flex-row" style={{ flexDirection: 'row' }} aria-label="gender" name="gender1" value={value.value2} onChange={handleChange.bind(this, 'value2')}>
                                    <FormControlLabel value="yes" control={<Radio color="default" />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio color="default" />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <styled.Header>
                    <p>Personal Information:</p>
                </styled.Header>
                <div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2">
                            <p>Full Name:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-5">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2">
                            <p>Date of Birth:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-5">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2">
                            <p>Nickname:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-5">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2">
                            <p>Home Address:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-5">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2">
                            <p>City:</p>
                        </div>
                        <div className="grid grid-cols-8 col-span-5">
                            <div className="border-2 col-span-3 border-l-0 p-2">
                                <styled.Input className="w-full" />
                            </div>
                            <div className="border-2 border-l-0 p-2">
                                <p>State:</p>
                            </div>
                            <div className="border-2 border-l-0 col-span-2 p-2">
                                <styled.Input className="w-full" />
                            </div>
                            <div className="border-2 border-l-0 p-2">
                                <p>Zip Code:</p>
                            </div>
                            <div className="border-2 border-l-0 p-2">
                                <styled.Input className="w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2">
                            <p>Cell Phone:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-5">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2">
                            <p>Personal Email:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-5">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                </div>
                <styled.Header>
                    <p>Firm Information:</p>
                </styled.Header>
                <div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2">
                            <p>Firm Name:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-5">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2">
                            <p>Firm Address:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-5">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2">
                            <p>City:</p>
                        </div>
                        <div className="grid grid-cols-8 col-span-5">
                            <div className="border-2 col-span-3 border-l-0 p-2">
                                <styled.Input className="w-full" />
                            </div>
                            <div className="border-2 border-l-0 p-2">
                                <p>State:</p>
                            </div>
                            <div className="border-2 border-l-0 col-span-2 p-2">
                                <styled.Input className="w-full" />
                            </div>
                            <div className="border-2 border-l-0 p-2">
                                <p>Zip Code:</p>
                            </div>
                            <div className="border-2 border-l-0 p-2">
                                <styled.Input className="w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2">
                            <p>Work Number:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-5">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2">
                            <p>Fax Number:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-5">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2">
                            <p>Work Email:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-5">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                </div>
                <styled.Header>
                    <p>Membership Information:</p>
                </styled.Header>
                <div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2 col-span-4">
                            <p>Do you currently hold, or have held in the past, membership in any other Board?</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-2">
                            <FormControl component="fieldset" className="w-full">
                                <RadioGroup className="flex w-full flex-row" style={{ flexDirection: 'row' }} aria-label="gender" name="gender1" value={value.value3} onChange={handleChange.bind(this, 'value3')}>
                                    <FormControlLabel value="yes" control={<Radio color="default" />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio color="default" />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2 col-span-4">
                            <p>If yes, please name the Board/Association and your affiliation:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-2">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2 col-span-4">
                            <p>If yes, list the years of membership:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-2">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="border-2 p-2">
                            <p>Please Note: If you hold an active membership with another Board/Association, we require a letter of good standing before we can process your membership application. Please send the letter to: xxxxxx. Please contact x with any questions.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2 col-span-4">
                            <p>Have you been found in violation of the Code of Ethics or other membership duties in any Association of Agents in the past three years or are there any such complaints pending?</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-2">
                            <FormControl component="fieldset" className="w-full">
                                <RadioGroup className="flex w-full flex-row" aria-label="gender" name="gender1" value={value.value4} onChange={handleChange.bind(this, 'value4')}>
                                    <FormControlLabel value="yes" control={<Radio color="default" />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio color="default" />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2 col-span-4">
                            <p>Have you ever been refused membership in any other Association of Agents?</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-2">
                            <FormControl component="fieldset" className="w-full">
                                <RadioGroup className="flex w-full flex-row" aria-label="gender" name="gender1" value={value.value5} onChange={handleChange.bind(this, 'value5')}>
                                    <FormControlLabel value="yes" control={<Radio color="default" />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio color="default" />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2 col-span-4">
                            <p>Do you hold, or have you ever held, a real estate license in any other state(s)? </p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-2">
                            <FormControl component="fieldset" className="w-full">
                                <RadioGroup className="flex w-full flex-row" aria-label="gender" name="gender1" value={value.value6} onChange={handleChange.bind(this, 'value6')}>
                                    <FormControlLabel value="yes" control={<Radio color="default" />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio color="default" />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2 col-span-4">
                            <p>If Yes, please list the state(s):</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-2">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2 col-span-4">
                            <p>Have you or your firm been found in violation of state real estate licensing regulations or other laws prohibiting unprofessional conduct rendered by the courts or other lawful authorities within the last three years?</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-2">
                            <FormControl component="fieldset" className="w-full">
                                <RadioGroup className="flex w-full flex-row" aria-label="gender" name="gender1" value={value.value7} onChange={handleChange.bind(this, 'value7')}>
                                    <FormControlLabel value="yes" control={<Radio color="default" />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio color="default" />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="grid grid-cols-6">
                        <div className="border-2 p-2 col-span-4">
                            <p>Have you or your firm been convicted of a felony or other crime?</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-2">
                            <FormControl component="fieldset" className="w-full">
                                <RadioGroup className="flex w-full flex-row" aria-label="gender" name="gender1" value={value.value8} onChange={handleChange.bind(this, 'value8')}>
                                    <FormControlLabel value="yes" control={<Radio color="default" />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio color="default" />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <styled.Header>
                    <p>Business Services/Skills:</p>
                </styled.Header>
                <div>
                    <div className="grid grid-cols-7">
                        <div className="border-2 p-2 col-span-3">
                            <p>Do you have any Real Estate Designations or Certificates?</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-7">
                        <div className="border-2 p-2 col-span-3">
                            <p>Additional Business Skills, Talents, Interests?</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-7">
                        <div className="border-2 p-2 col-span-3">
                            <p>Do you offer any other real estate services?</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-7">
                        <div className="border-2 p-2 col-span-3">
                            <p>What languages do you speak?</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-7">
                        <div className="border-2 p-2 col-span-3">
                            <p>Are you licensed or certified in any other industry?</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-7">
                        <div className="border-2 p-2 col-span-3">
                            <p>Do you volunteer for any charities or non-profit organizations?</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-7">
                        <div className="border-2 p-2 col-span-3">
                            <p>Are you involved in the city or county government?</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="border-2 p-2 col-span-3">
                            <p>Applicants Signature:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-2">
                            <p>Date:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-3">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                </div>
                <styled.Subtitle>
                    MLS BCS Multiple Listing Agreement
                </styled.Subtitle>
                <div className="grid grid-cols-1">
                    <div className="border-2 p-2">
                        <p>For and in consideration of receiving the services and benefits of the MLS BCS Multiple Listing Service, I, the undersigned, do hereby agree to abide by the rules and regulations of the Service; to arbitrate any dispute with fellow Agents arising from the use of the Service; to pay such service charges in a timely manner as may be established by the MLS BCS Multiple Listing Service by virtue of minimums required by the publisher. I understand that my failure to abide by all of the provisions above may result in suspension or expulsion from the MLS BCS Multiple Listing Service upon written notice setting forth the grounds, therefore.</p>
                    </div>
                    <div className="border-2 p-2">
                        <p>Agreed and accepted this <span className="underground">{day}</span> day of <span className="underground">{month}</span>, 2021</p>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="border-2 p-2 col-span-3">
                            <p>Broker's Signature</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-9">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="border-2 p-2 col-span-3">
                            <p>Company Name</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-9">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                </div>
                <styled.Subtitle>
                    Credit Card Authorization Form
                </styled.Subtitle>
                <div>
                    <div className="grid grid-cols-7">
                        <div className="border-2 p-2 col-span-3">
                            <p>Name as it appears on Credit Card:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-7">
                        <div className="border-2 p-2 col-span-3">
                            <p>Company Name:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-7">
                        <div className="border-2 p-2 col-span-3">
                            <p>Credit Card Billing Address:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-7">
                        <div className="border-2 p-2 col-span-3">
                            <p>Phone:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-7">
                        <div className="border-2 p-2 col-span-3">
                            <p>Credit Card Type (Check One)</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <FormControl component="fieldset" className="w-full">
                                <RadioGroup className="flex w-full flex-row" style={{ flexDirection: 'row' }} aria-label="gender" name="gender1" value={value.card} onChange={handleChange.bind(this, 'card')}>
                                    <FormControlLabel value="visa" control={<Radio color="default" />} label="Visa" />
                                    <FormControlLabel value="mastercard" control={<Radio color="default" />} label="Master Card" />
                                    <FormControlLabel value="amex" control={<Radio color="default" />} label="AMEX" />
                                    <FormControlLabel value="discover" control={<Radio color="default" />} label="Discover" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="grid grid-cols-7">
                        <div className="border-2 p-2 col-span-3">
                            <p>Credit Card Expiration Date & CID</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-7">
                        <div className="border-2 p-2 col-span-3">
                            <p>2021 Application Fee</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-7">
                        <div className="border-2 p-2 col-span-3">
                            <p>Total Due:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="border-2 p-2">
                            <p>I AUTHORIZE MLS BCS to charge my Visa, Master Card, AMEX or Discover for my 2021 MLS BCS membership Dues & Fees.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="border-2 p-2 col-span-3">
                            <p>Signature:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-4">
                            <styled.Input className="w-full" />
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-2">
                            <p>Date:</p>
                        </div>
                        <div className="border-2 border-l-0 p-2 col-span-3">
                            <styled.Input className="w-full" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <styled.Button onClick={() => {
                        html2canvas(node.current, {scrollY: -window.scrollY}).then(canvas => {
                          var data = canvas.toDataURL();
                          var pdfExportSetting = {
                            content: [
                              {
                                image: data,
                                height: 2000
                              }
                            ]
                          };
                          // console.log('aaa', pdfExportSetting);
                          // var a = document.createElement("a"); //Create <a>
                          // a.href = pdfExportSetting.content[0].image; //Image Base64 Goes here
                          // a.download = "Image.png"; //File name Here
                          // var image = new Image();
                          // image.src = pdfExportSetting.content[0].image;
                          const formData = new FormData();

                          var blob = new Blob([pdfExportSetting.content[0].image], { type: "image/png"});
                          const myFile = new File([blob], "image.png", {
                              type: 'image/png',
                          });
                          formData.append('image', myFile);

                          service('form', null, formData, 'post')
                              .then(data => {
                                  console.log('data', data);
                              });
                          // document.body.appendChild(image);
                          // a.click(); //Downloaded file
                          // pdfMake.createPdf(pdfExportSetting).download("test_file.pdf");
                        });
                    }}>SUBMIT FORM</styled.Button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ auth }) => ({
    auth,
});

export default connect(mapStateToProps)(Home);
