import { create } from "zustand";
import { api } from "../services/api";


interface IList {
    id: number;
    category: string;
    title: string;
    content: string;
    author: string;
}

interface IListDataStore {
    loading: boolean;
    error: string;
    listData: IList[];
    loadListData: () => Promise<void>;
}

export const useDataList = create<IListDataStore>((set) => ({
    loading: false,
    error: "",
    listData: [],
    loadListData: async () => {
        try {
            set({ loading: true, error: "" });
            const { data } = await api.get<IList[]>(`/news`);
            set({ listData: data });
        } catch (error) {
            console.log(error);
            set({ error: "Ocorreu um erro." });
        } finally {
            set({ loading: false });
        }
    }
}))







