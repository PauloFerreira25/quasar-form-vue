export const setObjectValueByStringNameTree = (stringT, obj, value) => {
    let tempArray = String(stringT).split('.');
    let last = tempArray.pop()
    let stateObject = tempArray.reduce((p, c) => p && p[c] || null, obj)
    stateObject[last] = value
}



export default {
    setObjectValueByStringNameTree
}