import { createSlice } from "@reduxjs/toolkit"
import { createSelector } from "@reduxjs/toolkit"
import { selectNameFilter } from "./filtersSlice"
import { fetchContacts, addContact, deleteContact } from "./contactsOps"

const slice = createSlice({
    name: "contacts",
    initialState: {
      items: [],
      loading: false,
      error: null
    },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false
        state.items = action.payload
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(addContact.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.items.push(action.payload)
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(deleteContact.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        )
        state.items.splice(index, 1)
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})
export default slice.reducer
export const selectContacts = (state) => state.contacts.items
export const selectError = (state) => state.contacts.error
export const selectLoading = (state) => state.contacts.loading
export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter],
  (contacts, filters) => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filters.toLowerCase()))
})