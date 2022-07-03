import { Component } from "solid-js";
import { FlightPlan } from "./data";

export const FlightStrip: Component<{ plan: FlightPlan }> = (props) => {
  return (
    <div>
      <table class="table-fixed">
        <thead>
          <tr>
            <th class="w-20" />
            <th class="w-10" />
            <th class="w-10" />
            <th class="w-full" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2 align-top">
              <p>{props.plan.callsign}</p>
              <p>{props.plan.aircraftType}</p>
              <p>{props.plan.flightRule}</p>
            </td>
            <td class="border px-4 py-2 align-top">
              <p>{props.plan.squawk}</p>
              <p>{props.plan.cruiseAltitude}</p>
              <p>{props.plan.cruiseAltitude}</p>
            </td>
            <td class="border px-4 py-2 align-top">
              <p>{props.plan.departure}</p>
              <p>{props.plan.arrival}</p>
              <p>{props.plan.alternate}</p>
            </td>
            <td class="border px-4 py-2 align-top">
              <p>{props.plan.route}</p>
              <br />
              <p>{props.plan.remarks}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
