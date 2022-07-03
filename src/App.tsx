import { Component, createSignal, Show } from "solid-js";
import { Rerun } from "@solid-primitives/keyed";
import { QUESTIONS } from "./data";
import { AskQuestion } from "./AskQuestion";

export const App: Component = () => {
  const [shownQuestions, setShownQuestions] = createSignal<Array<number>>([]);
  const [currentIndex, setCurrentIndex] = createSignal(-1);

  const selectNext = () => {
    if (shownQuestions().length === QUESTIONS.length) {
      setCurrentIndex(-1);
      return;
    }
    while (true) {
      const next = Math.floor(Math.random() * QUESTIONS.length);
      if (!shownQuestions().includes(next)) {
        setShownQuestions([next, ...shownQuestions()]);
        setCurrentIndex(next);
        break;
      }
    }
  };

  selectNext();

  return (
    <div class="container mx-auto px-4 pt-4">
      <h2 class="font-bold text-center text-3xl pb-10">
        LA ARTCC Clearance Trainer
      </h2>
      <Show when={currentIndex() === -1}>
        <p class="text-red-700">Could not select a question</p>
      </Show>
      <Rerun on={currentIndex()}>
        <AskQuestion question={QUESTIONS[currentIndex()]} />
      </Rerun>
      <div class="pl-6 pb-6 fixed inset-x-0 bottom-0">
        <Show when={shownQuestions().length < QUESTIONS.length}>
          <button
            class="p-1 mb-3 rounded shadow-md text-black bg-white w-20"
            onClick={() => selectNext()}
          >
            Next
          </button>
        </Show>
        <Show when={shownQuestions().length === QUESTIONS.length}>
          <p class="text-sm">
            You've seen all the questions currently available.
          </p>
        </Show>
        <p class="text-sm">
          Feedback:{" "}
          <a
            class="text-blue-400 underline"
            target="_blank"
            href="https://github.com/Celeo/laartcc-clearance-trainer"
          >
            GitHub
          </a>
          , or Discord <i>Celeo#1453</i>
        </p>
      </div>
    </div>
  );
};
