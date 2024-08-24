import {clsx} from 'clsx'
import { twMerge } from "tailwind-merge";

// tailwind merge util class
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
  };