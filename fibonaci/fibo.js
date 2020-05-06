
const fibo = (n) => {

    let fibo_num = [0, 1, 1]

    if (n <= 0) return 0
    if (n < 4) return fibo_num[n - 1]

    const MAX_NUM = n - fibo_num.length
    for (i = 0; i < MAX_NUM; i++){

        let next_number = fibo_num[1] + fibo_num[2]
        fibo_num.shift()
        fibo_num.push(next_number)

    }

    return fibo_num[2]

}

module.exports = fibo