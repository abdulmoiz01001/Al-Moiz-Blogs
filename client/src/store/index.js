import { create } from "zustand";
import { createModalSlice } from "./slices/modalSlices";
import { createBlogSlice } from "./slices/blogSlices";
import { createSearchSlice } from "./slices/searchSlices";


export const useAppStore = create()((set) => ({
   ...createModalSlice(set),
   ...createBlogSlice(set),
   ...createSearchSlice(set)
}))