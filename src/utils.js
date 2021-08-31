// 防抖：就是在触发事件后，等完成后间隔多久执行回调
export function debounce(fn, wait, immediate = false) {
    // timeId需要放在函数外面，需要上一次的timeId
    let timeId

    return function (...params) {
        if (timeId) clearTimeout(timeId)
        const callNow = !timeId
        if (immediate) {
            timeId = setTimeout(() => {
                timeId = null
            }, wait)
            if (callNow) fn.apply(this, params)
        } else {
            timeId = setTimeout(() => {
                // 上下文 & 传参
                fn.apply(this, params)
            }, wait)
        }
    }
}

// 节流：间隔设置的时间执行回调，无论在这个间隔里面触发了几次
// immediate:表示立即执行
export function throttle(fn, wait, immediate = false) {
    let begin = 0, timer = null
    // 闭包：可能存在上下文的问题this的问题
    return function (...params) {
        if (immediate) {
            // 每次需要获取当前的时间
            // 然后减去开始的时间'
            const now = Date.now()
            if (now - begin > wait) {
                fn.apply(this, params)
                begin = now
            }
        } else {
            if (!timer) {
                timer = setTimeout(() => {
                    fn.apply(this, params)
                    timer = null
                }, wait)
            }
        }
    }
}