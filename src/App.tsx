import { Component, createSignal, Show } from "solid-js";
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
      <Show when={currentIndex() !== -1}>
        <AskQuestion question={QUESTIONS[currentIndex()]} />
      </Show>
    </div>
  );
};
