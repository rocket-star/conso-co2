import React from "react";
import { LineChart } from "@opd/g2plot-react";

const config = {
  title: {
    visible: true,
    text: "En utilisant Webex Teams"
  },
  description: {
    visible: true,
    text: "Voici combien de CO2 avez vous économiser"
  },
  padding: "auto",
  forceFit: true,
  data: [
    { year: "2004", value: 3 },
    { year: "2006", value: 4 },
    { year: "2008", value: 3.5 },
    { year: "2010", value: 5 },
    { year: "2012", value: 4.9 },
    { year: "2014", value: 6 },
    { year: "2016", value: 7 },
    { year: "2018", value: 9 },
    { year: "2020", value: 13 }
  ],
  xField: "year",
  yField: "value",
  smooth: true,
  meta: {
    year: {
      alias: "年份"
    },
    value: {
      alias: "Niveau (en g)"
    }
  }
};

export default () => (
  <section>
    <h2 style={{textAlign:"center"}}>CO2 emission</h2>
    <LineChart {...config} />
  </section>
);
