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
}

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
  },
];
