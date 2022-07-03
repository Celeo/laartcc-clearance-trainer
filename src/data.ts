export type FlightRule = "IFR" | "VFR";

export const ISSUES = [
  "Route - departure",
  "Route - transition",
  "Route - waypoints",
  "Route - arrival",
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
  description: string;
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
    description: "",
    flightPlan: {
      callsign: "SWA1234",
      aircraftType: "A320/G",
      flightRule: "IFR",
      squawk: 5425,
      cruiseAltitude: 290,
      departure: "KSAN",
      arrival: "KLAS",
      alternate: "KLAX",
      route: "PADRZ2 CHKNN SEBBY YELAH MISEN RNDRZ2",
      remarks: "/v/",
    },
    issues: [],
    notes: "",
  },
];
