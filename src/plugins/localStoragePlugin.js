const KEY = 'cart'
export const localStoragePlugin = (store) => {
    console.log('plugin init')

    store.replaceState(
        Object.assign(
            store.state,
            JSON.parse(window.localStorage.getItem(KEY))
        )
    )

    store.subscribe((mutation, state) => {
        console.log(mutation),
        window.localStorage.setItem(KEY, JSON.stringify(state))
    })
}
