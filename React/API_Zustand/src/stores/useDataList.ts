import { create } from "zustand";

export const useDataList = create((set) => ({
    loading: false,
    error: "",
    listData: [],
}))

