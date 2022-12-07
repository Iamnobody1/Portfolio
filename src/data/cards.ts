import { reactive } from "vue";
import { CardsI } from "../types/card.type";

export const cards: CardsI[] = reactive([
  {
    id: 1,
    title: "a",
  },
  {
    id: 2,
    title: "b",
  },
  {
    id: 3,
    title: "c",
  },
]);
