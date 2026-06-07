import { writable, derived } from "svelte/store"

export const selected_widget_id = writable<number>(0)
export const selected_widget_type = writable<string>("empty")

export default {}
