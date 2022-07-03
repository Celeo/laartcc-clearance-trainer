import { Component, createSignal, For, Show } from "solid-js";
import { Question, ISSUES, Issue } from "./data";
import { FlightStrip } from "./FlightStrip";
import { QuestionResults } from "./QuestionResults";

export const AskQuestion: Component<{ question: Question }> = (props) => {
  type ButtonSelected = "None" | "Valid" | "Invalid";
  type Buttons = "Valid" | "Invalid" | "Submit";

  const [buttonSelected, setButtonSelected] =
    createSignal<ButtonSelected>("None");
  const [issuesSelected, setIssuesSelected] = createSignal<Array<Issue>>([]);
  const [submitted, setSubmitted] = createSignal(false);

  const toggleButtonSelected = (which: ButtonSelected): void => {
    if (which === buttonSelected()) {
      setButtonSelected("None");
      return;
    }
    if (which === "Valid") {
      setIssuesSelected([]);
    }
    setButtonSelected(which);
  };

  const toggleIssueSelected = (issue: Issue, checked: boolean): void => {
    if (checked) {
      setIssuesSelected([issue, ...issuesSelected()]);
    } else {
      const issues = [...issuesSelected()];
      issues.splice(issues.indexOf(issue), 1);
      setIssuesSelected(issues);
    }
  };

  const buttonClasses = (which: Buttons): string => {
    const base = "p-2 mt-5 rounded shadow-md ";
    if (which === "Submit") {
      if (buttonSelected() === "None") {
        return base + "text-white bg-gray-500 w-full";
      }
      return base + "text-white bg-blue-500 w-full";
    } else if (which === "Valid") {
      if (buttonSelected() === "Valid") {
        return base + "text-white bg-green-700 flex-auto";
      }
      return base + "text-black bg-green-200 flex-auto";
    } else if (which === "Invalid") {
      if (buttonSelected() === "Invalid") {
        return base + "text-white bg-red-700 flex-auto ml-10";
      }
      return base + "text-black bg-red-200 flex-auto ml-10";
    }
    return "";
  };

  const readyToSubmit = (): boolean => {
    return (
      buttonSelected() === "Valid" ||
      (buttonSelected() === "Invalid" && issuesSelected().length > 0)
    );
  };

  return (
    <div>
      <Show when={props.question.description.length > 0}>
        <div class="pb-3">
          <strong>Information: </strong> {props.question.description}
        </div>
      </Show>
      <FlightStrip plan={props.question.flightPlan} />
      <Show when={submitted()}>
        <div class="pt-5">
          <QuestionResults
            question={props.question}
            issues={issuesSelected()}
          />
        </div>
      </Show>
      <Show when={!submitted()}>
        <div class="flex">
          <button
            class={buttonClasses("Valid")}
            onClick={() => toggleButtonSelected("Valid")}
          >
            Valid
          </button>
          <button
            class={buttonClasses("Invalid")}
            onClick={() => toggleButtonSelected("Invalid")}
          >
            Invalid
          </button>
        </div>
        <Show when={buttonSelected() === "Invalid"}>
          <div class="mt-3">
            <For each={ISSUES}>
              {(item) => (
                <>
                  <input
                    class="ml-3"
                    type="checkbox"
                    id={item}
                    value={item}
                    onChange={(e) =>
                      toggleIssueSelected(
                        e.currentTarget.value as Issue,
                        e.currentTarget.checked
                      )
                    }
                  />
                  <label for={item} class="pl-3">
                    {item}
                  </label>
                  <br />
                </>
              )}
            </For>
          </div>
        </Show>
        <Show when={readyToSubmit()}>
          <button
            class={buttonClasses("Submit")}
            onClick={() => setSubmitted(true)}
          >
            Submit
          </button>
        </Show>
      </Show>
    </div>
  );
};
