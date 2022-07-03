import { Component, Show, For } from "solid-js";
import { Question, Issue } from "./data";

export const QuestionResults: Component<{
  question: Question;
  issues: Array<Issue>;
}> = (props) => {
  const isCorrect = (): boolean => {
    if (props.question.issues.length === 0 && props.issues.length === 0) {
      return true;
    }
    if (props.question.issues.length === props.issues.length) {
      for (const e of props.issues) {
        if (!props.question.issues.includes(e)) {
          return false;
        }
      }
      return true;
    }
    return false;
  };

  return (
    <>
      <Show when={isCorrect()}>
        <h3 class="text-3xl text-green-400 pt-5">Correct!</h3>
      </Show>
      <Show when={!isCorrect()}>
        <h3 class="text-3xl text-red-400 pb-10 pt-5">Incorrect</h3>
        <Show when={props.issues.length > 0}>
          <p>Reasons you listed:</p>
          <ul class="list-disc pb-5">
            <For each={props.issues}>
              {(item) => <li class="ml-10">{item}</li>}
            </For>
          </ul>
        </Show>
        <Show when={props.question.issues.length === 0}>
          <p>
            This plan, however, is <span class="text-green-300">valid</span>.
          </p>
        </Show>
        <Show when={props.question.issues.length > 0}>
          <p>Reasons this plan isn't valid:</p>
          <ul class="list-disc">
            <For each={props.question.issues}>
              {(item) => <li class="ml-10">{item}</li>}
            </For>
          </ul>
        </Show>
        <Show when={props.question.notes.length > 0}>
          <p class="pt-5">
            <strong>Notes: </strong>
            {props.question.notes}
          </p>
        </Show>
        <p class="pt-5">Helpful links:</p>
        <ul class="list-disc">
          <li class="ml-10">
            <a
              class="text-blue-400 underline"
              href="https://www.faa.gov/documentLibrary/media/Order/JO_7110.65X_Air_Traffic_Control.pdf"
              target="_blank"
            >
              FAA 7110.65
            </a>
          </li>
          <li class="ml-10">
            <a
              class="text-blue-400 underline"
              href="https://academy.vatusa.net/my/"
              target="_blank"
            >
              VATUSA Academy
            </a>
          </li>
          <li class="ml-10">
            <a
              class="text-blue-400 underline"
              href="https://laartcc.org/documents"
              target="_blank"
            >
              ZLA Docs
            </a>
          </li>
        </ul>
      </Show>
    </>
  );
};
