//複数の場所で使用できるように、ここで定義する
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

//インクリメント側のアクション
const increment = () => ({
    type: INCREMENT
})

//デクリメント側のアクション
const decrement = () =>({
    type: DECREMENT
})

