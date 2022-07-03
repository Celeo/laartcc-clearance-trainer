export type FlightRule = "IFR" | "VFR";

export const ISSUES = [
  "Departure",
  "Transition",
  "Waypoints",
  "Arrival",
  "Cruise Altitude",
  "Remarks",
] as const;

export type Issue = typeof ISSUES[number];

export interface FlightPlan {
  callsign: string;
  aircraftType: string;
  flightRule: FlightRule;
  squawk: number;
  cruiseAltitude: number;
  departure: string;
  arrival: string;
  alternate: string;
  route: string;
  remarks: string;
}

export interface Question {
  preface: string;
  flightPlan: FlightPlan;
  issues: Array<Issue>;
  notes: string;
}

/**
 * =================
 *      WARNING
 * =================
 *
 * Below here, all of the questions are defined. If you're here to poke around the code, nothing
 * interesting to you is below here. If you're here to look for answers to submit and you don't
 * want to use the app, then continue reading. If you're here looking for the answer to a question,
 * remember that that isn't the point of the app. This app isn't _graded_, it doesn't actually
 * count for anything. It's **just practice**.
 */

export const QUESTIONS: Array<Question> = [
  {
    preface: "",
    flightPlan: {
      callsign: "SWA1234",
      aircraftType: "A320/G",
      flightRule: "IFR",
      squawk: 5425,
      cruiseAltitude: 29_000,
      departure: "KSAN",
      arrival: "KLAS",
      alternate: "KLAX",
      route: "PADRZ2 CHKNN SEBBY YELAH MISEN RNDRZ2",
      remarks: "/v/",
    },
    issues: [],
    notes: "",
  },
  {
    preface: "",
    flightPlan: {
      callsign: "SWA1234",
      aircraftType: "B737/L",
      flightRule: "IFR",
      departure: "KLAX",
      arrival: "KOAK",
      alternate: "NONE",
      cruiseAltitude: 26_000,
      squawk: 0,
      route: "LADYJ2 COREZ RGOOD EMZOH3",
      remarks: "/v/",
    },
    issues: ["Departure", "Cruise Altitude"],
    notes: "EMZOH STAR requires AoA FL280; LADYJ2 is not current",
  },
  {
    preface: "",
    flightPlan: {
      callsign: "JBU1234",
      aircraftType: "A321/L",
      flightRule: "IFR",
      departure: "KLAX",
      arrival: "KJFK",
      alternate: "NONE",
      cruiseAltitude: 33_000,
      squawk: 0,
      route: "DOTSS2 CLEEE",
      remarks: "/v/",
    },
    issues: [],
    notes: "No LOA with ZNY",
  },
  {
    preface: "",
    flightPlan: {
      callsign: "N285FG",
      aircraftType: "TBM9/L",
      flightRule: "IFR",
      departure: "KSAN",
      arrival: "KLAX",
      alternate: "NONE",
      cruiseAltitude: 22_000,
      squawk: 5296,
      route: "ZZOOO2 MTBAL V8 TANDY MERMA",
      remarks: "/r/",
    },
    issues: ["Departure", "Arrival", "Waypoints"],
    notes: "Requires TEC",
  },
  {
    preface: "",
    flightPlan: {
      callsign: "N123AB",
      aircraftType: "C172",
      flightRule: "IFR",
      departure: "KSAN",
      arrival: "KSEE",
      alternate: "NONE",
      cruiseAltitude: 11_000,
      squawk: 5826,
      route: "ZZOOO2 IPL DCT",
      remarks: "/t/",
    },
    issues: [],
    notes: "",
  },
  {
    preface: "",
    flightPlan: {
      callsign: "N248YL",
      aircraftType: "C172",
      flightRule: "VFR",
      departure: "KSAN",
      arrival: "KFLG",
      alternate: "KPHX",
      cruiseAltitude: 13_500,
      squawk: 0,
      route: "",
      remarks: "/v/",
    },
    issues: [],
    notes: "",
  },
  {
    preface: "",
    flightPlan: {
      callsign: "N967BB",
      aircraftType: "C172",
      flightRule: "VFR",
      departure: "KSAN",
      arrival: "KPHX",
      alternate: "NONE",
      cruiseAltitude: 11_00,
      squawk: 0,
      route: "",
      remarks: "/v/",
    },
    issues: ["Cruise Altitude"],
    notes: "",
  },
  {
    preface: "",
    flightPlan: {
      callsign: "UAL1107",
      aircraftType: "B737/L",
      flightRule: "IFR",
      departure: "KSAN",
      arrival: "KSFO",
      alternate: "KLAX",
      cruiseAltitude: 34_000,
      squawk: 4582,
      route: "PADRZ2 IKAYE RIZIN SPLNT STOKD SERFR SERFR4",
      remarks: "/v/",
    },
    issues: [],
    notes: "",
  },
  {
    preface: "",
    flightPlan: {
      callsign: "SWA845",
      aircraftType: "B737/L",
      flightRule: "IFR",
      departure: "KSAN",
      arrival: "KDEN",
      alternate: "KBKF",
      cruiseAltitude: 39_000,
      squawk: 0,
      route: "ZZOOO2 MTBAL EED J236 TBC SHNPS TBARR3",
      remarks: "/v/",
    },
    issues: [],
    notes: "",
  },
  {
    preface: "",
    flightPlan: {
      callsign: "SWA1442",
      aircraftType: "B737/L",
      flightRule: "IFR",
      departure: "KSAN",
      arrival: "KSLC",
      alternate: "KEVW",
      cruiseAltitude: 37_000,
      squawk: 4665,
      route: "ZZOOO2 MTBAL CADEZ HAKMN Q73 LAKRR MLF QWENN5",
      remarks: "",
    },
    issues: ["Remarks"],
    notes: "",
  },
  {
    preface: "",
    flightPlan: {
      callsign: "SWA710",
      aircraftType: "B737/L",
      flightRule: "IFR",
      departure: "KSAN",
      arrival: "KLAS",
      alternate: "KIFP",
      cruiseAltitude: 31_000,
      squawk: 5389,
      route: "PADRZ2 CHKNN YELAH MISEN RNDRZ2",
      remarks: "",
    },
    issues: ["Waypoints"],
    notes: "Missing SEBBY waypoint",
  },
  // {
  //   preface: "",
  //   flightPlan: {
  //     callsign: "",
  //     aircraftType: "",
  //     flightRule: "IFR",
  //     departure: "",
  //     arrival: "",
  //     alternate: "",
  //     cruiseAltitude: 0,
  //     squawk: 4665,
  //     route: "",
  //     remarks: "",
  //   },
  //   issues: [],
  //   notes: "",
  // },
];
