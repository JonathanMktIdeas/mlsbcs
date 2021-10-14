import React, { useState, useEffect } from 'react'
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import Slider from "react-slick";
import styled from './ServiceProviders.style';


import DirectorCard from "@components/directorCard";

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '@modules/counter/actions';
import { Category, CollectionsBookmarkOutlined } from '@material-ui/icons';
import {
  BrowserRouter as Router,
  Link,
  IndexLink,
  NavLink,
  useLocation
} from 'react-router-dom';
import { Fragment } from 'react';

/*
const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
};
*/
const dataProvider = [
  {
    company: "LOS CABOS REAL ESTATE MAGAZINE",
    name: "DANIEL WINCHESTER",
    position: "",
    withBorder: false,
    phone: "+562 310 3045",
    email: "info@loscabosrealstate.com",
    image: "/assets/images/sp1.png",
    category: "03",
  },
  {
    company: "LOS CABOS HOME INSPECTIONS",
    name: "GARY KAUFMAN",
    position: "",
    withBorder: false,
    phone: "+624 180 2948",
    email: "cabokid98@aol.com",
    image: "/assets/images/sp2.png",
    category: "02",
  },
  {
    company: "GLOBAL MORTGAGE",
    name: "DIRECTOR",
    position: "",
    withBorder: false,
    phone: "+866 509 4657",
    email: "info@globalmortgage.mx",
    image: "/assets/images/sp3.jpeg",
    category: "04",
  },
  {
    company: "CORREDURIA PUBLICA # 9",
    name: "ROMINA DEL CARMEN RUIZ CARDENAS",
    position: "",
    withBorder: false,
    phone: "+624 143 4838",
    email: "rominaruiz@correduria9bcs.com",
    image: "/assets/images/sp4.jpeg",
    category: "05",
  },
  {
    company: "CICS Avaluos",
    name: "Luis Pedro Cervantes Santamaria",
    position: "",
    withBorder: false,
    phone: "+624-143-2999",
    email: "PEDRO@CABOSUR.NET",
    image: "/assets/images/cics.jpeg",
    category: "01",
  },
  {
    company: "INTERCAM BANCO SA",
    name: "Arnulfo Cordero López",
    position: "",
    withBorder: false,
    phone: "555-033-3334",
    email: "ACORDEROL@INTERCAM.COM.MX",
    image: "/assets/images/intercam.jpeg",
    category: "04",
  },
];

const Members = props => {
  const { t } = props.useTranslation('common');
  let slider = React.useRef(null);



  return (
    <div>
      <styled.Banner className="flex justify-center items-center">
        <styled.Shadow className="text-6xl text-white font-bold uppercase">
          {t("service_providers")}
        </styled.Shadow>
      </styled.Banner>
      <div className="container w-full xl:w-2/5 mx-auto my-24 px-12 xl:px-0">
        <p className="text-lg text-justify">{t("our_collaboration")}</p>
      </div>
      <div className="w-full xl:w-2/3 mx-auto grid grid-cols-1 xl:grid-cols-5 gap-4">

        <Router>
          <QueryParamsFilter all='c' lang={t} />
        </Router>

      </div>

    </div>
  );
};

function useQuery() {

  const params = new URLSearchParams(useLocation().search)

  return params

}

function QueryParamsFilter({ all, lang }) {
  let query = useQuery();

  
const values = [
  { id: 0, text:"All" },
  { id: 1, text:"Appraisal" },
  { id: 2, text:"Home inspections" },
  { id: 3, text:"Magazine" },
  { id: 4, text:"Mortgages" },
  { id: 5, text:"Notaries" }
];

const [activeId, setActiveId] = useState(
  window.localStorage.getItem("id") == 0 ? 1 : window.localStorage.getItem("id")
);


const setLocalStorage = value =>{
  try{
    setActiveId(value)
    window.localStorage.setItem("id", value)
    console.log(window.localStorage.getItem("id"))

  } catch (error) {
    console.error(error)
  }
}

  return (
    <Fragment>
    
      <div className="w-full xl:w-3/4 px-12 xl:px-0">
        <p className="text-lg font-bold mb-2">{lang("categories")}</p>

        <ul>
        {values.map((val) => (
        
          <li className={window.localStorage.getItem("id") == val.id ? "active" : "inactive" } onClick={() => setLocalStorage(val.id)}>
            <Link className="d-block" >{val.text}</Link>
          </li>
             //to={val.filter}
        ))}
      </ul>

      </div>
      <div className="container mx-auto pb-24 col-span-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

          <Child idCategory={window.localStorage.getItem("id")} lang={lang} />

        </div>
      </div>

    </Fragment>

    
  )
};

const checkActive = (match, location) => {
  //some additional logic to verify you are in the home URI
  if (!location) return false;
  const { pathname } = location;
  console.log(pathname);
  return pathname === "/";
}

function Child({ idCategory, lang }) {

  //console.log(name == null);
  //

  return (

    <Fragment>
      {dataProvider.filter(dataCategory => dataCategory.category.includes((idCategory == null) ? "0" : idCategory)).map((d, i) => (
        <DirectorCard
          key={i}
          company={d.company}
          name={d.name}
          position={d.position}
          withBorder={d.withBorder}
          t={lang}
          phone={d.phone}
          email={d.email}
          image={d.image}
        />
      ))}
    </Fragment>
  )
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
)(Members)
