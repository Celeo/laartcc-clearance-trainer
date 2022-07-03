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
];
